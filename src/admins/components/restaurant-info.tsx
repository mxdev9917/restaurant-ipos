
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdLockReset } from "react-icons/md";
function RestaurantInfo() {
    return <>
        <div className="flex flex-col gap-2 sm:flex-row justify-between p-3">
            <p className="text-xl sm:text-2xl font-semibold text-orange-500">ຮ້ານອາຫານຈຳປາ</p>
            <div className="flex justify-end gap-2 ">
                <button className="flex items-center justify-center gap-1 ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 w-20 h-8 rounded-sm">
                    <MdOutlineSaveAlt className="text-xl" />
                    save
                </button>
                <button className="flex items-center justify-center gap-1 ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 w-44 h-8 rounded-sm">
                    <MdLockReset className="text-xl"/>
                   Reset Password
                </button>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 w-full rounded-sm bg-slate-100 p-3 shadow-sm">
          <div className="w-full flex flex-col gap-2">
            {[
              { label: "Customer:", value: "gnar sehavong" },
              { label: "Phone:", value: "020 56085825" },
              { label: "Email:", value: "gnar5528@gmail.com" },
            //   { label: "Address:", value: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop " },
              { label: "ແພັດເກັດ:", value: "free" },
            ].map((item, index) => (
              <div key={index} className="flex gap-2">
                <p className="flex justify-end w-28">{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <p className="flex justify-end w-28">Status:</p>
              <select
                name="status"
                id="status"
                className="rounded-md border border-gray-300 focus:border-orange-500 focus:ring-0"
                aria-label="Status"
              >
                {["Active", "Pending", "Expired", "Lock"].map((status, index) => (
                  <option key={index} value={status.toLowerCase()}>{status}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4  p-4 rounded-lg ">
            {[
              { label: "Years:", placeholder: "1", type: "number" },
              {
                label: "Registration Date:",
                component:
                  <input type="text"
                    className="bg-gray-50 h-10 border border-gray-300 text-gray-700 rounded-md  block w-full px-3 hover:cursor-not-allowed"
                    disabled value={"November 4, 2024"}
                  />,
              },
              {
                label: "Expiry Date:", component:
                  <input type="text"
                    className="bg-gray-50 h-10 border border-gray-300 text-gray-700 rounded-md  block w-full px-3 hover:cursor-not-allowed"
                    disabled value={"November 4, 2024"}
                  />
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
              >
                <label className="w-full sm:w-36 text-gray-700 font-medium">{item.label}</label>
                <div className="w-full">
                  {item.type ? (
                    <input
                      type={item.type}
                      className="bg-gray-50 h-10 border border-gray-300 text-gray-900 rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full px-3 hover:cursor-not-allowed"
                      placeholder={item.placeholder}
                      required
                      disabled
                      min={1}
                    />
                  ) : (
                    item.component
                  )}
                </div>
              </div>
            ))}
          </div>


        </div>
    </>
}

export default RestaurantInfo;