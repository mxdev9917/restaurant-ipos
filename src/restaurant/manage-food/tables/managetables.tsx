import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar_Nav from "../../components/sidebar-nav";
import TableItem from "./tableitem";
import { GetAllTableService } from "../../../services/tables/getall-table";
import Loading from "../../../utils/Loading";
import CreateTable from "./createtable";
import EditTable from "./edittable";
import { DeleteTableService } from "../../../services/tables/delete-table";
import { alertSuccessV3 } from "../../../utils/alert";
import LoadingMessage from "../../../utils/loadingMessage";
import { useAuth } from "../../../context/context";


function ManageTables() {

    const { data } = useAuth();
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isCheckModel, setisCheckModel] = useState(false)
    const [isCheckEven, setisEven] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
    const [tableId, settableId] = useState("");
    const [tableName, settableName] = useState("");
    const [isMessage, setIsMessage] = useState(true);



    const deleteTable = async (id: string) => {

        try {
            setLoadingMessageTitle("ກຳລັງລົບ");
            setLoadingMessage(true);
            const res = await DeleteTableService.DeleteTable(id)
            if (res.status == 200) {
                alertSuccessV3("ລົບສຳເລັດ", 'success');
            }

        } catch (error) {

        } finally {
            setLoadingMessage(false);
        }

    }

    function handleModel(evens: string) {
        if (evens == 'add') {
            setisCheckModel(!isCheckModel)
            setisEven(true)
        } else {
            setisCheckModel(!isCheckModel)
        }
    }
    function handleEditModel(evens: string, table_Id: string, table_name: string) {
        if (evens == 'edit') {
            settableId(table_Id)
            settableName(table_name)

            setisCheckModel(!isCheckModel)
            setisEven(false)
        } else {
            setisCheckModel(!isCheckModel)
        }
    }

    // Ref to track IDs of already fetched items to avoid duplicates
    const fetchedItemIDs = useRef(new Set<string>());

    // Fetch tables data from the API
    const fetchTableData = async (currentPage: number) => {
        try {
            setIsMessage(true);
            let resId = String(data.restaurant_ID);
            const response = await GetAllTableService.GetAllTable(resId, currentPage, 40); // Replace with your actual API URL

            if (response.status === "200") {
                setTotalItem(response.total_item);
                // Create an array of items to append without duplicates
                const newItems = response.data.filter((item: any) => {
                    if (fetchedItemIDs.current.has(item.table_ID)) {
                        return false; // Skip this item if it's already been added
                    } else {
                        fetchedItemIDs.current.add(item.table_ID); // Mark this ID as fetched
                        return true; // Keep this item
                    }
                });

                // Append the new unique items to the state
                if (newItems.length > 0) {
                    setItems((prevItems) => [...prevItems, ...newItems]);
                }
            } else {
                console.error("Failed to fetch data:", response.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }finally{setIsMessage(false);}
    };

    // Load more items when reaching the bottom of the container
    const loadMoreItems = () => {
        if (totalItem === items.length) {
            return; // Stop loading more items if all items are fetched
        }
        setIsLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Increment page number for the next request
            fetchTableData(page + 1); // Fetch next page data
            setIsLoading(false);
        }, 1200);
    };

    // Initial data fetch when the component mounts
    useEffect(() => {
        fetchTableData(page); // Fetch data for the first page
    }, [page]);

    // Handle scrolling and load more items
    useEffect(() => {
        const container = containerRef.current;
        if (!container || !(container instanceof HTMLElement)) return;

        const handleScroll = () => {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !isLoading) {
                loadMoreItems();
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [isLoading, totalItem, items.length]);
    useEffect(() => {
        if (isMessage) {
            setTimeout(() => {
                setIsMessage(false);
            }, 6000);
        }

    }, [isMessage])
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {loadingMessage && <LoadingMessage text={loadingMessageTitle} />}
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">
                <div className="p-4">
                    <div className="flex justify-between items-center border-b-2 pb-2">
                        <div>
                            <div className="text-gray-500 flex gap-2 text-xs md:text-sm">
                                <Link className="hover:text-orange-500" to={""}>ຈັດການຮ້ານ</Link>
                                <span>|</span>
                                <Link className="text-orange-500" to={""}>ຈັດການໂຊນຮ້ານ</Link>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 mt-2">
                                <select className="w-48 md:w-64 h-9 text-xs md:text-sm rounded-full border-gray-300">
                                    <option value="">--ເລືອກໂຊນ--</option>
                                </select>
                                <div className="relative">
                                    <input className="w-48 md:w-64 h-9 text-xs md:text-sm rounded-full border-gray-300 pl-3" placeholder="ຄົ້ນຫາ..." />
                                    <button className="absolute right-3 top-1.5">
                                        <svg className="w-6 h-6 text-gray-500" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => (handleModel("add"))} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ເພີ່ມໂຕະ</button>
                    </div>
                    <div
                        ref={containerRef}
                        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8  sm:gap-3 gap-6 mt-3 overflow-auto p-3  h-[70vh] sm:h-fit"
                    >
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div
                                    key={item.table_ID}
                                    className="w-full  h-24 sm:h-32 md:h-40 lg:h-40 sm:mb-0 mb-12"
                                >
                                    <TableItem
                                        tableId={item.table_ID} // Pass the actual table ID
                                        tableName={item.table_name}
                                        tableStatus={item.table_status}
                                        onEdit={(id, name) => handleEditModel("edit", id, name)} // Correctly pass the ID and name
                                        onDelete={() => deleteTable(item.table_ID)} // Ensure correct deletion
                                    />

                                </div>
                            ))
                        ) : (
                            <div className="col-span-full flex justify-center items-center h-40 text-gray-500">
                                {
                                    isMessage ? <Loading text="ກຳລັງໂຫລດ" /> : "No data available."
                                }
                            </div>
                        )}
                        {isLoading && <p className="text-center w-full mt-2"><Loading text="ໂຫລດຂໍ້ມູນ" /></p>}
                    </div>

                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute  flex justify-center items-center`}>

                {
                    isCheckEven ? (
                        <CreateTable handleModel={handleModel} />
                    ) :
                        (

                            <EditTable handleModel={() => (handleEditModel)} tableId={tableId} tableName={tableName} />
                        )
                }
            </div>
        </div>
    );
}

export default ManageTables;
