import { Link } from "react-router-dom"
import Sidebar_Nav from "../../components/sidebar-nav"
import FoodItem from "./food-item"
import { useState, useEffect, useRef } from "react";
import { alertSuccessV3 } from "../../../utils/alert";
import { GetallFoodsService } from "../../../services/foods/get-all-food";
import LoadingMessage from "../../../utils/loadingMessage";
import { DeleteFoodService } from "../../../services/foods/delete-food";
import CreateFoods from "./create-food";
import EditFoods from "./edit-food";
import { useAuth } from "../../../context/context";
import Loading from "../../../utils/Loading";
import { generalErrors } from "../../../utils/error";

function ManageFood() {
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isCheckModel, setisCheckModel] = useState(false)
    const [isCheckedPage, setIsCheckedPage] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [loadingMessageTitle, setLoadingMessageTitle] = useState("");
    const [foodId, setfoodId] = useState("");
    const { data,token } = useAuth();
    const [isMessage, setIsMessage] = useState(true);



    const deletefood = async (id: string) => {

        try {
            setLoadingMessageTitle("ກຳລັງລົບ");
            setLoadingMessage(true);
            const response = await DeleteFoodService.DeleteFood(id,token||"")
            if (response.status == 200) {
                alertSuccessV3("ລົບສຳເລັດ", 'success');
            }

        } catch (error: any) {
            generalErrors(error);
        }
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
            setIsCheckedPage(false)
            setfoodId(id)
        } else {
            setisCheckModel(!isCheckModel)
        }
    }

    const fetchedItemIDs = useRef(new Set<string>());
    const fetchfoodData = async (currentPage: number) => {
        try {
            setIsMessage(true);
            let resId = String(data.restaurant_ID);
            const response = await GetallFoodsService.GetAllFoods(resId, currentPage, 40,token||"");
            if (response.status === "200") {
                setTotalItem(response.total_item);
                const newItems = response.data.filter((item: any) => {
                    if (fetchedItemIDs.current.has(item.food_ID)) {
                        return false;
                    } else {
                        fetchedItemIDs.current.add(item.food_ID);
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
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1);
            fetchfoodData(page);
            setIsLoading(false);
        }, 1200);


    };
    useEffect(() => {
        fetchfoodData(page);
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

    }, [isMessage])

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
                            <button onClick={() => handleModel('add')} className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-full text-white text-xs md:text-sm">ເພີ່ມເມນູ</button>
                        </div>
                    </div>



                    <div
  ref={containerRef}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 sm:gap-3 gap-4 overflow-auto p-3 w-full h-[70vh] sm:h-fit box-border"
>
  {items.length > 0 ? (
    items.map((item) => (
      <div key={item.food_ID} className="w-full h-48 sm:h-32 md:h-40 lg:h-40 sm:mb-8 mb-5">
        <FoodItem
          foodId={item.food_ID}
          foodName={item.food_name}
          price={item.price}
          foodImg={item.food_img}
          foodStatus={item.food_status}
          onEdit={(id) => handleEditModel("edit", id)}
          onDelete={() => deletefood(item.food_ID)}
        />
      </div>
    ))
  ) : (
    <div className="col-span-full flex justify-center items-center h-40 text-gray-500">
      {isMessage ? (
        <Loading text="ກຳລັງໂຫລດ" />
      ) : (
        "No data available."
      )}
    </div>
  )}
  {isLoading && (
    <p className="text-center w-full mt-2">
      <Loading text="ໂຫລດຂໍ້ມູນ" />
    </p>
  )}
</div>


                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'}  h-screen bg-black/10  absolute z-50 flex justify-center items-center`}>


                {
                    isCheckedPage ? (
                        <CreateFoods handleModel={() => handleModel('add')} />
                    ) :
                        (
                            <EditFoods handleModel={() => handleModel("edit")} food_ID={foodId} />
                        )
                }
            </div>

        </div>
    )
}

export default ManageFood




