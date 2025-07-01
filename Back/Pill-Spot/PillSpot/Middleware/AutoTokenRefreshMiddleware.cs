using Service.Contracts;
using Shared.DataTransferObjects;
using System.IdentityModel.Tokens.Jwt;
using Entities.ConfigurationModels;

namespace PillSpot.Middleware
{
    public class AutoTokenRefreshMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<AutoTokenRefreshMiddleware> _logger;
        private readonly IConfiguration _configuration;

        public AutoTokenRefreshMiddleware(
            RequestDelegate next,
            ILogger<AutoTokenRefreshMiddleware> logger,
            IConfiguration configuration)
        {
            _next = next;
            _logger = logger;
            _configuration = configuration;
        }

        public async Task InvokeAsync(HttpContext context, IServiceManager serviceManager)
        {
            try
            {
                var accessToken = context.Request.Cookies["accessToken"];
                var refreshToken = context.Request.Cookies["refreshToken"];

                _logger.LogInformation("[AutoTokenRefresh] accessToken: {Access}", accessToken ?? "null");
                _logger.LogInformation("[AutoTokenRefresh] refreshToken: {Refresh}", refreshToken ?? "null");

                if (!string.IsNullOrEmpty(accessToken) && !string.IsNullOrEmpty(refreshToken))
                {
                    var tokenHandler = new JwtSecurityTokenHandler();

                    try
                    {
                        var jwtToken = tokenHandler.ReadJwtToken(accessToken);
                        var expiry = jwtToken.ValidTo;
                        var now = DateTime.UtcNow;

                        _logger.LogInformation("[AutoTokenRefresh] Access token will expire at {Expiry}, now is {Now}", expiry, now);

                        if (expiry <= now.AddSeconds(20))
                        {
                            _logger.LogInformation("[AutoTokenRefresh] Access token will expire soon (within 20 seconds), attempting refresh...");

                            var tokenDto = new TokenDto(accessToken, refreshToken);

                            var newTokenDto = await serviceManager.AuthenticationService.RefreshToken(tokenDto);

                            if (newTokenDto != null)
                            {
                                var cookieSettings = _configuration.GetSection("CookieSettings").Get<CookieSettings>();
                                if (cookieSettings == null)
                                    throw new InvalidOperationException("Cookie settings are not configured");

                                var baseCookieOptions = new CookieOptions
                                {
                                    HttpOnly = true,
                                    Secure = true,
                                    SameSite = SameSiteMode.None,
                                    Path = "/"
                                };

                                var accessCookieOptions = new CookieOptions
                                {
                                    HttpOnly = false,
                                    Secure = baseCookieOptions.Secure,
                                    SameSite = baseCookieOptions.SameSite,
                                    Path = baseCookieOptions.Path,
                                    Expires = now.AddDays(4)
                                };
                                context.Response.Cookies.Append("accessToken", newTokenDto.AccessToken, accessCookieOptions);

                                var refreshCookieOptions = new CookieOptions
                                {
                                    HttpOnly = baseCookieOptions.HttpOnly,
                                    Secure = baseCookieOptions.Secure,
                                    SameSite = baseCookieOptions.SameSite,
                                    Path = baseCookieOptions.Path,
                                    Expires = now.AddDays(7)
                                };
                                context.Response.Cookies.Append("refreshToken", newTokenDto.RefreshToken, refreshCookieOptions);

                                _logger.LogInformation("[AutoTokenRefresh] Tokens successfully refreshed and cookies updated.");
                            }
                        }
                        else
                        {
                            _logger.LogInformation("[AutoTokenRefresh] Token is still valid; no refresh needed.");
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.LogWarning(ex, "[AutoTokenRefresh] Failed to parse or refresh token.");
                    }
                }
                else
                {
                    _logger.LogInformation("[AutoTokenRefresh] One or both tokens missing.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[AutoTokenRefresh] Unexpected error");
            }

            await _next(context);
        }
    }
}
