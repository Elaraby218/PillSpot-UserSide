import Rating from "../../../UI/Rating"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PrefaredPharmacy = () => {
  return (
    <div className="flex bg-white w-full rounded-2xl p-1 sm:p-2 items-center gap-3 sm:gap-5 relative shadow-lg hover:scale-105 duration-200 hover:cursor-pointer min-h-[70px] sm:min-h-[80px]">
      <img src="/img/image copy.png" className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover" alt="" />
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-blue-900 text-xs sm:text-base">Name of pharmacy</span>
        <Rating value={5} />
      </div>
      <div className="absolute right-2 sm:right-4 bottom-1 sm:bottom-2 text-xs sm:text-base">
        3,5KM
      </div>
      <MdOutlineKeyboardArrowRight className="absolute right-2 sm:right-4 text-xl sm:text-2xl" />
    </div>
  )
}

export default PrefaredPharmacy
