// import ZoneItem from "./components/zoneitem"
import TableItemSale from "./components/tableitemsale";
import Nav from "../components/nav";
import { useEffect, useRef, useState } from "react";
import { GetAllTableByStatusService } from "../../services/tables/get-table-by-status-table";
import Loading from "../../utils/Loading";
import { useAuth } from "../../context/context";
import TableMenu from "./components/tablemenu";
import { generalErrors } from "../../utils/error";
import { useNavigate } from "react-router-dom";




function selectTatles() {
    const [isCheckModel, setIsCheckModel] = useState(false)
    const [page, setPage] = useState(1);
    const [totalItem, setTotalItem] = useState(0);
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const fetchedItemIDs = useRef(new Set<string>());
    const [tableId, setTableId] = useState("");
    const navigate = useNavigate();
    const { data,token } = useAuth();
    const [isMessage, setIsMessage] = useState(true);
       
    function isCheckMenu() { }


    function handleClick(id: string, status: string) {

        if (status != "empty") {
            navigate(`/cart/${id}`);
        } else {
            setIsCheckModel(!isCheckModel)
            setTableId(id);
        }
    }


    const fetctData = async (currentPage: number) => {
        try {
            setIsMessage(true);
            let resId = String(data.restaurant_ID);
            const response = await GetAllTableByStatusService.GetAllTable(resId, currentPage, 40,token||"")
            if (response.status === "200") {
                setTotalItem(response.total_item);
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
        } catch (error: any) {
            generalErrors(error);
        } finally {
            setIsMessage(false);
        }

    }
    // Load more items when reaching the bottom of the container
    const loadMoreItems = () => {
        if (totalItem === items.length) {
            return; // Stop loading more items if all items are fetched
        }
        setIsLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Increment page number for the next request
            fetctData(page); // Fetch next page data
            setIsLoading(false);
        }, 1200);


    };

    // Initial data fetch when the component mounts
    useEffect(() => {
        fetctData(page); // Fetch data for the first page
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
        <div className="flex flex-col h-full w-[100.0vw] overflow-visible">
            <Nav isMenu={false} handelMenu={isCheckMenu} />

            {/* <div className=" w-full flex gap-3 items-center pt-2 ">

                <div className="ml-3">
                    <button

                        className="w-28 h-fit bg-orange-500 text-white p-1.5 rounded-lg right-1 focus:ring-1 focus:ring-orange-500">
                        ໂຊນຮ້ານທັ້ງໝົດ
                    </button>
                </div>
                <div className="w-full flex gap-3 overflow-x-auto snap-x ">
                    {items.map((_item, index) => (
                        <div key={index} className=" ">
                            <ZoneItem />
                        </div>
                    ))}
                </div>
            </div> */}

            <div
                ref={containerRef}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 sm:gap-3 gap-3 overflow-auto p-3 w-full h-fit"
            >
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.table_ID} className="w-full h-28 sm:h-32 md:h-52 lg:h-40 ">
                            <TableItemSale onClick={handleClick} tableId={item.table_ID} tableName={item.table_name} tableStatus={item.table_status} />
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

            <div className={`${isCheckModel ? "block" : "hidden"} bg-black/30 w-full h-full absolute flex justify-center items-center`}>
                <TableMenu tableId={tableId} handleClick={() => handleClick("", "empty")} />
            </div>
        </div>
    )
}

export default selectTatles