import React from "react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-[95vh]">
        <div className="bg-white px-5 py-8">
          <h3 className="text-blue-500 text-xl font-semibold">
            Đăng ký thành viên
          </h3>

          <form action="#">
            <br />
            Tên
            <br />
            <input
              type="text"
              name="ten"
              className="border-[1px] border-gray-400 rounded w-full h-8 px-3 py-2 mb-3"
            />
            <br />
            Email
            <br />
            <input
              type="text"
              name="email"
              className="border-[1px] border-gray-400 rounded w-full h-8 px-3 py-2 mb-3"
            />
            <br />
            Mật khẩu
            <br />
            <input
              type="password"
              name="password"
              className="border-[1px] border-gray-400 rounded w-full h-8 px-3 py-2 mb-3"
            />
            <br />
            Xác nhận mật khẩu
            <br />
            <input
              type="password"
              name="confirmPassword"
              className="border-[1px] border-gray-400 rounded w-full h-8 px-3 py-2 mb-3"
            />
            <br />
            <div className=" flex gap-2 w-[450px]">
              <input type="checkbox" className="w-5 h-5 " />
              <span className="text-sm text-wrap">
                Tôi chấp nhận nhận các thông tin cập nhật
              </span>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white my-5 w-full py-2 rounded"
            >
              Đăng ký
            </button>
          </form>
          <NavLink>
            <p className="text-sm text-blue-500">Tôi đã có tài khoản</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
