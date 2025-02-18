import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar_Nav from "./components/sidebar-nav";
import { DeleteUserService } from "../services/users/delete-user";
import { ResetPasswordService } from "../services/users/reset-password";
import { alertconfirm, alertError, alertSuccessV3 } from "../utils/alert";
import { GetAllUserByIdService } from "../services/users/get-all-user-by-id";
import { IGetAllUserById } from '../interfaces/getalluserbyid-interface';
import { PatchStatusbyIdService } from "../services/users/update-status";
import LoadingMessage from "../utils/loadingMessage";
import CreateUser from "./components/manageuser/createuser";
import EditUser from "./components/manageuser/edituser";
import Loading from "../utils/Loading";
import PpageRange from "../utils/pagination";
import DataComponent from "../utils/datacomponent";
import { Dropdown } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { generalErrors } from "../utils/error";
import { useAuth } from "../context/context";

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
 const { data } = useAuth();

  function handlItemsPerPage(limit: number) {
    setItemsPerPage(limit)
    console.log(limit);

  }

  const handleUpdateStatus = async (userId: string, status: string) => {
    let newStatus: string;
    status = status.toLowerCase();
    if (status === "locked") {
      newStatus = "active"
    } else if (status === "active") {
      newStatus = "locked"
    } else {
      alertError("ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໄໝ່ອີກຄັ້ງ", "error");
      return
    }

    try {
      setLoadingMessage(true);
      const res = await PatchStatusbyIdService.patchStatus(userId, newStatus);
      if (res.status == 200) {
        console.log(res.status);
        alertSuccessV3("ປ່ຽນລະຫັດຜ່ານສຳເລັດ", 'success');
      }
    } catch (error: any) {
      console.error(error);
      generalErrors(error);
    } finally {
      setLoadingMessage(false);
    }




  }
  // Reset password logic
  const handleResetpassword = async (userId: any) => {
    setLoadingMessageTitle("ກຳລັງປ່ຽນລະຫັດຜ່ານ");
    setLoadingMessage(true);
    const res = await ResetPasswordService.patchReset(userId);
    if (res.status == 200) {
      console.log(res.status);
      alertSuccessV3("ປ່ຽນລະຫັດຜ່ານສຳເລັດ", 'success');
    }
    setLoadingMessage(false);
  };

  const handleDeleteUser = async (userId: any) => {
    try {
      setLoadingMessageTitle("ກຳລັງລົບ");
      setLoadingMessage(true);
      const res = await DeleteUserService.DeleteUser(userId);
      if (res.status == 200) {
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
        let resId = String(data.restaurant_ID);
        const res = await GetAllUserByIdService.GetAllUserById(resId, currentPage, itemsPerPage);
        setGetDt(res.data);
        let itemper = Number(res.total_item)
        setTotalItems(itemper);
        // if (itemper == itemsPerPage) {
        //   setTotalItems(itemper + 1);
        // } else {
        //   setTotalItems(itemper);
        // }
        setLoading(false);
      } catch (error: any) {
        console.error("API Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage]);

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
          <div className=" relative overflow-auto md:overflow-hidden  md:h-[76vh] ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
                <tr className="flex items-center justify-between w-full h-14 text-left bg-gray-100 text-gray-800 font-semibold uppercase">
                  <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">Name</th>
                  <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">User name</th>
                  <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">Position</th>
                  <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">Status</th>
                  <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">Date</th>
                  <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">Action</th>
                </tr>
              </thead>
            </table>
            <div className="md:overflow-y-auto md:max-h-[65vh]">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="h-40 text-center text-gray-500">
                        <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
                      </td>
                    </tr>
                  ) : getDt.length > 0 ? (
                    getDt.map((item) => (
                      <tr key={item.user_ID}
                        className="flex justify-between text-left border-b hover:bg-gray-50 transition-all ">

                        <td className="px-6 py-3 flex justify-start min-w-[10rem] w-40">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Profile"
                          />
                          <div className="pl-3">
                            <div className="text-base font-semibold text-gray-800 ">{item.user_name}</div>
                            <div className="font-normal text-gray-500">{item.user_phone}</div>
                          </div>
                        </td>

                        <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                          {item.user}</td>

                        <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                          {item.user_role}</td>

                        <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                          <div className="flex items-center">
                            <div
                              className={`h-2.5 w-2.5 rounded-full mr-2 ${item.user_status === "active" ? "bg-green-500" : "bg-red-500"
                                }`}
                            />
                            <span className={`text-gray-800 ${item.user_status === "active" ? "font-semibold" : "font-medium"}`}>
                              {item.user_status === "active" ? "Active" : "Locked"}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                          {item.created_at}</td>
                        <td className=" py-3 flex justify-center items-center min-w-[10rem] w-40">
                          <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="flex items-center">ເມນູ <HiChevronDown /></span>}>
                            <Dropdown.Item
                              onClick={() =>
                                alertconfirm(
                                  () => handleResetpassword(item.user_ID),
                                  `ຕ້ອງການປ່ຽນລະຫັດຜ່ານຢູເຊີ ${item.user} ?`,
                                  "question"
                                )
                              }
                            >ປ່ຽນລະຫັດ</Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                alertconfirm(
                                  () => handleUpdateStatus(item.user_ID, item.user_status),
                                  `ຕ້ອງການປ່ຽນລະຫັດຜ່ານຢູເຊີ ${item.user} ?`,
                                  "question"
                                )
                              }
                            >ປິດການໃຊ້ການ</Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleModel("edit", item.user_ID)}
                            >ແກ້ໄຂຂໍ້ມູນ</Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                alertconfirm(
                                  () => handleDeleteUser(item.user_ID),
                                  `ຕ້ອງການລົບ ${item.user} ?`,
                                  "question"
                                )
                              }
                            >ລົບຜູ້ໃຊ້</Dropdown.Item>
                          </Dropdown>

                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="h-40 text-center text-gray-500">
                        No data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>



          <div className="flex gap-5 w-full justify-end pr-5 items-center">
            <DataComponent onSelectChange={handlItemsPerPage} />
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
      {
        isCheckModel && (
          <div
            className="w-screen h-screen bg-black/10 absolute flex justify-center items-center z-50"
          >
            {isCheckEven ? (
              <CreateUser handleModel={handleModel} />
            ) : (
              <EditUser handleModel={handleModel} user_id={user_id} />
            )}
          </div>
        )
      }
    </div >
  );
}

export default ManageUser;
