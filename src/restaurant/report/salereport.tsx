
import { useEffect, useState } from "react";
import Sidebar_Nav from "../components/sidebar-nav"
import { Link } from "react-router-dom"
import Datepicker from "react-tailwindcss-datepicker";
import { salesAmountReportService, Root } from "../../services/reports/salesAmountReportService";
import { useAuth } from "../../context/context";
import Loading from "../../utils/Loading";
import DataComponent from "../../utils/datacomponent";
import PpageRange from "../../utils/pagination";
import { HiMenuAlt1 } from "react-icons/hi";
import { GetallcategoryByStatusService, ICategoriesStatus } from "../../services/categories/get-by-statuse-category";
import { generalErrors } from "../../utils/error";
import { getReportByCategoryService } from "../../services/reports/getReportSaleByCategoryService";
import { getReportByDateService } from "../../services/reports/getReportSaleByDateService";

function saleReport() {
    const [loading, setLoading] = useState(false);
    const { data, token } = useAuth();
    const [getDt, setGetDt] = useState<Root["data"]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [getData, setGetData] = useState<ICategoriesStatus["data"]>([]);
    const [fetchingStatus, setFetchingStatus] = useState("default");
    const NEXT_MONTH = new Date();
    NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: NEXT_MONTH,

    });
    const handleDateChange = async (newValue: any) => {
        // Custom date format: YYYY/MM/DD
        const startDateFormatted = newValue?.startDate
            ? newValue.startDate.toISOString().split('T')[0].replace(/-/g, '/')
            : new Date().toISOString().split('T')[0].replace(/-/g, '/');
        const endDateFormatted = newValue?.endDate
            ? newValue.endDate.toISOString().split('T')[0].replace(/-/g, '/')
            : new Date().toISOString().split('T')[0].replace(/-/g, '/');
    
        setValue({
            startDate: newValue?.startDate ?? new Date(),
            endDate: newValue?.endDate ?? new Date(),
        });
    
        try {
            let resId = String(data.restaurant_ID);
            const res = await getReportByDateService.ReportByDate(
                resId,
                startDateFormatted,
                endDateFormatted,
                String(currentPage),
                String(itemsPerPage),
                token || ""
            );
            console.log(res.data);
    
        } catch (error) {
            console.error("Error fetching report:", error);
        }
    };
    

    const fetchDataCategory = async () => {
        try {
            let resId = String(data.restaurant_ID);
            const res = await GetallcategoryByStatusService.GetAllCategory(resId, token || "");
            setGetData(res.data);
        } catch (error: any) {
            generalErrors(error)
        }
    };
    function handlItemsPerPage(limit: number) {
        setItemsPerPage(limit)
    }
    const fetchData = async () => {
        setFetchingStatus("default")
        try {
            setLoading(true);
            let resId = String(data.restaurant_ID);
            const res = await salesAmountReportService.salesAmountReport(resId, currentPage, itemsPerPage, token || "");
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
    useEffect(() => {
        if (fetchingStatus === "default") {
            fetchData();
        }
        if (fetchingStatus === "byCategory") {
            fetchingCategory
        }
        console.log(fetchingStatus);
        fetchDataCategory();
    }, [currentPage, itemsPerPage, fetchingStatus]);



    const fetchingCategory = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            setFetchingStatus("byCategory")
            const category_ID = event.target.value;  // Getting the selected category_ID
            let resId = String(data.restaurant_ID); // Assuming you have `restaurant_ID` from somewhere
            const res = await getReportByDateService.ReportByDate(
                resId,
                category_ID,
                String(currentPage),
                String(itemsPerPage),
                token || ""
            );
            setGetDt(res.data);
            const itemper = Number(res.total_item);
            setTotalItems(itemper);

        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    };


    return (
        <div className="flex flex-col h-full w-[100.0vw] overflow-visible">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64">
                <div className="flex flex-col gap-3  p-3">
                    <div className="flex justify-between w-full ">
                        <div className=" text-gray-500 flex gap-2 items-center text-xs md:text-sm">
                            <Link className="hover:text-orange-500" to={""}>ຈັດການລາຍງານ</Link>
                            <span>|</span>
                            <button onClick={() => (window.location.reload())} className="text-orange-500" >ລາຍງານຍອດຂາຍ</button>
                        </div>
                        <button
                            //  onClick={() => (handleModel("add"))} 
                            className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm">  Export CSV</button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 w-fit">
                        <div className="col-span-2 sm:col-span-1">

                            <select
                                id="category"
                                className="w-[330px] md:w-64 h-10 text-xs md:text-sm rounded-md border-gray-300 focus:outline-transparent focus:ring-0"
                                onChange={fetchingCategory} // Handles category change
                            >
                                <option value="" disabled>ເລືອກປະເພດ</option>
                                {getData.map((item) => (
                                    <option key={item.category_ID} value={item.category_ID}>
                                        {item.category}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="w-[330px] md:w-64 h-10">
                            <Datepicker
                                primaryColor={"orange"}
                                value={value}
                                onChange={handleDateChange}
                                showShortcuts={true}
                            />
                        </div>

                    </div>
                    <div className="flex gap-2 w-full">
                        <HiMenuAlt1 className="text-3xl" /><span>ລາຍການ</span> <div className="w-full border-b-[1px]"></div>
                    </div>



                    <div className=" relative overflow-auto md:overflow-hidden">
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
                        <div className="md:overflow-y-auto h-[42vh] sm:h-[60vh] ">
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

                    <div className="flex gap-5 w-full justify-end pr-5 pb-28 items-center">
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