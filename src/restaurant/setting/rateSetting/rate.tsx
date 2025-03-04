import Sidebar_Nav from "../../components/sidebar-nav"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import CreateRate from "./createRate";
import EditRate from "./editRate";
import { Dropdown } from "flowbite-react";
import { useAuth } from "../../../context/context";
import { getAllRateService } from "../../../services/setting/rates/getAllRateService";
import Loading from "../../../utils/Loading";
import { alertconfirm, alertSuccessV3 } from "../../../utils/alert";
import { HiChevronDown } from "react-icons/hi";
import DataComponent from "../../../utils/datacomponent";
import PpageRange from "../../../utils/pagination";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiCheck } from "react-icons/hi"; //HiCheck 
import { deleteRateService } from "../../../services/setting/rates/deleteRateService";
import LoadingMessage from "../../../utils/loadingMessage";
import { patchStatusRateService } from "../../../services/setting/rates/editStatusRateService";

function Rate() {
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
    const [isCheckModel, setIsCheckModel] = useState(false);
    const [event, setEvent] = useState(true);
    const [getDt, setGetDt] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const { data } = useAuth();
    const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [currency, setCurrency] = useState("");
    const [rate, setRate] = useState("");
    const [rate_ID, setRate_ID] = useState("");
    function handleModel() {
        setEvent(true);
        setIsCheckModel(!isCheckModel);
    }
    function handleModelEdit(rate_IDItem:string ,currencyItem:string,rateItem:string) {
        setEvent(false);
        setRate_ID(rate_IDItem)
        setIsCheckModel(!isCheckModel);
        setCurrency(currencyItem);
        setRate(rateItem);
    }


    function handlItemsPerPage(limit: number) {
        setItemsPerPage(limit)
        console.log(limit);

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let resId = String(data.restaurant_ID);
                const res = await getAllRateService.AllRateService(resId, currentPage, itemsPerPage);
                setGetDt(res.data);
                let itemper = Number(res.total_item)
                setTotalItems(itemper);
                setLoading(false);
            } catch (error: any) {
                console.error("API Error:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage]);


    const handleUpdateStatus = async (id: string, rate_status: string) => {
        let newStatus;
        if (rate_status === "active") {
            newStatus = "disable";

        } else {
            newStatus = "active";
        }
        try {
            setLoadingMessage(true);
            setLoadingMessageTitle("ກຳລັງ ດຳເນີນການ");
            const res = await patchStatusRateService.RateService(id, newStatus);
            if (res.status == "200") {
                alertSuccessV3("ດຳເນີນການ ສຳເລັດ", "success");
            }

        } catch (error) {

        } finally {
            setLoadingMessage(false);
            setLoadingMessageTitle("");
        }
    }

    const handleDeleteUser = async (id: string) => {
        try {
            setLoadingMessage(true);
            setLoadingMessageTitle("ກຳລັງລົບອັດຕາແລກປ່ຽນ");
            const res = await deleteRateService.RateService(id);
            if (res.status == "200") {
                alertSuccessV3("ລົບອັດຕາແລກປ່ຽນສຳເລັດ", "success");
            }
        } catch (error) {

        } finally {
            setLoadingMessage(false);
            setLoadingMessageTitle("");
        }

    }

    return (
        <div className="flex flex-col relative">
            {loadingMessage && <LoadingMessage text={loadingMessageTitle} />}
            <Sidebar_Nav />
            <div className="sm:ml-64">
                <div className="">
                    <div className="flex flex-col ">
                        <div className="flex justify-between w-full h-fit items-end border-b-2 pt-8">
                            <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                                <div className="flex text-gray-500 ">
                                    <Link className="text-orange-500 text-xs md:text-sm" to={""}>
                                        ຕັ້ງຄ່າອັດຕາແລກປ່ຽນ
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
                                    onClick={() => handleModel()}
                                    className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm"
                                >
                                    ເພີ່ມ
                                </button>
                            </div>
                        </div>
                        <div className=" relative overflow-auto md:overflow-hidden  md:h-[76vh] ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-sm text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
                                    <tr className="flex items-center justify-between w-full h-14 text-left bg-gray-100 text-gray-800 font-semibold uppercase">
                                        <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ສະກຸນເງີນ</th>
                                        <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ອັດຕາແລກປ່ຽນ</th>
                                        <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ສະຖານະ</th>
                                        <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ວັນທີ</th>
                                        <th className="px-6 py-3 flex justify-start min-w-[10rem] w-[185px]">ເມເນູ</th>
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
                                                <tr key={item.rate_ID}
                                                    className="flex justify-between text-left border-b hover:bg-gray-50 transition-all ">
                                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                        {item.currency}</td>

                                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                        {item.rate}</td>

                                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`h-2.5 w-2.5 rounded-full mr-2 ${item.rate_status === "active" ? "bg-green-500" : "bg-red-500"
                                                                    }`}
                                                            />
                                                            <span className={`text-gray-800 ${item.rate_status === "active" ? "font-semibold" : "font-medium"}`}>
                                                                {item.rate_status === "active" ? "Active" : "Disable"}
                                                            </span>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                        {item.created_at}</td>
                                                    <td className=" py-3 flex justify-justify-end items-center min-w-[10rem] w-40">
                                                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="flex items-center">ເມນູ <HiChevronDown /></span>}>

                                                            <Dropdown.Item
                                                                onClick={() =>
                                                                    alertconfirm(
                                                                        () => handleUpdateStatus(item.rate_ID, item.rate_status),
                                                                        `ຕ້ອງການ ${item.rate_satatus === "disable" ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"} ${item.currency} ?`,
                                                                        "question"
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    item.rate_satatus === "disable" ? (<span className="flex ">
                                                                        <HiCheck className='text-lg text-gray-400 mr-2' />ເປີດໃຊ້ງານ</span>) : (<span className="flex ">
                                                                            <HiOutlineBan className='text-lg text-gray-400 mr-2' />ປິດໃຊ້ງານ</span>)
                                                                }
                                                            </Dropdown.Item>
                                                            <Dropdown.Item
                                                                onClick={() => handleModelEdit(item.rate_ID,item.currency,item.rate)}
                                                            ><HiPencilAlt className='text-lg text-gray-400 mr-2' />ແກ້ໄຂຂໍ້ມູນ</Dropdown.Item>
                                                            <Dropdown.Item
                                                                onClick={() =>
                                                                    alertconfirm(
                                                                        () => handleDeleteUser(item.rate_ID),
                                                                        `ຕ້ອງການລົບ ${item.currency} ?`,
                                                                        "question"
                                                                    )
                                                                }
                                                            ><HiOutlineTrash className='text-lg text-gray-400 mr-2' />ລົບອັດຕາແລກກປ່ຽນ</Dropdown.Item>
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
                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? "hidden" : "block"}  h-screen bg-black/10  absolute  flex justify-center items-center`}>

                {
                    event ? <CreateRate handleModel={handleModel} /> :
                     <EditRate
                     rate_ID={rate_ID}
                    currencyOld={currency}
                    rateOld={String(rate)}
                    handleModelEdit={() => handleModelEdit("", "","")}
                />
                

                }
            </div>
        </div>
    )
}

export default Rate