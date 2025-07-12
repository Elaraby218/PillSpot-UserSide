import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const OneOrderItem = () => {
  return (
    <div className="bg-gray-50 shadow-md rounded-2xl overflow-hidden p-4 flex flex-col md:flex-row gap-4 hover:bg-amber-50 hover:scale-[1.01] transition duration-300 w-full">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full sm:w-48 mx-auto md:mx-0">
        <img
          src="/img/image copy 2.png"
          alt="Product"
          className="w-full h-40 sm:h-48 object-cover rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow gap-3 text-center md:text-left">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold break-words">
          Name Name
        </h2>

        {/* Pharmacy Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-base sm:text-lg">
          <span>Pharmacy Pharmacy</span>
          <FaExternalLinkAlt className="text-sm" />
        </div>

        {/* Order Date Badge */}
        <div className="self-center md:self-start">
          <span className="badge badge-outline badge-info whitespace-nowrap">
            Order Date
          </span>
        </div>
      </div>

      {/* Price and Action */}
      <div className="flex flex-col justify-between items-center md:items-end gap-2 w-full md:w-auto mt-4 md:mt-0">
        <span className="text-xl sm:text-2xl font-bold text-[#02457A]">$50</span>
        <Link
          to="/"
          className="flex items-center gap-1 text-[#02457A] hover:underline"
        >
          View Product <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default OneOrderItem;
