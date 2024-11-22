import React, { useState } from "react";

const PaymentPage = () => {
  const [select, setSelect] = useState("Thanh toan khi tra phong");
  const [ngayDat, setNgayDat] = useState("");
  const [ngayTra, setNgayTra] = useState("");
  const [gia, setGia] = useState(0);
  const [Songay, setSoNgay] = useState(1);
  const [err, setErr] = useState("");

  const handleChangeRadio = (e) => {
    setSelect("");
    const value = e.target.value;
    setSelect(value);
    if (value !== "Thanh toan khi tra phong") {
      setErr("Chua ho tro phuong thuc => " + value);
    } else {
      setErr("");
    }
  };

  return (
    <div className=" bg-gray-200 px-32">
      <div className="h-[73.3vh]  bg-white">
        <h1 className=" text-xl ps-14 py-4 font-semibold">Thanh Toán</h1>
        <form action="#" className="grid grid-cols-2 border-t">
          <p className="ps-14 my-3 font-semibold ">Phong</p>
          <p className=" my-3 font-semibold ">Khach hang</p>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <div className="w-[250px] h-[110px]  place-self-end">
                <img
                  src="/quynhonhotel.jpg"
                  alt=""
                  className="w-full h-full "
                />
              </div>
              <div className="text-sm">
                <p className="text-lg">ten phong</p>
                <p>So phong: 102</p>
                <p>Gia: 500000 dem</p>
                <p>Hướng nhìn: sea</p>
                <p>Giuong: 3 nguoi</p>
              </div>
            </div>
            <div className="grid grid-cols-2 place-items-center mt-5">
              <p>
                <span className="block">Ngay dat:</span>
                <input
                  type="date"
                  className="w-[200px] h-[30px] "
                  onChange={(e) => {
                    const value = e.target.value;
                    setNgayDat(value);
                    if (value > ngayTra) {
                      setErr("Ngay dat phai nho hon ngay tra");
                    } else {
                      setErr("");
                    }

                    setSoNgay(
                      (new Date(ngayTra) - new Date(value)) / (1000 * 3600 * 24)
                    );

                    if (Songay > 0) {
                      setGia(500000 * Songay);
                    } else {
                      setGia(0);
                    }
                  }}
                />
              </p>
              <p>
                <span className="block">Ngay tra:</span>
                <input
                  type="date"
                  className="w-[200px] h-[30px] "
                  onChange={(e) => {
                    const value = e.target.value;
                    setNgayTra(value);
                    if (ngayDat > value) {
                      setErr("Ngay tra phai lon hon ngay dat");
                    } else {
                      setErr("");
                    }

                    setSoNgay(
                      (new Date(value) - new Date(ngayDat)) / (1000 * 3600 * 24)
                    );
                    if (Songay > 0) {
                      setGia(500000 * Songay);
                    } else {
                      setGia(0);
                    }
                  }}
                />
              </p>
            </div>
            <div className="px-14 col-span-2 mt-2">
              <p className="my-3">Phương thức thanh toán:</p>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value={"Thanh toan khi tra phong"}
                  className="mt-1"
                  checked={select === "Thanh toan khi tra phong"}
                  onChange={handleChangeRadio}
                />
                <span className="ps-2">Thanh toan khi tra phong</span>
                <br />
                <input
                  type="radio"
                  name="payment"
                  value={"Thanh toan bang the tin dung"}
                  className="mt-1"
                  onChange={handleChangeRadio}
                  disabled={
                    err ===
                    "Chua ho tro phuong thuc => Thanh toan bang the tin dung"
                  }
                />
                <span className="ps-2 ">Thanh toan bang the tin dung</span>
                <br />
                <input
                  type="radio"
                  name="payment"
                  value={"Thanh toan bang smart banking"}
                  className="mt-1"
                  onChange={handleChangeRadio}
                  disabled={
                    err ===
                    "Chua ho tro phuong thuc => Thanh toan bang smart banking"
                  }
                />
                <span className="ps-2">Thanh toan bang smart banking</span>
                <br />
                <p className="text-red-500 ">{err}</p>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <p>Ho va ten: khamtay kongmanh</p>
            <p>So dien thoai: +44681545466</p>
            <p>Email: tay@gmail.com</p>
            <p>Dia chi: attapeu</p>
          </div>
          <div className="border-t col-span-2 flex justify-between px-10 py-3 mt-3">
            <div className="flex items-center gap-5 ">
              <span className="text-lg">Tong tien</span>
              <input
                type="text"
                readOnly
                value={`${gia.toLocaleString()} VND._`}
                className="outline-none border rounded py-1 px-2"
              />
            </div>
            <input
              type="submit"
              value={"Thanh toán"}
              className="bg-blue-500 px-3 py-1  text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
