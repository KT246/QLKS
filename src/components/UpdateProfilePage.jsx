import React from "react";

const UpdateProfilePage = () => {
  return (
    <div className="h-[69.7vh] ">
      <form action="#" className="bg-white px-3 py-1">
        <h3 className="text-center py-2">Cập nhật thông tin</h3>
        <div>
          Họ và tên
          <br />
          <input
            type="text"
            name="ten"
            className=" outline-none border-gray-500 border px-1 w-full rounded mt-2 py-1"
          />
          <br />
          số điên thoại
          <input
            type="text"
            name="sdt"
            className=" outline-none border-gray-500 border px-1 w-full rounded mt-2 py-1"
          />
          <br />
          Địa chỉ
          <br />
          <textarea
            name="dia_chi"
            className="w-full outline-none border-gray-500 border px-1 rounded mt-2 py-1"
          ></textarea>
        </div>
        <br />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white
         py-2 px-4 rounded "
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
