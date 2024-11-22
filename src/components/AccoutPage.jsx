import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";

const AccoutPage = () => {
  const [deleteProp, setDeleteProp] = useState(false);

  const handleProp = () => {
    setDeleteProp(!deleteProp);
  };
  return (
    <div className="h-[69.8vh]">
      <h3 className="text-center p-2 bg-white">Thông tin người dùng</h3>
      <div className="flex justify-between items-center bg-indigo-600 text-gray-50 px-2 py-1">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <p className="text-2xl ">B</p>
          </div>
          <div>
            <p>Tên tài khoản</p>
            <p>Bouasavanh</p>
          </div>
        </div>
        <NavLink to={"update-profile"}>chỉnh sửa</NavLink>
      </div>
      <div className="flex gap-2 px-2 py-3 mt-5 bg-white">
        <div>
          <p>Email</p>
          <p className="text-sm">Email@gmail.com</p>
        </div>
        <p>
          <span className="bg-green-500 text-white px-1 rounded text-sm flex justify-center items-center">
            <IoIosCheckmark className="text-2xl " />
            Da xac nhan
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center gap-2 px-2 py-3 mt-5 bg-white">
        <div>
          <p>Mật khẩu</p>
          <p>************</p>
        </div>
        <NavLink to={"update-password"}>chỉnh sửa</NavLink>
      </div>
      <div className="px-2 py-3 mt-5 bg-white">
        <button onClick={handleProp} className="text-red-500">
          Xóa tài khoản của tôi
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-60 ${
          deleteProp ? "" : " hidden"
        }`}
      >
        <div className="bg-black text-white px-10 py-3 rounded bo">
          <p className="py-5">!Bạn muốn xóa tài khoản của bạn</p>
          <div className="flex justify-between gap-5">
            <button className="py-1 px-3 bg-green-500 hover:bg-green-700 rounded">
              Đúng
            </button>
            <button
              onClick={handleProp}
              className="py-1 px-3 bg-red-500 hover:bg-red-700 rounded"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccoutPage;
