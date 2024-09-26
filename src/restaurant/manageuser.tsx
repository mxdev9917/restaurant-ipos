import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar_Nav from "./components/sidebar-nav";

function ManageUser() {
  const [isCheckModel, setIsCheckModel] = useState(false);
  const [titleModel, setTitleModel] = useState("");
  const [isCheckEven, setIsEven] = useState(true);
  const [passwordType, setPasswordType] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedTitle, setIsCheckedTitle] = useState("ປີດໃຊ້ງານ");

  const handleChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
    if (isChecked != true) {
      setIsCheckedTitle("ປິດໃຊ້ງານ");
    } else {
      setIsCheckedTitle("ເປີດໃຊ້ງານ");
    }
  };
  function togglePasswordType() {
    setPasswordType(!passwordType);
  }
  function handleModel(evens: string) {
    if (evens == "add") {
      console.log("if add");
      setTitleModel("ເພີ່ມພະນັກງານ");
      setIsCheckModel(!isCheckModel);
      setIsEven(true);
    } else if (evens == "edit") {
      setTitleModel("ແກ້ໄຂພະນັກງານ");
      setIsCheckModel(!isCheckModel);
      setIsEven(false);
    } else {
      setIsCheckModel(!isCheckModel);
    }
  }
  return (
    <div className="flex flex-col">
      <Sidebar_Nav />
      <div className="pt-8 sm:ml-64">
        <div className="p-1 mt-14">
          <div className="flex justify-between w-full h-fit items-end">
            <div className="flex flex-col w-fit h-fit pb-2 pl-2">
              <div className="flex text-gray-500 ">
                <Link className="text-orange-500 text-xs md:text-sm" to={""}>
                  ຈັດການຢູເຊີ້
                </Link>
              </div>
              <div className="flex">
                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                  <input
                    className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                  />
                  <button className="absolute right-3 top-1.5 flex  ">
                    <svg
                      className="w-6 h-6 text-gray-500 "
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
                        strokeWidth="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div className=" pr-1 mb-2  md:pr-5 ">
              <button
                onClick={() => handleModel("add")}
                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
              >
                ເພີ່ມ
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b   hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese image"
                      />
                      <div className="ps-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">
                          02056085825
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">ເສິບ</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4 flex">
                      <button className="font-medium   hover:underline">
                        <svg
                          className="w-6 h-6 text-gray-500 "
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
                            d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleModel("edit")}
                        className="font-medium   hover:underline"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 "
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
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                          />
                        </svg>
                      </button>
                      <a href="#" className="font-medium   hover:underline">
                        <svg
                          className="w-6 h-6 text-red-500 "
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
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen ${
          !isCheckModel ? "hidden" : "block"
        }  h-screen bg-black/10  absolute  flex justify-center items-center`}
      >
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
            <p className="text-xl font-semibold text-orange-500">
              {titleModel}
            </p>
            <button
              onClick={() => handleModel("close")}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal </span>
            </button>
          </div>
          <div className="px-3 mt-3">
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2  font-medium text-gray-900 text-xs md:text-sm"
                  >
                    {" "}
                    Name <span className="text-red-600"> *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name..."
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="user"
                    className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                  >
                    ຢູເຊີ້<span className="text-red-600"> *</span>
                  </label>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    placeholder="...."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 relative">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                  >
                    ລະຫັດຜ່ານ<span className="text-red-600"> *</span>
                  </label>
                  <input
                    type={passwordType ? "text" : "password"}
                    id="user"
                    name="user"
                    placeholder="..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  />
                  <button
                    onClick={togglePasswordType}
                    className="absolute bottom-2 right-3"
                  >
                    {passwordType ? (
                      <svg
                        className="w-6 h-6 text-gray-800 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 7a2 2 0 1 1 4 0v4a1 1 0 1 0 2 0V7a4 4 0 0 0-8 0v3H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V7Zm-5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                  >
                    Phone<span className="text-red-600"> *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="020xxxxxxxx"
                    pattern="[0-9]{3}[0-9]{8}"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                  >
                    Role<span className="text-red-600"> *</span>
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
                  >
                    <option value="">Select Role</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <label className="inline-flex items-center me-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={handleChange} // Handle state changes
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-2 peer-focus:ring-orange-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 ">
                    {isCheckedTitle}
                  </span>
                </label>
                <div className="col-span-2">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 text-xs md:text-sm"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2  text-gray-500 text-xs md:text-sm">
                        <span className="font-semibold">Click to upload</span>
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 ">
                        SVG, JPG (MAX. 204x240px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              {isCheckEven ? (
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center "
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new User
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center "
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Edit User
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
