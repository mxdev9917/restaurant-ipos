import Nav from "../components/nav";
import { GetAllMenuItemService } from "../../services/kitchen/getMenuItem";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/context";
import MenuItem from "./components/menuItem";
import { HiMenu } from "react-icons/hi";
import Loading from "../../utils/Loading";
import { generalErrors } from "../../utils/error";
import { HiRefresh } from "react-icons/hi";


function ManageKitchen() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const fetchedItemIDs = useRef(new Set<string>());
    const [selectBox, setSelectBox] = useState("pending");
    const [isMessage, setIsMessage] = useState(true);
    const[ck,setCk]=useState("cooking");

    const { data } = useAuth();
    function isCheckMenu() { }



    const loadMoreItems = () => {
        if (totalItem === items.length) {
            return; // Stop loading more items if all items are fetched
        }
        setIsLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Increment page number for the next request
            fetchData(String(page)); // Fetch next page data
            setIsLoading(false);
        }, 1200);


    };
    const fetchData = async (currentPage: string, reset: boolean = false) => {
        try {
            setIsMessage(true);

            if (reset) {
                setItems([]); // Clear previous items
                fetchedItemIDs.current.clear(); // Reset fetched IDs
            }

            let resId = String(data.restaurant_ID);
            const response = await GetAllMenuItemService.getMenuItems(resId, selectBox,ck, currentPage, "40");
            console.log(response.data);

            if (response.status === "200") {
                setTotalItem(response.total_item);

                const newItems = response.data.filter((item: any) => {
                    if (fetchedItemIDs.current.has(item.menu_items_ID)) {
                        return false;
                    } else {
                        fetchedItemIDs.current.add(item.menu_items_ID);
                        return true;
                    }
                });

                if (newItems.length > 0) {
                    setItems((prevItems) => [...prevItems, ...newItems]);
                }
            } else {
                console.error("Failed to fetch data:", response.message);
            }
        } catch (error: any) {
            console.error("Error fetching data:", error);
            generalErrors(error);
        } finally {
            setIsMessage(false);
        }
    };

    // Fetch data when 'page' changes
    useEffect(() => {
        setCk("cooking")
        fetchData(String(page),false);
    }, [page]);

    // Fetch new data and reset when 'selectBox' changes
    useEffect(() => {
        setCk("");
        fetchData(String(page), true); // Pass 'true' to reset data
    }, [selectBox]);


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

    }, [isMessage]);

    const handleRefresh=()=>{
        window.location.reload();
    }

    


    return (
        <div className="w-screen h-screen flex flex-col">
            <Nav isMenu={false} handelMenu={isCheckMenu} />

            <div className="flex justify-between p-3 border-b-[1px]">
                <p className="flex items-center gap-2 text-2xl font-semibold text-orange-500 ">
                    <HiMenu className="text-4xl" />
                    <p className="hidden sm:block"> ຈັດການຄົວ</p>
                </p>
               <div className="flex items-center gap-2 ">
               <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[320px] p-2.5"
                    value={selectBox}
                    onChange={(e) => setSelectBox(e.target.value)}
                >
                    <option value="pending">ລໍຖ້າດຳເນີນການ</option>
                    <option value="completed">ສຳເລັດ</option>
                    <option value="cancelled">ຍົກເລີກ</option>
                </select>
                <button onClick={handleRefresh} className="flex justify-center items-center w-10 h-10 rounded-md bg-gray-300 hover:bg-gray-200"><HiRefresh className="text-xl text-gray-600" />
                </button>
               </div>
            </div>


            <div
                ref={containerRef}
                className="grid grid-cols- sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 overflow-auto p-3 w-full h-full lg:h-fit  box-border"
            >
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.menu_items_ID} className=" ">
                            <div className=" ">
                                <MenuItem
                                    id={item.menu_items_ID}
                                    foodName={item.food_name}
                                    qty={item.quantity}
                                    description={item.description}
                                    tableName={item.table_name}
                                    pathImg={item.food_img}
                                    status={item.menu_item_status}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full flex justify-center items-center h-40 text-gray-500">
                        {isMessage ? <Loading text="ກຳລັງໂຫລດ" /> : "No data available."}
                    </div>
                )}
            </div>


        </div>
    );
}

export default ManageKitchen;