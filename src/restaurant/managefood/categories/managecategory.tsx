
import { Link } from "react-router-dom"
import { Dropdown } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { useEffect, useState } from "react";
import Sidebar_Nav from "../../components/sidebar-nav"
import { GetallcategoryService } from "../../../services/categories/getall-category";
import { DeleteCategoryService } from "../../../services/categories/delete-category";
import { editStatusCategoryService } from "../../../services/categories/editstatus-category";
import { ICategories } from "../../../interfaces/getallcategory-interface";
import { alertconfirm, alertError, alertSuccessV3 } from "../../../utils/alert";
import Loading from "../../../utils/Loading";
import DataComponent from "../../../utils/datacomponent";
import PpageRange from "../../../utils/pagination";
import CreateCategory from "./create-category";
import EditCategory from "./edit-category";
import { generalErrors } from "../../../utils/error";
import LoadingMessage from "../../../utils/loadingMessage";


function ManageCategory() {
    const [isCheckModel, setisCheckModel] = useState(false);
    const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
    const [getData, setGetData] = useState<ICategories["data"]>([]);
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [isCheckedPage, setIsCheckedPage] = useState(true);
    const [id, setId] = useState("");
    const [loadingMessage, setLoadingMessage] = useState(false);


    function handlItemsPerPage(limit: number) {
        setItemsPerPage(limit)
    }

    function handleModel(evens: string) {
        if (evens == 'add') {
            setisCheckModel(!isCheckModel)
            setIsCheckedPage(true)
        } else {
            setisCheckModel(!isCheckModel)
        }

    }
    function handleEditModel(evens: string, id: string) {
        if (evens == 'edit') {
            setisCheckModel(!isCheckModel)
            setId(id)
            setIsCheckedPage(false)
        } else {
            setisCheckModel(!isCheckModel)
        }

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await GetallcategoryService.GetAllCategory("60", currentPage, itemsPerPage);
                setGetData(res.data);
                let itemper = Number(res.total_item)
                setTotalItems(itemper)
                // if (itemper == itemsPerPage) {
                //     setTotalItems(itemper + 1);
                // } else {
                //     setTotalItems(itemper);
                // }
            } catch (error: any) {
                generalErrors(error);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage]);


    const handleUpdateStatus = async (category_ID: string, status: string) => {
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
               setLoadingMessageTitle("ກຳລັງດຳເນີນການ")
            const today = new Date().toISOString().split("T")[0];
            const res = await editStatusCategoryService.editStatusCategory(category_ID, newStatus, today);
            if (res.status == 200) {
                console.log(res.status);
                alertSuccessV3("ສຳເລັດ", 'success');
            }
        } catch (error: any) {
            console.error(error);
            generalErrors(error);
        } finally {
               setLoadingMessage(false);
        }


    }

    const handleDeleteUser = async (category_ID: string) => {
        try {
            const res = await DeleteCategoryService.DeleteCategory(category_ID);
            if (res.status == 200) {
                alertSuccessV3("ລົບປະເພດເມນູສຳເລັດ", 'success');
            }

        } catch (error: any) {
            generalErrors(error);
        }
    }

    return (
        <div className="flex flex-col">
             {loadingMessage && <LoadingMessage text={loadingMessageTitle} />}
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">

                <div className="p-1">
                    <div className="flex justify-between w-full h-fit items-end">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500 ">
                                <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ຈັດການຮ້ານ</Link>
                                <Link className="text-xs md:text-sm" to={""}>|</Link>
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>ຈັດການໂຊນຮ້ານ</Link>

                            </div>
                            <div className="flex">
                                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                    <input className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                                        type="text" placeholder="ຄົ້ນຫາ..." />
                                    <button className="absolute right-3 top-1.5 flex  ">

                                        <svg className="w-6 h-6 text-gray-500 "
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round"
                                                strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                        </svg>

                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className=" pr-1 mb-2  md:pr-5 ">
                            <button onClick={() => handleModel('add')} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ເພີ່ມ</button>
                        </div>
                    </div>
                    <div className=" relative overflow-auto md:overflow-hidden  md:h-[76vh] ">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
                                <tr className="flex items-center justify-between w-full h-14 text-left bg-gray-100 text-gray-800 font-semibold uppercase">
                                    <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">Name</th>
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
                                    ) : getData.length > 0 ? (
                                        getData.map((item) => (
                                            <tr key={item.category_ID}
                                                className="flex justify-between text-left border-b hover:bg-gray-50 transition-all ">
                                                <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.category}
                                                </td>
                                                <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    <div className="flex items-center">
                                                        <div
                                                            className={`h-2.5 w-2.5 rounded-full mr-2 ${item.category_status === "active" ? "bg-green-500" : "bg-red-500"
                                                                }`}
                                                        />
                                                        <span className={`text-gray-800 ${item.category_status === "active" ? "font-semibold" : "font-medium"}`}>
                                                            {item.category_status === "active" ? "Active" : "Locked"}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.created_at}</td>
                                                <td className=" py-3 pr-10 flex justify-center items-center min-w-[10rem] w-40">
                                                    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="flex items-center">ເມນູ <HiChevronDown /></span>}>
                                                        <Dropdown.Item
                                                         onClick={() =>
                                                            alertconfirm(
                                                                () => handleUpdateStatus(item.category_ID, item.category_status),
                                                                `ຕ້ອງການ ${item.category_status==="Active"? "ປິດການໃໍຊ້ງານ":"ເປີດການໃໍຊ້ງານ"} ${item.category} ?`,
                                                                "question"
                                                            )
                                                        }
                                                            // onClick={() => handleUpdateStatus(item.category_ID, item.category_status)}
                                                        >{item.category_status==="Active"? "ປິດການໃໍຊ້ງານ":"ເປີດການໃໍຊ້ງານ"}</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => handleEditModel('edit', item.category_ID)}
                                                        >ແກ້ໄຂປະເພດເມນູ</Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() =>
                                                                alertconfirm(
                                                                    () => handleDeleteUser(item.category_ID),
                                                                    `ຕ້ອງການລົບ ${item.category} ?`,
                                                                    "question"
                                                                )
                                                            }
                                                        >ລົບປະເພດເມນູ</Dropdown.Item>
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
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute  flex justify-center items-center`}>

                {
                    isCheckedPage ? (
                        <CreateCategory handleModel={handleModel} />
                    ) :
                        (
                            <EditCategory handleModel={handleModel} id={id} />
                        )
                }



            </div>
        </div>
    )

}

export default ManageCategory