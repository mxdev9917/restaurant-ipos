import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar_Nav from "./components/sidebar-nav";
import { DeleteUserService } from "../services/users/deleteuser";
import { ResetPasswordService } from "../services/users/resetpassword";
import { alertconfirm, alertSuccessV3 } from "../utils/alert";
import { GetAllUserByIdService } from "../services/users/getalluserbyid";
import { IGetAllUserById } from '../interfaces/getalluserbyid_interface';
import LoadingMessage from "../utils/loadingMessage";
import CreateUser from "./components/manageuser/createuser";
import EditUser from "./components/manageuser/edituser";
import Loading from "../utils/Loading";
import PpageRange from "../utils/pagination";
import DataComponent from "../utils/datacomponent";

function ManageUser() {
  const [isCheckModel, setIsCheckModel] = useState(false);
  const [isCheckEven, setIsEven] = useState(true);
  const [getDt, setGetDt] = useState<IGetAllUserById["data"]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
  const [user_id, setUser_id] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Reset password logic
  const handleResetpassword = async (userId: any) => {
    setLoadingMessageTitle("ກຳລັງປ່ຽນລະຫັດຜ່ານ");
    setLoadingMessage(true);
    const res = await ResetPasswordService.patchReset(userId);
    if (res.status === 200) {
      alertSuccessV3("ປ່ຽນລະຫັດຜ່ານສຳເລັດ", 'success');
    }
    setLoadingMessage(false);
  };

  // Delete user logic
  const handleDeleteUser = async (userId: any) => {
    try {
      setLoadingMessageTitle("ກຳລັງລົບ");
      setLoadingMessage(true);
      const res = await DeleteUserService.DeleteUser(userId);
      if (res.status === 200) {
        alertSuccessV3("ລົບຢູເຊີ້ສຳເລັດ", 'success');
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoadingMessage(false);
    }
  };

  // Fetch users based on current page
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await GetAllUserByIdService.GetAllUserById("3", currentPage);
        setGetDt(res.data);

        if(res.data.length==itemsPerPage){
          setTotalItems(res.data.length+1); 
        }else{
          setTotalItems(res.data.length);
        }
        setLoading(false);
      } catch (error: any) {
        console.error("API Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  // Toggle model state
  const handleModel = (action: string, userId: string) => {
    setUser_id(userId);
    setIsCheckModel(!isCheckModel);
    setIsEven(action === "add");
  };

  return (
    <div className="flex flex-col">
      {/* Loading message */}
      {loadingMessage && <LoadingMessage text={loadingMessageTitle} />}

      <Sidebar_Nav />

      <div className="pt-8 sm:ml-64">
        <div className="p-1">
          <div className="flex justify-between w-full h-fit items-end">
            <div className="flex flex-col w-fit h-fit pb-2 pl-2">
              <div className="flex text-gray-500">
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
                  <button className="absolute right-3 top-1.5 flex">
                    <svg
                      className="w-6 h-6 text-gray-500"
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

            <div className="pr-1 mb-2 md:pr-5">
              <button
                onClick={() => handleModel("add", "0")}
                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
              >
                ເພີ່ມ
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">User name</th>
                  <th className="px-6 py-3">Position</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
            </table>

            <div className="overflow-y-auto max-h-[73vh]">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="h-40">
                        <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
                      </td>
                    </tr>
                  ) : getDt.length > 0 ? (
                    getDt.map((item) => (
                      <tr key={item.user_ID} className="bg-white border-b hover:bg-gray-50">
                        <td className="flex items-center px-6 py-2.5">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Profile"
                          />
                          <div className="pl-3">
                            <div className="text-base font-semibold">{item.user_name}</div>
                            <div className="font-normal text-gray-500">{item.user_phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">{item.user}</td>
                        <td className="px-6 py-2.5">{item.user_role}</td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center">
                            <div className={`h-2.5 w-2.5 rounded-full mr-2 ${item.user_status === "active" ? "bg-green-500" : "bg-red-500"}`} />
                            {item.user_status === "active" ? "Active" : "Locked"}
                          </div>
                        </td>
                        <td className="px-6 py-2.5">{item.created_at}</td>
                        <td className="px-6 py-2.5 flex">
                          <button
                            onClick={() =>
                              alertconfirm(
                                () => handleResetpassword(item.user_ID),
                                `ຕ້ອງການປ່ຽນລະຫັດຜ່ານຢູເຊີ ${item.user} ?`,
                                "question"
                              )
                            }
                            className="font-medium hover:underline"
                          >
                            <svg
                              className="w-6 h-6 text-gray-500"
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
                          <button className="font-medium hover:underline">
                            <svg
                              className="w-6 h-6 text-gray-500"
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
                            onClick={() =>
                              alertconfirm(
                                () => handleDeleteUser(item.user_ID),
                                `ຕ້ອງການລົບ ${item.user} ?`,
                                "question"
                              )
                            }
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="h-40 text-center align-middle">
                        No data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-5 w-full justify-end pr-5 items-center">
            <DataComponent
                   itemsPerPage={itemsPerPage}
            />
            <PpageRange
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isCheckModel && (
        <div
          className="w-screen h-screen bg-black/10 absolute flex justify-center items-center z-50"
        >
          {isCheckEven ? (
            <CreateUser handleModel={handleModel} />
          ) : (
            <EditUser handleModel={handleModel} user_id={user_id} />
          )}
        </div>
      )}
    </div>
  );
}

export default ManageUser;
