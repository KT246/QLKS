import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiCabinet } from "react-icons/bi";
import { RiHomeLine, RiPriceTag2Line } from "react-icons/ri";

const RoomPage = () => {
  return (
    <div className="px-20 pb-20">
      <h3 className="text-2xl border-l-4 border-black ps-2 leading-none my-10">
        Phòng có sẵn - khách sạn
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className=" flex border-2 border-gray-500 rounded-tr">
          <div className="w-[350px] h-[200px] relative">
            <img src="/phong-index.jpg" alt="" className="w-full h-full" />
            <NavLink
              to={"../detail/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center text-gray-100 bg-black bg-opacity-50 py-1"
              }
            >
              Xem hình ảnh và thông tin chi tiết
            </NavLink>
          </div>
          <div className=" relative w-[350px] h-[200px]">
            <div className="px-2">
              <h3 className="text-xl font-semibold pb-1">Ten phong</h3>
              <p className="flex items-center gap-1 pt-1 ">
                <RiHomeLine size={20} />
                Diện tích phòng: 45m
              </p>
              <p className="flex items-center gap-1 pt-1 ">
                <BiCabinet size={20} />
                Hướng nhìn: Thành phố
              </p>
              <p className="flex items-center gap-1 pt-1 ">
                <MdOutlineBedroomParent size={20} />1 giường đơn hoặc 1 giường
              </p>
              <p className="flex items-center gap-1 pt-1">
                <RiPriceTag2Line size={20} />
                Giá: 500.000 đ/đêm
              </p>
            </div>
            <NavLink
              to={"../payment/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center bg-blue-500 text-gray-100 py-1"
              }
            >
              Đặt phòng ngay
            </NavLink>
          </div>
        </div>
        <div className=" flex border-2 border-gray-500 rounded-tr">
          <div className="w-[350px] h-[200px] relative">
            <img src="/phong-index.jpg" alt="" className="w-full h-full" />
            <NavLink
              to={"detail/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center text-gray-100 bg-black bg-opacity-50 py-1"
              }
            >
              Xem hình ảnh và thông tin chi tiết
            </NavLink>
          </div>
          <div className=" relative w-[350px] h-[200px]">
            <div className="px-2">
              <h3 className="text-xl font-semibold pb-1">Ten phong</h3>
              <p className="flex items-center gap-1 ">
                <RiHomeLine size={20} />
                Diện tích phòng: 45m
              </p>
              <p className="flex items-center gap-1 py-1">
                <BiCabinet size={20} />
                Hướng nhìn: Thành phố
              </p>
              <p className="flex items-center gap-1 ">
                <MdOutlineBedroomParent size={20} />1 giường đơn hoặc 1 giường
              </p>
            </div>
            <NavLink
              to={"../payment/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center bg-blue-500 text-gray-100 py-1"
              }
            >
              Đặt phòng ngay
            </NavLink>
          </div>
        </div>
        <div className=" flex border-2 border-gray-500 rounded-tr">
          <div className="w-[350px] h-[200px] relative">
            <img src="/phong-index.jpg" alt="" className="w-full h-full" />
            <NavLink
              to={"detail/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center text-gray-100 bg-black bg-opacity-50 py-1"
              }
            >
              Xem hình ảnh và thông tin chi tiết
            </NavLink>
          </div>
          <div className=" relative w-[350px] h-[200px]">
            <div className="px-2">
              <h3 className="text-xl font-semibold pb-1">Ten phong</h3>
              <p className="flex items-center gap-1 ">
                <RiHomeLine size={20} />
                Diện tích phòng: 45m
              </p>
              <p className="flex items-center gap-1 py-1">
                <BiCabinet size={20} />
                Hướng nhìn: Thành phố
              </p>
              <p className="flex items-center gap-1 ">
                <MdOutlineBedroomParent size={20} />1 giường đơn hoặc 1 giường
              </p>
            </div>
            <NavLink
              to={"../payment/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center bg-blue-500 text-gray-100 py-1"
              }
            >
              Đặt phòng ngay
            </NavLink>
          </div>
        </div>
        <div className=" flex border-2 border-gray-500 rounded-tr">
          <div className="w-[350px] h-[200px] relative">
            <img src="/phong-index.jpg" alt="" className="w-full h-full" />
            <NavLink
              to={"detail/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center text-gray-100 bg-black bg-opacity-50 py-1"
              }
            >
              Xem hình ảnh và thông tin chi tiết
            </NavLink>
          </div>
          <div className=" relative w-[350px] h-[200px]">
            <div className="px-2">
              <h3 className="text-xl font-semibold pb-1">Ten phong</h3>
              <p className="flex items-center gap-1 ">
                <RiHomeLine size={20} />
                Diện tích phòng: 45m
              </p>
              <p className="flex items-center gap-1 py-1">
                <BiCabinet size={20} />
                Hướng nhìn: Thành phố
              </p>
              <p className="flex items-center gap-1 ">
                <MdOutlineBedroomParent size={20} />1 giường đơn hoặc 1 giường
              </p>
            </div>
            <NavLink
              to={"../payment/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center bg-blue-500 text-gray-100 py-1"
              }
            >
              Đặt phòng ngay
            </NavLink>
          </div>
        </div>
        <div className=" flex border-2 border-gray-500 rounded-tr">
          <div className="w-[350px] h-[200px] relative">
            <img src="/phong-index.jpg" alt="" className="w-full h-full" />
            <NavLink
              to={"detail/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center text-gray-100 bg-black bg-opacity-50 py-1"
              }
            >
              Xem hình ảnh và thông tin chi tiết
            </NavLink>
          </div>
          <div className=" relative w-[350px] h-[200px]">
            <div className="px-2">
              <h3 className="text-xl font-semibold pb-1">Ten phong</h3>
              <p className="flex items-center gap-1 ">
                <RiHomeLine size={20} />
                Diện tích phòng: 45m
              </p>
              <p className="flex items-center gap-1 py-1">
                <BiCabinet size={20} />
                Hướng nhìn: Thành phố
              </p>
              <p className="flex items-center gap-1 ">
                <MdOutlineBedroomParent size={20} />1 giường đơn hoặc 1 giường
              </p>
            </div>
            <NavLink
              to={"../payment/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center bg-blue-500 text-gray-100 py-1"
              }
            >
              Đặt phòng ngay
            </NavLink>
          </div>
        </div>
        <div className=" flex border-2 border-gray-500 rounded-tr">
          <div className="w-[350px] h-[200px] relative">
            <img src="/phong-index.jpg" alt="" className="w-full h-full" />
            <NavLink
              to={"detail/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center text-gray-100 bg-black bg-opacity-50 py-1"
              }
            >
              Xem hình ảnh và thông tin chi tiết
            </NavLink>
          </div>
          <div className=" relative w-[350px] h-[200px]">
            <div className="px-2">
              <h3 className="text-xl font-semibold pb-1">Ten phong</h3>
              <p className="flex items-center gap-1 ">
                <RiHomeLine size={20} />
                Diện tích phòng: 45m
              </p>
              <p className="flex items-center gap-1 py-1">
                <BiCabinet size={20} />
                Hướng nhìn: Thành phố
              </p>
              <p className="flex items-center gap-1 ">
                <MdOutlineBedroomParent size={20} />1 giường đơn hoặc 1 giường
              </p>
            </div>
            <NavLink
              to={"../payment/465488978jkjojojoijijsajfkljds"}
              className={
                " absolute bottom-0 w-full text-center bg-blue-500 text-gray-100 py-1"
              }
            >
              Đặt phòng ngay
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
