import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar_Nav from "./components/sidebar-nav";
import { DeleteUserService } from "../services/users/deleteuser";
import { ResetPasswordService } from "../services/users/resetpassword";
import { alertSuccessV3 } from "../utils/alert";
import { GetAllUserByIdService } from "../services/users/getalluserbyid";
import { IGetAllUserById } from '../interfaces/getalluserbyid_interface'
// import { alertconfirm } from "../utils/alert";
// import Loading from "../utils/Loading";
import LoadingMessage from "../utils/loadingMessage";
import CreateUser from "./components/manageuser/createuser";
import EditUser from "./components/manageuser/edituser";
import UserTable from "./components/data_tables/table-user";


function ManageUser() {
  const [isCheckModel, setIsCheckModel] = useState(false);
  const [isCheckEven, setIsEven] = useState(true);
  const [getDt, setGetDt] = useState<IGetAllUserById["data"]>([]);
  // const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
  const [user_id, setUser_id] = useState("");
  async function handleResetpassword(userId: any) {

    setLoadingMessageTitle("ກຳລັງປ່ຽນລະຫັດຜ່ານ")
    setLoadingMessage(true)
    const res = await ResetPasswordService.patchReset(userId)
    if (res.status == 200) {
      alertSuccessV3("ປ່ຽນລະຫັດຜ່ານສຳເລັດ", 'success');
    }
  }
  async function handleDeleteUser(userId: any) {

    try {
      setLoadingMessageTitle("ກຳລັງລົບ")
      setLoadingMessage(true)
      const res = await DeleteUserService.DeleteUser(userId)
      if (res.status == 200) {
        alertSuccessV3("ລົບຢູເຊີ້ສຳເລັດ", 'success');
      }

    } catch (error: any) {
      console.log(error);

    } finally {
      setLoadingMessage(false)
    }

  }
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true)
      try {
        const res = await GetAllUserByIdService.GetAllUserById("3");
        setGetDt(res.data);
      } catch (error: any) {
        console.error("API Error:", error);
      } finally {
        // setLoading(false)
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
  }, [getDt]);



  const handleModel = (action: string, userId: string) => {
    setUser_id(userId)
    if (action === "add") {
      // setTitleModel("ເພີ່ມພະນັກງານ");
      setIsCheckModel(!isCheckModel);
      setIsEven(true);
    } else if (action === "edit") {
      // setTitleModel("ແກ້ໄຂພະນັກງານ");
      setIsCheckModel(!isCheckModel);
      setIsEven(false);
    } else {
      setIsCheckModel(!isCheckModel);
    }
  };


  return (
    <div className="flex flex-col">
      <div className={` ${!loadingMessage ? "hidden" : "block"}`}>
        <LoadingMessage text={loadingMessageTitle} />
      </div>
      <Sidebar_Nav />
      <div className="pt-8 sm:ml-64">
        <div className="p-1">
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
                onClick={() => handleModel("add", "0")}
                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
              >
                ເພີ່ມ
              </button>
            </div>
          </div>

          <UserTable
            handleResetPass={handleResetpassword}
            handleDelete={handleDeleteUser}
            handleModel={handleModel}
          />

          {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      User name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    loading ? (
                      <tr className="shadow-none">
                        <td colSpan={5} className="h-40">
                          <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
                        </td>
                      </tr>
                    ) : getDt.length > 0 ? (
                      getDt.map((item) => (
                        <tr key={item.user_ID} className="bg-white border-b hover:bg-gray-50 ">
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
                              <div className="text-base font-semibold">{item.user_name}</div>
                              <div className="font-normal text-gray-500">
                                {item.user_phone}
                              </div>
                            </div>
                          </th>
                          <td className="px-6  pt-6 ">{item.user}</td>
                          <td className="px-6  pt-6 ">{item.user_role}</td>
                          <td className="px-6  pt-6">
                            <div className="flex items-center">
                              <div
                                className={`h-2.5 w-2.5 rounded-full me-2  ${item.user_status === "active"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                                  }`}
                              />
                              {item.user_status === "active"
                                ? "Active"
                                : "Locked"}
                            </div>
                          </td>
                          <td className="px-6  min-w-32 pt-6">{item.created_at}</td>
                          <td className="px-6 pt-6 flex">
                            <button
                              // onClick={loadingMessage}
                              onClick={() => alertconfirm(() => handleResetpassword(item.user_ID), `ຕ້ອງການປ່ຽນລະຫັດຜ່ານຢູ່ເຊີ້ ${item.user} ?`, "question")}
                              className="font-medium   hover:underline">
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
                              // onClick={() => {
                              //   handleModel("edit");
                              //   setUser_id(item.user_ID);
                              // }}
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
                            <button
                              onClick={() => alertconfirm(() => handleDeleteUser(item.user_ID), `ຕ້ອງການລົບ ${item.user} ?`, "question")}
                              className="font-medium hover:underline"
                            >
                              <svg
                                className="w-6 h-6 text-red-500"
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
                      )
                      )) : (
                      <tr className="">
                        <td colSpan={5} className="h-40 text-center align-middle">
                          No data available.
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
      <div
        className={`w-screen ${!isCheckModel ? "hidden" : "block"
          } h-screen bg-black/10 absolute flex justify-center items-center z-50`}
      >
        {
          isCheckEven ?
            <CreateUser handleModel={handleModel} /> :
            <EditUser handleModel={handleModel} user_id={user_id} />
        }
      </div>

    </div>
  );
}

export default ManageUser;
