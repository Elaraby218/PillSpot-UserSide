import { TbRefresh } from "react-icons/tb";

const ProductPopular = () => {
  return (
    <div
      className="flex flex-col bg-white shadow-md border-1 border-gray-200 h-80 px-2 sm:px-4 rounded-xl justify-start w-full max-w-xs mx-auto"
    >
      <img src="/img/image copy 2.png" className="w-24 h-24 sm:w-50 sm:h-50 rounded-xl mt-2 sm:mt-3 object-cover mx-auto" />
      <div className="flex justify-between text-base sm:text-xl mt-3 sm:mt-5 items-center">
        <span className="p-1 sm:p-2 text-xs sm:text-sm font-bold">Panadol Extra</span>
        <button className="bg-[#1C8DC9] text-white px-2 rounded-2xl text-xs sm:text-md flex items-center gap-2 h-8 btn border-0">
          <TbRefresh />
          Reorder
        </button>
      </div>
      <span className="text-[10px] sm:text-[12px] mt-1 sm:mt-2">You have purchased this 3 times</span>
    </div>
  );
};

export default ProductPopular;
