import PrefaredPharmacy from "./PrefaredPharmacy";
// import { MdOutlineEdit } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiUser } from "react-icons/fi";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

interface IInputs {
  label: string;
  icon: ReactNode;
  value: string;
  name: string;
}

const inputNames = {
  Name: "Name",
  PhoneNumber: "PhoneNumber",
  Email: "Email",
  Info: "Info",
};

const inputs: IInputs[] = [
  {
    label: "Name",
    icon: <FiUser className="text-2xl" />,
    value: "Mohamed Ramadfdasan",
    name: inputNames.Name,
  },
  {
    label: "Phone Number",
    icon: <FiPhone className="text-2xl" />,
    value: "0123456789",
    name: inputNames.PhoneNumber,
  },
  {
    label: "Email",
    icon: <HiOutlineMail className="text-2xl" />,
    value: "email@example.com",
    name: inputNames.Email,
  },
  {
    label: "User Name",
    icon: <HiOutlineMail className="text-2xl" />,
    value: "email@example.com",
    name: inputNames.Info,
  },
];

const defaultData: Record<string, string> = {
  [inputNames.Name]: "Mohamed Elaraby",
  [inputNames.PhoneNumber]: "010101010100",
  [inputNames.Email]: "bropro@gmail.com",
  [inputNames.Info]: "my info",
};

interface IcurUser {
  firstName: string,
  lastName: string ,
  email: string,
  userName: string ,
  phoneNumber: string,
  profilePictureUrl: string,
  dateOfBirth: string,
  gender: string ,
}

const MainInfo = () => {
  const [UserData, setUserData] = useState(defaultData);
  const curUser : IcurUser|string|null  = useSelector((state: RootState) => state.CurUserSlice.curUser);
 
  useEffect(()=>{
    console.log(curUser);
    if (curUser) {
      setUserData((prev) => ({
        ...prev,
        [inputNames.Name]: curUser.firstName,
        [inputNames.PhoneNumber]: curUser.phoneNumber,
        [inputNames.Email]: curUser.email,
        [inputNames.Info]: curUser.userName,
      }));
    }

  },[])
  

  return (
    <div className="flex flex-col xl:flex-row justify-center gap-5 mt-2 w-full px-2">
      <div
        style={{
          backgroundImage: `url('/img/5559852.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col 2xl:flex-row items-center justify-center gap-5 md:gap-10 w-full rounded-2xl p-4 sm:p-5 max-w-full  mx-auto xl:basis-3/4 xl:flex-[3]"
      >
        <div className="flex flex-col justify-center items-center gap-5 sm:gap-10 w-full md:w-auto">
          <img
            src={`${import.meta.env.VITE_BASE_URL}${curUser!.profilePictureUrl}`}
            alt="User Avatar"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-60 xl:h-60 rounded-full object-cover border-2 border-dashed border-white"
          />
          {/* <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="bg-[#1C8DC9] text-white p-2 rounded-2xl cursor-pointer w-full sm:w-auto btn">
              Change Photo
            </button>
            <button className="bg-[#1C8DC9] text-white p-2 rounded-2xl cursor-pointer w-full sm:w-auto btn">
              Delete Photo
            </button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 gap-5 w-3xl max-w-full p-2 sm:p-5">
          {inputs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-start text-white font-bold w-full"
            >
              <label className="flex items-center text-base sm:text-lg md:text-xl font-bold gap-2">
                {item.icon}
                {item.label}
              </label>
              <input
                type="text"
                className="h-8 sm:h-10 text-base text-[#02457A] sm:text-lg md:text-xl indent-2 rounded-xl border-gray-400 w-full bg-white border-0"
                value={UserData[item.name]}
                name={item.name}
                disabled
              />
            </div>
          ))}

          {/* <div className="flex justify-center md:justify-end w-full max-w-3xl">
            <button className="bg-[#1C8DC9] rounded-2xl w-full sm:w-32 text-white p-2 cursor-pointer flex justify-center gap-3 items-center btn">
              <MdOutlineEdit className="text-white text-xl" />
              <span className="font-bold">Edit</span>
            </button>
          </div> */}
        </div>
      </div>

      <div
        className="hidden 2xl:flex flex-col items-start gap-5 p-4 sm:p-5 rounded-xl w-full max-w-full sm:max-w-md xl:max-w-lg bg-gray-50 h-auto xl:h-120 overflow-auto mx-auto xl:basis-1/4 xl:flex-[1]"
        style={{
          backgroundImage: `url('/img/5559852.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="text-xl sm:text-2xl font-bold text-white">
          Prefered Pharmacies
        </span>
        <div className="w-full flex flex-col gap-2">
          <PrefaredPharmacy />
          <PrefaredPharmacy />
          <PrefaredPharmacy />
          <PrefaredPharmacy />
          <PrefaredPharmacy />
          <PrefaredPharmacy />
          <PrefaredPharmacy />
          <PrefaredPharmacy />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
