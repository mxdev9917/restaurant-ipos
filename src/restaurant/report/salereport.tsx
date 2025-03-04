
import { useEffect, useState } from "react";
import Sidebar_Nav from "../components/sidebar-nav"
import { Link } from "react-router-dom"
import Datepicker from "react-tailwindcss-datepicker";
import { salesAmountReportService, Root } from "../../services/reports/salesAmountReportService";
import { useAuth } from "../../context/context";
import Loading from "../../utils/Loading";
import DataComponent from "../../utils/datacomponent";
import PpageRange from "../../utils/pagination";

function saleReport() {
    const [loading, setLoading] = useState(false);
    const { data } = useAuth();
    const [getDt, setGetDt] = useState<Root["data"]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
    const [currentPage, setCurrentPage] = useState(1);
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: NEXT_MONTH,
    });


    function handlItemsPerPage(limit: number) {
        setItemsPerPage(limit)
    }
    // Fetch users based on current page
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let resId = String(data.restaurant_ID);
                const res = await salesAmountReportService.salesAmountReport(resId, currentPage, itemsPerPage);
                setGetDt(res.data);

                let itemper = Number(res.total_item)
                setTotalItems(itemper);
                if (itemper == itemsPerPage) {
                    setTotalItems(itemper + 1);
                } else {
                    setTotalItems(itemper);
                }
                setLoading(false);
            } catch (error: any) {
                console.error("API Error:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage]);



    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64">
                <div className="flex flex-col">
                    <div className="flex justify-between w-full h-fit items-end">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500 pb-2 ">
                                <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ລາຍງານ</Link>
                                <Link className="text-xs md:text-sm" to={""}>|</Link>
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>ຍອດຂາຍ</Link>

                            </div>
                            <div className="flex flex-col md:flex-row gap-3 items-center">
                                <form className="flex items-center max-w-lg mx-auto  relative">
                                    <select name="" id="" className="w-56 md:w-64 h-10 text-xs md:text-sm rounded-md border-gray-300 focus:outline-transparent focus:ring-0">
                                        <option value="">-- ເລືອກປະເພດອາຫານ--</option>
                                    </select>
                                </form>
                                <Datepicker
                                    primaryColor={"orange"}
                                    value={value}
                                    onChange={(newValue) =>
                                        setValue({
                                            startDate: newValue?.startDate ?? new Date(),
                                            endDate: newValue?.endDate ?? new Date(),
                                        })
                                    }
                                    showShortcuts={true}
                                />
                            </div>
                        </div>

                        <div className=" pr-1 mb-2  md:pr-5 ">
                            <button className="flex items-end bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">
                                Export CSV
                            </button>
                        </div>
                    </div>


                    <div className=" relative overflow-auto md:overflow-hidden  md:h-[76vh] ">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
                                <tr className="flex items-center justify-between w-full h-14 text-left bg-gray-100 text-gray-800 font-semibold uppercase">
                                    <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ເມນູອາຫານ</th>
                                    <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ປະເພດເມນູ</th>
                                    <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ຈຳນວນ</th>
                                    <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ລາຄາ</th>
                                    <th className="px-6 py-3 flex justify-start min-w-[10rem] w-40">ລາຄາລວມ</th>
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
                                            <tr key={item.food_ID}
                                                className="flex justify-between text-left border-b hover:bg-gray-50 transition-all ">

                                                <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.food_name}</td>
                                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.category}</td>

                                                <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.total_quantity}</td>
                                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.food_price}</td>

                                                <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-40">
                                                    {item.total_price}</td>

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


        </div>
    )
}

export default saleReport