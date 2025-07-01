import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsGear, BsCapsule } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-3xl active" : "text-3xl";
const navLinkClassSm = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-xl sm:text-2xl active" : "text-xl sm:text-2xl";

const UserSettingSider = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Vertical sidebar for md+ screens */}
      <div className="hidden md:flex flex-col justify-between items-center h-screen w-20 bg-white shadow-lg py-8 fixed left-0 top-0 z-50">
        <div>
          <IoMenu className="text-3xl text-blue-600 mb-8 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <NavLink to={"page1"} className={navLinkClass}>
            <AiOutlineHome />
          </NavLink>
          <NavLink to={"page2"} className={navLinkClass}>
            <LuUser />
          </NavLink>
          <NavLink to={"page3"} className={navLinkClass}>
            <MdOutlineShoppingBag />
          </NavLink>
          <NavLink to={"page5"} className={navLinkClass}>
            <BsGear />
          </NavLink>
          <NavLink to={"page6"} className={navLinkClass}>
            <BsCapsule />
          </NavLink>
        </div>
        <div>
          <NavLink to={"/homepage"} className={navLinkClass}>
            <MdOutlineLogout />
          </NavLink>
        </div>
      </div>

      {/* Horizontal bar for small screens */}
      <div className="flex md:hidden flex-row justify-around items-center w-full bg-white shadow-lg px-2 py-2 fixed bottom-0 left-0 z-40">
        {/* Show only essential items on very small screens */}
        <NavLink to={"page1"} className={navLinkClassSm}>
          <AiOutlineHome />
        </NavLink>
        <NavLink to={"page2"} className={navLinkClassSm}>
          <LuUser />
        </NavLink>
        <NavLink to={"page3"} className={navLinkClassSm}>
          <MdOutlineShoppingBag />
        </NavLink>
        
        {/* Show these only on slightly larger small screens */}
        <NavLink to={"page5"} className={`${navLinkClassSm} hidden xs:block`}>
          <BsGear />
        </NavLink>
        <NavLink to={"page6"} className={`${navLinkClassSm} hidden xs:block`}>
          <BsCapsule />
        </NavLink>
        
        {/* Menu button for accessing all options on very small screens */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-xl sm:text-2xl xs:hidden"
        >
          <IoMenu />
        </button>
        
        {/* Always show logout on larger small screens */}
        <NavLink to={"/homepage"} className={`${navLinkClassSm} hidden xs:block`}>
          <MdOutlineLogout />
        </NavLink>
      </div>

      {/* Mobile menu overlay for very small screens with blur background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-md z-50 md:hidden xs:hidden"
             onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed bottom-16 right-4 bg-white rounded-lg shadow-lg p-4"
               onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-4">
              <NavLink to={"page5"} className="flex items-center gap-2 text-lg"
                       onClick={() => setMobileMenuOpen(false)}>
                <BsGear /> Settings
              </NavLink>
              <NavLink to={"page6"} className="flex items-center gap-2 text-lg"
                       onClick={() => setMobileMenuOpen(false)}>
                <BsCapsule /> Medicine
              </NavLink>
              <NavLink to={"/homepage"} className="flex items-center gap-2 text-lg text-red-500"
                       onClick={() => setMobileMenuOpen(false)}>
                <MdOutlineLogout /> Logout
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserSettingSider;