import LogoSVG from "../../../UI/LogoSVG";
import { BiSearchAlt } from "react-icons/bi";
// import { IoNotificationsOutline } from "react-icons/io5";
import NotificationDrawer from "../../../components/Notification";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const UserSettingHeader = () => {
  const curUser = useSelector((state:RootState)=>state.CurUserSlice.curUser)
  return (
    <div className="bg-white w-full flex flex-col sm:flex-row justify-between items-center px-2 sm:px-8 py-2 gap-2 sm:gap-0">
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <LogoSVG w="36" h="36" />
        <span className="text-lg sm:text-2xl font-bold text-[#02457A] font-logo whitespace-nowrap">
          Pill Spot
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-6 mt-2 sm:mt-0 w-full sm:w-auto">
        <div className="flex items-center w-full max-w-xs">
          <input
            type="search"
            className="w-full h-9 sm:h-10 rounded-full px-4 border-0 bg-gray-100 text-sm sm:text-base"
            placeholder="Search..."
          />
          <BiSearchAlt className="text-2xl sm:text-3xl text-[#02457A] ml-2" />
        </div>
        <NotificationDrawer iconStyle="text-blue-800 text-2xl sm:text-3xl hover:scale-105 duration-200 cursor-pointer"/>
        <img
          src={`${import.meta.env.VITE_BASE_URL}${curUser.profilePictureUrl}`}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default UserSettingHeader;
