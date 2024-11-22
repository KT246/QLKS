import React from "react";

const UpdatePasswordPage = () => {
  return (
    <div className="h-[69.7vh] ">
      <form action="#" className="bg-white px-3 py-1">
        <h3 className="text-center py-2">Cập nhật mật khẩu</h3>
        <div>
          Mật khẩu hiện tại
          <br />
          <input
            type="text"
            name="current_password"
            className=" outline-none border-gray-500 border px-1 w-full rounded mt-2 py-1"
          />
          <br />
          Mật khẩu mới
          <br />
          <input
            type="text"
            name="ten"
            className=" outline-none border-gray-500 border px-1 w-full rounded mt-2 py-1"
          />
          <br />
          Nhập lại mật khẩu mới
          <br />
          <input
            type="text"
            name="ten"
            className=" outline-none border-gray-500 border px-1 w-full rounded mt-2 py-1"
          />
          <br />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white
         py-2 px-4 rounded mt-5"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordPage;
