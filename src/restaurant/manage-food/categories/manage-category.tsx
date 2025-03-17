
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import Sidebar_Nav from "../../components/sidebar-nav"
import { GetallcategoryService } from "../../../services/categories/get-all-category";
import { DeleteCategoryService } from "../../../services/categories/delete-category";
import { alertSuccessV3 } from "../../../utils/alert";
import Loading from "../../../utils/Loading";
import CreateCategory from "./create-category";
import EditCategory from "./edit-category";
import { generalErrors } from "../../../utils/error";


import { useAuth } from "../../../context/context";
import CategroyItem from "./item-category";


function ManageCategory() {
    const [isCheckModel, setisCheckModel] = useState(false);




    // const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
    // const [currentPage, setCurrentPage] = useState(1);
    const [isCheckedPage, setIsCheckedPage] = useState(true);
    const [id, setId] = useState("");;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const fetchedItemIDs = useRef(new Set<string>());
    const { data,token } = useAuth();
    const [isMessage, setIsMessage] = useState(true);
    // function handlItemsPerPage(limit: number) {
    //     setItemsPerPage(limit)
    // }

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

    const handleDelete = async (category_ID: string) => {
        try {
            const res = await DeleteCategoryService.DeleteCategory(category_ID,token||"");
            if (res.status == 200) {
                alertSuccessV3("ລົບປະເພດເມນູສຳເລັດ", 'success');
            }

        } catch (error: any) {
            generalErrors(error);
        }
    }

    const fetchCateroyData = async (currentPage: number) => {
        try {
            setIsMessage(true);
            let resId = String(data.restaurant_ID);
            const response = await GetallcategoryService.GetAllCategory(resId, currentPage, 40,token||""); // Replace with your actual API URL
            if (response.status === "200") {
                setTotalItem(response.total_item);
                // Create an array of items to append without duplicates
                const newItems = response.data.filter((item: any) => {

                    if (fetchedItemIDs.current.has(item.category_ID)) {
                        return false; // Skip this item if it's already been added
                    } else {
                        fetchedItemIDs.current.add(item.category_ID); // Mark this ID as fetched
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
            fetchCateroyData(page); // Fetch next page data
            setIsLoading(false);
        }, 1200);


    };
    useEffect(() => {
        fetchCateroyData(page); // Fetch data for the first page
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
        <div className="flex flex-col">
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
                    <div
                        ref={containerRef}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8  overflow-auto p-3 w-full h-fit"
                    >
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div key={item.food_ID} className="p-2 w-full ">
                                    <div className="w-full h-28 sm:h-32 md:h-52 lg:h-40 ">
                                        <CategroyItem

                                            categoryId={item.category_ID}
                                            categoryName={item.category}
                                            categoryImg={item.category_image}
                                            categoryStatus={item.category_status}
                                            onEdit={(id) => handleEditModel("edit", id)}
                                            onDelete={() => handleDelete(item.category_ID)}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full flex justify-center items-center h-40 text-gray-500">
                                {
                                    isMessage ? <Loading text="ກຳລັງໂຫລດ" /> : "No data available."
                                }

                            </div>
                        )}
                    </div>
                 
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