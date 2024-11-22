import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BookingPage = () => {
  const [booking, setBooking] = useState(true);
  const handleProp = () => {
    setBooking(!booking);
  };
  return (
    <div className="bg-white h-[69.8vh] overflow-auto p-2">
      <h3 className="text-center">Đặt phòng của tôi</h3>

      <div className="flex bg-blue-500  text-white rounded mt-2 h-12 ">
        <div className="w-32 bg-black bg-opacity-40 text-center rounded-l">
          <p>Loại phòng</p>
          <p className="text-sm">4 người</p>
        </div>
        <div className="  flex justify-between w-full px-3">
          <div>
            <p>Ngày</p>
            <p className="text-sm">
              Tứ 4 ngày 28/11 Check in {"->"} Tứ 7 ngày 30/11 Check in{" "}
            </p>
          </div>
          <div className="text-center">
            <p>Số phòng</p>
            <p className="text-sm">5525</p>
          </div>
          {booking ? (
            <div className="flex items-center justify-center gap-3 ">
              <span className=" bg-green-500 bg-opacity-90 px-2  rounded">
                Đã xác nhận
              </span>
              <NavLink
                to={`../detail/${"fsdf4323r998ef"}`}
                className={`bg-gray-50 hover:bg-gray-100 hover:text-gray-950 px-1 text-gray-900 rounded`}
              >
                Chi tiết
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 ">
              <span className=" bg-red-500 bg-opacity-90 px-2 rounded">
                Chờ xác nhận
              </span>
              <NavLink
                className={`bg-gray-50 hover:bg-gray-100 px-3 hover:text-gray-950 text-gray-900 rounded`}
              >
                Hủy
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <button className="bg-black text-white" onClick={handleProp}>
        OK
      </button>
    </div>
  );
};

export default BookingPage;
