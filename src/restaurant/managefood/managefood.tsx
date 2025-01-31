import { Link } from "react-router-dom"
import Sidebar_Nav from "../components/sidebar-nav"
import FoodItem from "../components/fooditem"
import { useState, useEffect, useRef } from "react";
import { alertSuccessV3 } from "../../utils/alert";
import { GetallProductService } from "../../services/products/getall-product";
import Loading from "../../utils/Loading";
import LoadingMessage from "../../utils/loadingMessage";

function ManageFood() {
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isCheckModel, setisCheckModel] = useState(false)
    const [isCheckEven, setisEven] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
    const [productId, setProductId] = useState("");
    const [productName, setproductName] = useState("");



    const deleteproduct = async (id: string) => {

        //   try {
        //       setLoadingMessageTitle("ກຳລັງລົບ");
        //       setLoadingMessage(true);
        //       const res = await DeleteproductService.Deleteproduct(id)
        //       if (res.status == 200) {
        //           alertSuccessV3("ລົບສຳເລັດ", 'success');
        //       }

        //   } catch (error) {

        //   } finally {
        //       setLoadingMessage(false);
        //   }

    }

    function handleModel(evens: string) {
        if (evens == 'add') {
            setisCheckModel(!isCheckModel)
            setisEven(true)
        } else {
            setisCheckModel(!isCheckModel)
        }
    }
    function handleEditModel(evens: string, product_Id: string, product_name: string) {
        if (evens == 'edit') {
            setProductId(product_Id)
            setproductName(product_name)

            setisCheckModel(!isCheckModel)
            setisEven(false)
        } else {
            setisCheckModel(!isCheckModel)
        }
    }

    // Ref to track IDs of already fetched items to avoid duplicates
    const fetchedItemIDs = useRef(new Set<string>());

    // Fetch products data from the API
    const fetchproductData = async (currentPage: number) => {
        try {
            const response = await GetallProductService.GetAllProduct("3", currentPage, 40); // Replace with your actual API URL

            if (response.status === "200") {
                setTotalItem(response.total_item);
                // Create an array of items to append without duplicates
                const newItems = response.data.filter((item: any) => {
                    if (fetchedItemIDs.current.has(item.product_ID)) {
                        return false; // Skip this item if it's already been added
                    } else {
                        fetchedItemIDs.current.add(item.product_ID); // Mark this ID as fetched
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
        }
    };

    // Load more items when reaching the bottom of the container
    const loadMoreItems = () => {
        if (totalItem === items.length) {
            return; // Stop loading more items if all items are fetched
        }
        setIsLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Increment page number for the next request
            fetchproductData(page); // Fetch next page data
            setIsLoading(false);
        }, 1200);
     
        
    };

    // Initial data fetch when the component mounts
    useEffect(() => {
        fetchproductData(page); // Fetch data for the first page
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
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {loadingMessage && <LoadingMessage text={loadingMessageTitle} />}
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">

                <div className="p-1">
                    <div className="flex justify-between w-full h-fit items-end border-b-2">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500 ">
                                <Link className="hover:text-orange-500 text-xs md:text-sm" to={""}>ຈັດການຮ້ານ</Link>
                                <Link className="text-xs md:text-sm" to={""}>|</Link>
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>ຈັດການໂຊນຮ້ານ</Link>

                            </div>
                            <div className="flex flex-col md:flex-row ">
                                <form className="flex items-center max-w-lg mx-auto mt-2 pr-0 md:pr-2">
                                    <select className="w-48 md:w-64 h-9 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0">
                                        <option className="" value="">--ເລືອກປະເພດອາຫານ--</option>
                                    </select>

                                </form>
                                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                    <input className="w-48 md:w-64 h-9 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
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
                            <button onClick={() => handleModel('add')} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ເພີ່ມໂຕະ</button>
                        </div>
                    </div>



                    <div
                        ref={containerRef}
                        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8  sm:gap-3 gap-4  overflow-auto p-3 w-full  h-[70vh] sm:h-[80vh]"
                    >
                        {items.map((item) => (
                            <div key={item.product_ID} className="w-full  h-48 sm:h-32 md:h-40 lg:h-40 sm:mb-0 mb-5">
                                <FoodItem
                                    productId={item.product_ID} 
                                    productName={item.product_name}
                                    productStatus={item.product_status}
                                    onEdit={(id, name) => handleEditModel("edit", id, name)} // Correctly pass the ID and name
                                    onDelete={() => deleteproduct(item.product_ID)} // Ensure correct deletion
                                />
                            </div>
                        ))}
                       {isLoading && <p className="flex justify-center text-center w-screen mt-2 "><Loading text="ໂຫລດຂໍ້ມູນ" /></p>}
                    </div>

                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute  flex justify-center items-center`}>
                <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
                    <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                        <p className="text-xl font-semibold text-orange-500">ເພີ່ມ</p>
                        <button onClick={() => handleModel('close')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal </span>
                        </button>

                    </div>
                    <div className="px-3 mt-3">
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2  font-medium text-gray-900 text-xs md:text-sm">Food Name <span className="text-red-600"> *</span></label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name..." />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="price" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Price<span className="text-red-600"> *</span></label>
                                    <input min={0} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="$2999" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 ">Category<span className="text-red-600"> *</span></label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  ">
                                        <option value=''>Select category</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 text-xs md:text-sm">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2  text-gray-500 text-xs md:text-sm">
                                                <span className="font-semibold">Click to upload</span>
                                                or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, JPG  (MAX. 204x240px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            {
                                isCheckEven ?

                                    <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center ">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        Add new food
                                    </button>
                                    :
                                    <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center ">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        Edit food
                                    </button>
                            }
                        </form>



                    </div>

                </div>
            </div>

        </div>
    )
}

export default ManageFood




