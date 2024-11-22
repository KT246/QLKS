import React from "react";

const Sidbar = () => {
  return (
    <div className="w-52 border-r-2 border-blue-600">
      <div className="text-center py-5">
        <h3 className="text-xl text-blue-500 font-semibold pb-5">
          LUXURI HOTEL
        </h3>
        <div className="flex flex-col gap-1">
          <a
            href="#"
            className="w-full px-3 py-1 hover:bg-blue-500 hover:text-white hover:text-xl"
          >
            Trang chủ
          </a>
          <a
            href="#"
            className="w-full px-3 py-1 hover:bg-blue-500 hover:text-white hover:text-xl"
          >
            Phòng
          </a>
          <a
            href="#"
            className="w-full px-3 py-1 hover:bg-blue-500 hover:text-white hover:text-xl"
          >
            Đặt phòng
          </a>
          <a
            href="#"
            className="w-full px-3 py-1 hover:bg-blue-500 hover:text-white hover:text-xl"
          >
            Nhân viên
          </a>
          <a
            href="#"
            className="w-full px-3 py-1 hover:bg-blue-500 hover:text-white hover:text-xl"
          >
            Check in
          </a>
          <a
            href="#"
            className="w-full px-3 py-1 hover:bg-blue-500 hover:text-white hover:text-xl"
          >
            Check out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
