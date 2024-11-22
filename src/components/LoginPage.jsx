import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-[73.8vh]">
        <div className="bg-white px-5 py-8">
          <h3 className="text-blue-500 text-xl font-semibold">Đăng nhập</h3>
          <p className="text-sm py-1">
            vì sự an toàn Vui lòng đăng nhập để xem thông tin chi tiết của bạn.
          </p>
          <form action="#">
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
              className="border-[1px] border-gray-400 rounded w-full h-8 px-3 py-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white my-5 w-full py-2 rounded"
            >
              Đăng nhập
            </button>
          </form>
          <div className="flex justify-between">
            <NavLink>
              <p className="text-sm text-blue-500">Tạo một tài khoản</p>
            </NavLink>
            <NavLink>
              <p className="text-sm text-blue-500">Quên mật khẩu?</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
