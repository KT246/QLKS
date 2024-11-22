import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
const MainNav = () => {
  const [login, setLogin] = useState(true);
  const [profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };
  return (
    <div className=" sticky top-0 bg-white py-3 border px-20 flex justify-between items-center z-20">
      <div className="flex items-center gap-20">
        <h1 className="font-semibold text-blue-500 text-xl">LUXURI HOTEL</h1>
        <div className="flex gap-3">
          <NavLink
            to={login ? "/user" : "/"}
            end
            className={({ isActive }) =>
              isActive
                ? "relative text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-500"
                : ""
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={"room"}
            className={({ isActive }) =>
              isActive
                ? "relative text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-500"
                : ""
            }
          >
            phòng
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) =>
              isActive
                ? "relative text-red-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-500"
                : ""
            }
          >
            liên hệ với chúng tôi
          </NavLink>
        </div>
      </div>
      {login ? (
        <div className="flex items-center gap-5">
          <div className=" rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center">
            <p className="text-white">B</p>
          </div>
          <p>Bouasavanh</p>
          <NavLink to={"setting"} onClick={handleProfile}>
            <IoSettingsOutline className={`text-2xl `} />
          </NavLink>
          <button onClick={handleProfile}>
            <IoLogOutOutline className={`text-2xl `} />
          </button>
        </div>
      ) : (
        <div className="flex gap-5">
          <NavLink to={"login"} className="text-blue-500">
            Đăng nhập
          </NavLink>
          <NavLink to={"register"}>Đăng ký</NavLink>
        </div>
      )}
    </div>
  );
};

export default MainNav;
