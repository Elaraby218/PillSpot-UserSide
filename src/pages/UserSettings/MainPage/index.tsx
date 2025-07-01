import ProductPopular from "./Product";
import MainInfo from "./MainInfo";
import { Link } from "react-router-dom";
// import img from './images/image copy 4.png' // Removed since we use public path now


const UserSettingsMain = () => {
  return (
    <div className="flex flex-col justify-center px-2 sm:px-6 md:px-16 py-4 w-full">
      <MainInfo />

      <div className="flex flex-col lg:flex-row h-auto lg:h-80 mt-5 gap-y-6 gap-x-8 w-full">
        <div className="flex-1 min-w-0 hidden 2xl:block">
          <span className="p-1 text-lg sm:text-xl font-bold text-[#02457A] mb-2 block">
            Popular choices based on your past orders
          </span>
          <div className="flex flex-col sm:flex-col lg:flex-row gap-y-4 gap-x-4 lg:gap-x-8 w-full">
            <ProductPopular />
            <ProductPopular />
            <ProductPopular />
          </div>
        </div>

        <div
          className="flex-1 min-w-0 w-full max-w-full mx-auto mr-0 h-60 sm:h-72 lg:h-90 bg-cover bg-center rounded-2xl flex flex-col items-center justify-center mt-6 lg:mt-0"
          style={{ backgroundImage: "url('/img/5559852.jpg')" }}
        >
          <img
            src="/img/image.png"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-50 lg:h-50 mb-2"
            alt="Add Pharmacy"
          />
          <div className="text-center text-white font-bold text-base sm:text-lg px-4 sm:px-10 lg:px-20">
            Want to add your pharmacy to our system? Start here!
          </div>

          <Link to="/pharmacyregister">
            <span className="btn bg-[#02457A] text-white rounded-2xl border-0 mt-5 px-4 py-2 text-sm sm:text-base">
              Add Pharmacy
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsMain;
