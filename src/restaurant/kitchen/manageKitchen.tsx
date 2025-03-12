import Nav from "../components/nav";
import { GetAllMenuItemService, Root } from "../../services/kitchen/getMenuItem";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/context";
import MenuItem from "./components/menuItem";




import { HiMenu } from "react-icons/hi";
import Loading from "../../utils/Loading";
import { generalErrors } from "../../utils/error";


function ManageKitchen() {






    const containerRef = useRef<HTMLDivElement | null>(null);
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const fetchedItemIDs = useRef(new Set<string>());

    const [isMessage, setIsMessage] = useState(true);









    const { data } = useAuth();

    const [status, setStatus] = useState("pending");

    function isCheckMenu() { }

    const fetchData = async (currentPage: string) => {
        try {
            setIsMessage(true);
            let resId = String(data.restaurant_ID);
            const response = await GetAllMenuItemService.getMenuItems(resId, status, currentPage, "40");
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
            generalErrors(error)
        } finally {
            setIsMessage(false);
        }
    };


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
    useEffect(() => {
        fetchData(String(page));
    }, [page]);

    useEffect(() => {
        fetchData(String(page));
    }, [page]);

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














    return (
        <div className="w-screen h-screen flex flex-col">
            <Nav isMenu={false} handelMenu={isCheckMenu} />

            <div className="flex justify-between p-3 border-b-[1px]">
                <p className="flex items-center gap-2 text-2xl font-semibold text-orange-500 ">
                    <HiMenu className="text-4xl" />
                    ຈັດການຄົວ
                </p>
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[370px] p-2.5"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">ລໍຖ້າດຳເນີນການ</option>
                    <option value="completed">ສຳເລັດ</option>
                    <option value="cancelled">ຍົກເລີກ</option>
                </select>
            </div>


            <div
                ref={containerRef}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-3 gap-4 overflow-auto p-3 w-full h-full box-border"
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
