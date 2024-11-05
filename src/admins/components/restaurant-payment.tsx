import { FaDownload } from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { Link } from "react-router-dom";


function Restaurantpayment() {
  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row justify-between p-3">
        <p className="text-xl sm:text-2xl font-semibold text-orange-500">Invoice #1677</p>
        <div className="flex justify-end gap-2">
          <button className="flex items-center justify-center gap-1 ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 w-20 h-8 rounded-sm">
            <MdPrint className="text-xl" />
            Print
          </button>
          <button className="flex items-center justify-center gap-1 ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 w-28 h-8 rounded-sm">
            <FaDownload />
            Download
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse xl:flex-row p-1 gap-4">
        <div className="flex flex-col lg:flex-row gap-2 w-full rounded-sm bg-slate-100 p-3 shadow-sm">
          <div className="w-full flex flex-col gap-2">
            {[
              { label: "Customer:", value: "gnar sehavong" },
              { label: "Order Type:", value: "Register" },
              { label: "Amount:", value: "1,500,000" },
              { label: "Discount:", value: "15,000" },
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
            <div className="flex gap-2 items-center">
              <p className="flex justify-end w-28">ຫຼັກຖານການໂອນ:</p>
              <Link to={''} className="text-orange-500">view</Link>
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
                      className="bg-gray-50 h-10 border border-gray-300 text-gray-900 rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full px-3"
                      placeholder={item.placeholder}
                      required
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
        <div className="flex flex-col gap-2 items-center w-full xl:w-[800px] p-3 bg-white rounded-md">
          <p className="uppercase text-2xl font-bold text-red-500">unpaid</p>
          <p>06/08/2024 13:46</p>
          <p>Payment Method: BCEL</p>
          <div className="sm:w-96 w-80 flex gap-2">
            <input
              type="text"
              className="bg-gray-50 h-10 border border-gray-300 text-gray-900 rounded-sm focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
              required
            />
            <button className="w-44 h-10 flex items-center ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 text-black px-4 py-1.5 rounded-sm">
              Send Email
            </button>
          </div>
          <div className="flex gap-2 mt-1 sm:w-96 w-80">
            {["Accept", "Deny", "Cancel"].map((action, index) => (
              <button
                key={index}
                className={`w-full ring-1 ${action === "Accept" ? "ring-green-500 bg-green-500 text-white" : "ring-gray-300 text-black"
                  } focus:ring-orange-500 hover:ring-2 px-4 py-1.5 rounded-sm`}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurantpayment;