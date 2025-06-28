import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingCartPlus } from "react-icons/tb";
import { toast } from "sonner";
import { subscribeToProductAvailability } from "../../../../../features/NotificationSubscribe/NotificationSubscribService";


interface CategoryDto {
  categoryId: string;
  name: string;
}

interface SubCategoryDto {
  categoryDto: CategoryDto;
  subCategoryId: string;
  name: string;
}

interface ProductDto {
  productId: string;
  subCategoryDto: SubCategoryDto;
  name: string;
  description: string;
  usageInstructions: string;
  price: number;
  imageURL: string;
  manufacturer: string;
  createdDate: string;
}

interface LocationDto {
  longitude: number;
  latitude: number;
  additionalInfo: string;
  cityDto: null;
}

interface PharmacyDto {
  pharmacyId: string;
  name: string;
  logoURL: string;
  logo: null;
  locationDto: LocationDto;
  contactNumber: string;
  openingTime: string;
  closingTime: string;
  isOpen24: boolean;
  daysOpen: string;
}

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  productDto: ProductDto;
  pharmacyDto: PharmacyDto;
  onClose: () => void;
}

const ContextMenu = ({ x, y, visible, productDto, pharmacyDto, onClose }: ContextMenuProps) => {


  const handleAddToCart = () => {
    toast.success("Added to cart");
    onClose();
  };

  const handleAddToWishlist = () => {
    toast.success("Added to wishlist");
    onClose();
  };

  const handleViewDetails = () => {
    toast.info("Viewing product details");
    onClose();
  };

  const handleTrackAvailability = async () => {
    try {
      await subscribeToProductAvailability(productDto.productId, {
        isEnabled: true,
        notificationTypes: ["string"]
      });
      toast.success("You will be notified when this product is available.");
    } catch {
      toast.error("Failed to subscribe for product availability notification.");
    }
    onClose();
  };

  const handleCopyProductName = async () => {
    try {
      await navigator.clipboard.writeText(productDto.name);
      toast.success("Product name copied to clipboard");
    } catch {
      toast.error("Failed to copy product name");
    }
    onClose();
  };

  const handleCopyPharmacyName = async () => {
    try {
      await navigator.clipboard.writeText(pharmacyDto.name);
      toast.success("Pharmacy name copied to clipboard");
    } catch {
      toast.error("Failed to copy pharmacy name");
    }
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[240px]"
      style={{
        left: x,
        top: y,
      }}
    >
      <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <TbShoppingCartPlus className="text-lg" />
        Add to Cart
      </button>
      <button
        onClick={handleAddToWishlist}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <FaRegHeart className="text-lg" />
        Add to Wishlist
      </button>
      <button
        onClick={handleViewDetails}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View Details
      </button>
      <button
        onClick={handleTrackAvailability}
        className="w-full px-4 py-2 text-left text-sm text-blue-700 hover:bg-blue-100 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        Track Product Availability
      </button>
      <hr className="my-1" />
      <button
        onClick={handleCopyProductName}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Copy Product Name
      </button>
      <button
        onClick={handleCopyPharmacyName}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Copy Pharmacy Name
      </button>
    </div>
  );
};

export default ContextMenu; 