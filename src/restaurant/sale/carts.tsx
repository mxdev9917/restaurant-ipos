import Nav from "../components/nav";
import FoodItemSale from "./components/fooditem";
import CategoryItem from "./components/categoryitem";
import { useState } from "react";

function Carts() {
  const items = Array.from({ length: 100 }, (_, index) => index);
  const [handleModle, setHandleModle] = useState(true);
  const [foodName, setFoodName] = useState("");
  const [qty, setQty] = useState();
  const [description, setDescription] = useState();

  function handleClick(id: number, name: string) {
    setHandleModle(!handleModle);
    console.log(id);
    setFoodName(name);
  }
  function handleClickCloseModle() {
    setHandleModle(!handleModle);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("ok");
  };
  const handleChangeQty = (e: any) => {
    setQty(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeDescription = (e: any) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col overflow-y-hidden max-w-[100vw] max-h-[100vh] ">
      <Nav />
      <div className="flex gap-2 mt-16">
        <div className="w-full xl:w-[78%] h-full flex flex-col relative">
          <div className="h-fit w-full flex gap-3 px-5 overflow-x-auto snap-x">
            {items.map((_, index) => (
              <div key={index} className="py-5">
                <CategoryItem />
              </div>
            ))}
          </div>
          <div className="h-[85vh] w-full grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-10 md:grid-cols-6 lg:grid-cols-8 place-items-stretch overflow-y-scroll">
            {items.map((_, index) => (
              <div key={index} className="m-1 w-[95%] h-40">
                <FoodItemSale onClick={handleClick} />
              </div>
            ))}
          </div>
          {/* Modal */}
          <div
            className={`${!handleModle ? "block" : "hidden"} bg-black/30 w-full h-full absolute flex justify-center items-center`}>
            <div className="flex flex-col w-80 h-fit bg-white rounded-lg shadow-lg p-3">
              <div className="flex justify-between items-center border-b-2">
                <p className="text-xl pb-2 text-gray-700 font-semibold">
                  {foodName}
                </p>
                <button
                  onClick={handleClickCloseModle}
                  className=" text-red-500"
                >
                  ຍົກເລິກ
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="number-input"
                  className="block my-2 text-sm font-medium text-gray-900 "
                >
                  ຈຳນວນ:
                </label>
                <input
                  onChange={handleChangeQty}
                  value={qty}
                  type="number"
                  min={1}
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none focus:right-0 block w-full p-2.5  "
                  placeholder="1"
                  required
                />
                <label
                  htmlFor="message"
                  className="block my-2 text-sm font-medium text-gray-900 "
                >
                  ລາຍລະອຽດ:
                </label>
                <textarea
                  onChange={handleChangeDescription}
                  value={description}
                  id="message"
                  rows={5}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none focus:right-0 block w-full p-2.5  "
                  placeholder="..."
                ></textarea>
                <button
                  type="submit"
                  className="text-white my-2 bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                >
                  ສົ່ງຄົວ
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="min-w-[400px] hidden xl:flex h-[100vh] shadow-lg   flex-col justify-between p-3">
          <div className="flex justify-between">
            <div></div>
            <p className="text-3xl pb-3 text-orange-500 font-semibold flex justify-center">
              ລາຍການອາຫານ ໂຕະ1
            </p>
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
              </svg>
            </button>
            <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ເຄົາເຕີ</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ຄົວ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-full">
            <table className="w-full  text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    ຊື່ເມນູອາຫານ
                  </th>
                  <th scope="col" className="px-3 py-3">
                    ຈຳນວນ
                  </th>
                  <th scope="col" className="px-3 py-3">
                    ລາຄາ
                  </th>
                  <th scope="col" className="px-3 py-3">
                    ເມນູ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-3 py-4">3</td>

                  <td className="px-3 py-4">$2999</td>
                  <td className="px-3 py-4">
                    <button className="hover:bg-slate-100 p-1.5 rounded-full">
                      <svg
                        className="w-6 h-6 text-red-600 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-3 py-4">5</td>

                  <td className="px-3 py-4">$1999</td>
                  <td className="px-3 py-4">
                    <button className="hover:bg-slate-100 p-1.5 rounded-full">
                      <svg
                        className="w-6 h-6 text-red-600 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-3 py-4">7</td>

                  <td className="px-3 py-4">$999.000</td>
                  <td className="px-3 py-4">
                    <button>
                      <button className="hover:bg-slate-100 p-1.5 rounded-full">
                        <svg
                          className="w-6 h-6 text-red-600 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                          />
                        </svg>
                      </button>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="  flex h-[400px] flex-col text-sm">
            <p className="text-xl font-semibold mb-2">ລວມບີນ</p>
            <div className="flex justify-between my-1">
              <p>ລາຄາ</p>
              <p>$6,592.00</p>
            </div>
            <div className="flex justify-between my-1 text-sm">
              <p>Vat 10%</p>
              <p>$6,5</p>
            </div>
            <div className="flex justify-between my-1 text-sm border-y-2 py-2">
              <p className="font-semibold">ລາຄາລວມ</p>
              <p className="text-orange-500">$6,592.00</p>
            </div>

            <div className="w-full flex justify-end py-5">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
              >
                ໄລ່ເງີນ
              </button>
              <button
                type="button"
                className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
              >
                ລວມໂຕະ
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
              >
                ຍົກເລິກ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
