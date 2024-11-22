import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiCabinet } from "react-icons/bi";
import { RiHomeLine, RiPriceTag2Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div className="pb-20">
      <div className="w-full h-[90vh] relative ">
        <img src="quynhonhotel.jpg" alt="" className="w-full h-full" />
        <div className=" absolute top-0 left-0 w-full h-full">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white px-20 py-10">
              <div className="text-center">
                <h3 className="text-2xl text-gray-900 font-semibold">
                  Khách sạn và nhà ở tư nhân
                </h3>
                <p className="text-blue-700">
                  Tìm kiếm chỗ ở để so sánh giá cả và ưu đãi tuyệt vời với việc
                  hủy miễn phí.
                </p>
              </div>
              <form action="#" className="flex justify-between pt-10">
                <input
                  type="text"
                  name="ten_phong"
                  placeholder="Tìm kiếm phòng..."
                  className="w-5/6 border border-gray-500 rounded-l border-r-0 px-2 py-1 outline-none"
                />
                <select
                  name="so_nguoi"
                  id=""
                  className="w-1/3 outline-none border border-gray-500 border-r-0 text-center"
                >
                  <option value="" disabled selected>
                    👤 bao người
                  </option>
                  <option value="">2 người</option>
                  <option value="">4 người</option>
                  <option value="">6 người</option>
                  <option value="">8 người</option>
                  <option value="">gia đình</option>
                </select>
                <button
                  type="submit"
                  className="w-1/3 border border-blue-500 rounded-r bg-blue-500 text-white"
                >
                  Tìm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20">
        <h3 className="text-2xl border-l-4 border-black ps-2 leading-none my-10">
          Phòng có sẵn - khách sạn
        </h3>
        <div className="grid grid-cols-2 gap-4">
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
                to={"payment/465488978jkjojojoijijsajfkljds"}
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
              <img src="phong-index.jpg" alt="" className="w-full h-full" />
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
                to={"payment/465488978jkjojojoijijsajfkljds"}
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
              <img src="phong-index.jpg" alt="" className="w-full h-full" />
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
                to={"payment/465488978jkjojojoijijsajfkljds"}
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
              <img src="phong-index.jpg" alt="" className="w-full h-full" />
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
                to={"payment/465488978jkjojojoijijsajfkljds"}
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
              <img src="phong-index.jpg" alt="" className="w-full h-full" />
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
                to={"payment/465488978jkjojojoijijsajfkljds"}
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
              <img src="phong-index.jpg" alt="" className="w-full h-full" />
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
                to={"payment/465488978jkjojojoijijsajfkljds"}
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
    </div>
  );
};

export default HomePage;
