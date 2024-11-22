import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";

const DetailPage = () => {
  const [select, setSelect] = useState(false);
  const [src, setSrc] = useState("/phong-index.jpg");
  const images = [
    { src: "/phong-index.jpg", alt: "1" },
    { src: "/phong-index.jpg", alt: "2" },
    { src: "/quynhonhotel.jpg", alt: "3" },
    { src: "/phong-index.jpg", alt: "4" },
    { src: "/phong-index.jpg", alt: "5" },
    { src: "/phong-index.jpg", alt: "6" },
  ];
  const handleSelect = (src) => {
    setSelect(!select);
    setSrc(src);
  };
  return (
    <div className="bg-gray-200 relative">
      {/* show image selected */}

      <div
        className={`absolute top-0 left-0 bg-gray-950 bg-opacity-30 w-full h-full z-10 flex justify-center items-center
        
        ${select ? "" : " hidden"}`}
      >
        <div className="w-[50vw] h-[50vh] relative">
          <img src={src} alt="" className="w-full h-full " />
          <button
            onClick={() => handleSelect("")}
            className=" absolute top-0 right-0 border border-blue-500 text-blue-500 bg-white bg-opacity-50 outline-none leading-none px-2 py-1"
          >
            Đóng
          </button>
        </div>
      </div>

      <div className="px-20 py-5 relative">
        <div className=" w-full grid grid-cols-5 gap-2 bg-gray-50 rounded overflow-hidden">
          <div className="h-[43.1vh] col-span-2">
            <img
              src="/phong-index.jpg"
              alt=""
              className="w-full h-full cursor-pointer"
              onClick={() => handleSelect("/phong-index.jpg")}
            />
          </div>
          <div className="grid grid-cols-3 gap-2 col-span-3">
            {images.map((img) => (
              <div className="h-[21vh]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className=" h-full w-full cursor-pointer"
                  onClick={() => handleSelect(img.src)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 rounded mt-5 px-3 py-1">
          <h3 className="font-semibold text-xl border-b-2 pb-2 border-gray-300">
            Diện tích và phòng
          </h3>
          <div className="py-2">
            <span className="">Suite Gia Đình Có Ban Công...</span>
            <span className="text-gray-400">(Diện tích phòng: 45m)</span>
          </div>
          <p className="text-blue-500">
            Số lượng người ở tối đa: 4 người. Bếp.
          </p>
          <div className="grid grid-cols-3">
            <div>
              <p>Khu vực chung 2 giường đơn</p>
              <div>
                <span>|||</span>
                <span>|||</span>
                <span>|||</span>
                <span>|||</span>
              </div>
            </div>
            <div>
              <p>Khu vực chung 2 giường đơn</p>
              <div>
                <span>|||</span>
                <span>|||</span>
                <span>|||</span>
                <span>|||</span>
              </div>
            </div>
            <div>
              <p>Khu vực chung 2 giường đơn</p>
              <div>
                <span>|||</span>
                <span>|||</span>
                <span>|||</span>
                <span>|||</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded mt-5 px-3 py-1">
          <h3 className="font-semibold text-xl border-b-2 pb-2 border-gray-300">
            cơ sở vật chất
          </h3>
          <div className="grid grid-cols-3">
            <p className="flex items-center pt-2">
              <IoCheckmarkOutline />
              Free wifi
            </p>
            <p className="flex items-center pt-2">
              <IoCheckmarkOutline />
              Free wifi
            </p>

            <p className="flex items-center pt-2">
              <IoCheckmarkOutline />
              Free wifi
            </p>
            <p className="flex items-center pt-2">
              <IoCheckmarkOutline />
              Free wifi
            </p>
            <p className="flex items-center pt-2">
              <IoCheckmarkOutline />
              Free wifi
            </p>
            <p className="flex items-center pt-2">
              <IoCheckmarkOutline />
              Free wifi
            </p>
          </div>
        </div>
        <div className="bg-gray-50 rounded mt-5 px-3 py-1 flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-xl">Giá: 1.000.000 đ/đêm</p>
            <p className="bg-green-500 px-3 text-center text-white">status</p>
          </div>
          <NavLink
            to={"../payment/6565644654"}
            className="text-white bg-blue-500 py-1 px-3"
          >
            Đặt phòng
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
