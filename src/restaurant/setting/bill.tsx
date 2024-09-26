import Billtr from "./components/biitr";
import Sidebar_Nav from "../components/sidebar-nav";
import Rate from "./components/rateitem";
import { useState } from "react";

function SettingBill() {
  const [chBg, setChBg] = useState(false);

  function handleBg(value: boolean) {
    console.log(value);
    setChBg(value);
  }

  return (
    <div className="flex flex-col">
      <Sidebar_Nav />
      <div className="p-1 sm:ml-64">
        <div className="mt-14 md:flex-row">
          <div className="flex flex-col lg:flex-row px-5 py-10 gap-4">
            <div className="flex flex-col [310px]">
              <button
                onClick={() => handleBg(true)}
                className={`${
                  !chBg ? "bg-gray-400 text-black" : "bg-orange-500 text-white"
                } w-[310px] h-10 text-black`}
              >
                Format 1
              </button>
              <div className="w-[310px] border-x-2 border-y-2 shadow-inner flex">
                <div className={`w-full flex flex-col pt-6 pb-5 items-center`}>
                  <p className="text-xl font-medium">ໃບເກັບເງີນ</p>
                  <div className="flex justify-between w-full text-sm font-medium pt-3 px-5">
                    <p>ຮ້ານ: xxxxxxxx</p>
                    <p>ເບີໂທ: 020 xxxxxxxx</p>
                  </div>
                  <div className="flex justify-between w-full text-sm pt-2 px-5">
                    <p>ວັນທີ: 19/09/2024 11:00 PM</p>
                    <p>ໂຕະ: xx</p>
                  </div>
                  <div className="flex justify-between w-full text-sm pt-2 px-5">
                    <p>ພງ: none</p>
                    <p>ເລກທີບີນ: 0000</p>
                  </div>
                  <div className="relative w-[300px] md:w-[310px] overflow-x-auto pt-2 px-0 md:px-2">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th scope="col" className="px-4 py-3 rounded-s-lg">
                            Menu
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Qty
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Price
                          </th>
                          <th scope="col" className="px-4 py-3 rounded-e-lg">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <Billtr />
                    </table>
                    <div className="flex flex-col justify-between w-full text-sm p-5 border-t-2 border-b-2">
                      <div className="flex justify-between">
                        <p className="pb-1 font-medium">ອັດຕາແລກປ່ຽນ</p>
                        <p className="w-14">ລວມເງີນ</p>
                        <p>00000 ₭</p>
                      </div>
                      <Rate />
                      <Rate />
                    </div>
                  </div>
                  <p className="pt-3 text-base font-medium">ຂອບໃຈ</p>
                  <p className="text-sm">ໂອກາດໜ້າເຊີນໄໝ່</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col [310px]">
              <button
                onClick={() => handleBg(false)}
                className={`${
                  chBg ? "bg-gray-400 text-black" : "bg-orange-500 text-white"
                } w-[310px] h-10`}
              >
                Format 2
              </button>
              <div className="w-[310px] pb-5 border-x-2 border-y-2 shadow-inner flex">
                <div className={`w-full flex flex-col b items-center`}>
                  <img
                    className="py-3"
                    src="/src/assets/images/ipos.png"
                    width={60}
                    alt=""
                  />
                  <p className="text-xl font-medium">ໃບເກັບເງີນ</p>
                  <div className="flex justify-between w-full text-sm font-medium pt-3 px-5">
                    <p>ຮ້ານ: xxxxxxxxx</p>
                    <p>ເບີໂທ: 020 xxxxxxxx</p>
                  </div>
                  <div className="flex justify-between w-full text-sm pt-2 px-5">
                    <p>ວັນທີ: 19/09/2024 11:00 PM</p>
                    <p>ໂຕະ: xxxxxxxx</p>
                  </div>
                  <div className="flex justify-between w-full text-sm pt-2 px-5">
                    <p>ພງ: none</p>
                    <p>ເລກທີບີນ: 0000</p>
                  </div>
                  <div className="relative w-[300px] md:w-[310px] overflow-x-auto pt-2 px-0 md:px-2">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th scope="col" className="px-4 py-3 rounded-s-lg">
                            Menu
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Qty
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Price
                          </th>
                          <th scope="col" className="px-4 py-3 rounded-e-lg">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <Billtr />
                    </table>
                    <div className="flex flex-col justify-between w-full text-sm p-5 border-t-2 border-b-2">
                      <div className="flex justify-between">
                        <p className="pb-1 font-medium">ອັດຕາແລກປ່ຽນ</p>
                        <p className="w-14">ລວມເງີນ</p>
                        <p>00000 ₭</p>
                      </div>
                      <Rate />
                      <Rate />
                    </div>
                  </div>
                  <p className="pt-3 text-base font-medium">ຂອບໃຈ</p>
                  <p className="text-sm">ໂອກາດໜ້າເຊີນໄໝ່</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingBill;
