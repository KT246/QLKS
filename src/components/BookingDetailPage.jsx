import React from "react";

const BookingDetailPage = () => {
  return (
    <div className="h-[69.7vh] bg-gray-50 p-1">
      <h1 className="text-2xl font-semibold pb-4">Chi tiết đơn hàng</h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full h-[160px] ">
          <img src="/phong-index.jpg" alt="" className="w-full h-full" />
        </div>
        <div className="ms-3">
          <p className="mb-2">Thông tin khách hàng:</p>
          <p className="text-gray-500">Họ tên: Nguyễn Văn A</p>
          <p className="text-gray-500">Số điện thoại: 012345678</p>
          <p className="text-gray-500">
            Địa chỉ:
            <span className="ps-2">
              127 An Dương Vương, TP.Quy Nhơn, Bình Định
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="ms-2">
          <p className="my-2">Thông tin phòng:</p>
          <p className="text-gray-500">Phòng số: 101</p>
          <p className="text-gray-500">Loại phòng: Deluxe</p>
          <p className="text-gray-500">Giá phòng: 500.000 / đêm</p>
          <p className="text-gray-500">Giường nghỉ: 1 giường đôi</p>
          <p className="text-gray-500">Ngày đặt: 2/3/2434</p>
          <p className="text-gray-500">Ngày trả: 10/3/2434</p>
          <p className="text-gray-500">Phương thức thanh toán: Tiền mặt</p>
          <p className="text-gray-500">status: Chờ nhận phòng</p>
        </div>
        <div>
          <p className="my-2">Cơ sở vật chất</p>
          <ul className="text-gray-500 list-disc">
            <li>Wifi</li>
            <li>Hồ bơi</li>
            <li>Dịch vụ dọn dẹp hàng ngày</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailPage;
