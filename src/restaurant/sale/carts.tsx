import Nav from "../components/nav";
import FoodItemSale from "./components/fooditem";
import CategoryItem from "./components/categoryitem";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "flowbite-react";
import { FiPrinter } from 'react-icons/fi';
import { GetallcategoryByStatusService } from "../../services/categories/get-by-statuse-category";
import { useAuth } from "../../context/context";
import { HiArrowsExpand } from "react-icons/hi";
import { generalErrors } from "../../utils/error";
import { GetFoodByStatusService } from "../../services/foods/get-by-status-food";
import { cancelOrderService } from "../../services/sale/cancel-order";
import MenuAddFood from "./components/menuaddfood";
import { GetAllFoodByCategoryIdService } from "../../services/sale/get-foods-by-category-id-oder";
import { useNavigate, useParams } from "react-router-dom";
import { alertconfirm, alertSuccessV3 } from "../../utils/alert";
import { alertSuccess } from "../../utils/alert";
import { GetMenuItemService } from "../../services/sale/get-menu-item";
import { HiOutlineTrash } from "react-icons/hi";
import { DeleteMenuItemService } from "../../services/sale/delete-menu-item";
import { UpdateOrderSuccessService } from "../../services/sale/edit-order-success";
import LoadingMessage from "../../utils/loadingMessage";
import Tableincluded from "./components/table-included";
import Loading from "../../utils/Loading";
import { getByStatusRateService } from "../../services/setting/rates/getByStatusRateService";

function Carts() {
  const [PrinterModel, setPrinterleModel] = useState(false);
  const [handleModel, setHandleModel] = useState(true);
  const [foodName, setFoodName] = useState("");
  const navigate = useNavigate();
  const [titlePrinterModel, setTitlePrinterModel] = useState("")
  const [isCheckEvenMenu, setIsCheckEvenMenu] = useState(false)
  const [isCheckModelEvenMenu, setIsCheckModelEvenMenu] = useState(false)
  const [itemsCategory, setItemsCategory] = useState<any[]>([]);
  const [foodItemsTable, setFoodItemsTable] = useState<any[]>([]);
  const { data } = useAuth();
  const [items, setItems] = useState<any[]>([]);
  const [rateItems, setrateItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(0);
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();
  const tableID = String(id);
  const [food_ID, setFood_ID] = useState("")
  const [Price, setPrice] = useState("0");
  const [isBTNSuccess, setIsBTNSuccess] = useState(true);
  const [vat, setVat] = useState("0");
  const [totalPrice, setTotalPrice] = useState("0")
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [loadingMessageText, setLoadingMessageTesxt] = useState("");
  const [isMessage, setIsMessage] = useState(true);
  const [tableName,setTableName]=useState("")

  const handleOrderSuccuss = async () => {
    try {
      setLoadingMessage(true);
      setLoadingMessageTesxt("ກຳລັງເຊັກບີນ")
      const res = await UpdateOrderSuccessService.UpdateOrderSuccess(tableID, totalPrice);
      if (res.status === "200") {
        alertSuccess(navigate, '/sale', 'ເຊັກບີນສຳເລັດ', 'success');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      generalErrors(error)
    } finally {
      setLoadingMessage(false);
      setLoadingMessageTesxt("")
    }
  }
  const handleDelete = async (menu_items_ID: string) => {
    try {
      setLoadingMessage(true);
      setLoadingMessageTesxt("ກຳລັງລົບລາຍການເມນູ")
      const res = await DeleteMenuItemService.DeleteMenuItem(menu_items_ID)
      if (res.status === "200") {
        alertSuccessV3("ລົບລາຍການເມນູສຳເລັດ", "success");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      generalErrors(error)
    } finally {
      setLoadingMessage(false);
      setLoadingMessageTesxt("")
    }
  }
  const fetchFoodTableItem = async () => {
    try {
      const res = await GetMenuItemService.MenuItem(tableID);
      setFoodItemsTable(res.data);
      setTableName(res.table_name);
      setPrice(res.totalPrice);
      let price = Number(res.totalPrice);
      let newVat = (price / 100) * 10;
      let newTotalPrice = newVat + price;
      setVat(String(newVat));
      setTotalPrice(String(newTotalPrice));
      if (res.data.length > 0) {
        setIsBTNSuccess(false);
      } else {
        setIsBTNSuccess(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      generalErrors(error)
    }
  }
  const hadleCancelOrder = async () => {
    try {
      setLoadingMessage(true);
      setLoadingMessageTesxt("ກຳລັງຍົກເລີກເມນູ")
      const res = await cancelOrderService.cancelOrder(tableID);
      if (res.status === "200") {
        alertSuccess(navigate, '/sale', 'ຍົກເລີກເມນູສຳເລັດ', 'success');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      generalErrors(error);
    } finally {
      setLoadingMessage(false);
      setLoadingMessageTesxt("")
    }
  }
  function handleTableInclude() {
    setIsCheckModelEvenMenu(false)
    setHandleModel(!handleModel);
  }
  function isCheckMenu() {
    setIsCheckEvenMenu(!isCheckEvenMenu)

  }
  function handlePrinterModel(value: number) {
    if (value == 1) {
      setTitlePrinterModel("ປີ້ນເຕີເຄົ້າເຕີ")
      setPrinterleModel(true)
    } else if (value == 2) {
      setTitlePrinterModel("ປີ້ນເຕີຄົວ")
      setPrinterleModel(true)
    } else {
      setPrinterleModel(!PrinterModel)
    }
  }
  function handleClick(id: string, name: string) {
    setHandleModel(!handleModel);;
    setFoodName(name);
    setFood_ID(id)


    setIsCheckModelEvenMenu(true)
  }
  function handleClickCloseModle() {
    setHandleModel(!handleModel);
  }
  const fetchData = async () => {
    let resId = String(data.restaurant_ID);

    try {
      setIsMessage(true)
      const res = await GetallcategoryByStatusService.GetAllCategory(resId)
      setItemsCategory(res.data);

    } catch (error: any) {
      generalErrors(error)
    } finally {
      setIsMessage(false)
    }
  }

  const fetchedItemIDs = useRef(new Set<string>());
  const fetchfoodData = async (currentPage: number) => {
    setIsMessage(true)
    try {
      let resId = String(data.restaurant_ID);
      const res = await GetFoodByStatusService.GetFoodService(resId, currentPage, 40);
      if (res.status === "200") {
        setTotalItem(res.total_item);
        const newItems = res.data.filter((item: any) => {
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
        console.error("Failed to fetch data:", res.message);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error);
      generalErrors(error)
    } finally {
      setIsMessage(false)
    }
  };

  useEffect(() => {
    if (isMessage) {
      setTimeout(() => {
        setIsMessage(false);
      }, 6000);
    }

  }, [isMessage])

  const handleCategory = async (id: string) => {
    try {

      const res = await GetAllFoodByCategoryIdService.GetAllFoodByCategoryId(id);
      setItems([]);
      setItems(res.data);
      setTotalItem(res.total_item);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      generalErrors(error);
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
  const fetchRateByStatus = async () => {
    try {
      let resId = String(data.restaurant_ID);
      const res = await getByStatusRateService.RateService(resId);

      if (res.status === "200") {
        let data = res.data;
        let updatedRates = [];

        for (const rateItem of data) {
          let rate = Number(rateItem.rate);
          let newTotalPrice = Number(totalPrice);
          let newRate = Math.floor(newTotalPrice / rate);



          // Collect data without overwriting
          updatedRates.push({
            rate_ID: rateItem.rate_ID,
            currency: rateItem.currency,
            newRate: newRate,
          });
        }

        // Update state once after looping
        setrateItems(updatedRates);
      }
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };
  useEffect(() => {

    fetchRateByStatus();
  }, [rateItems])
  useEffect(() => {
    fetchData();
    fetchFoodTableItem();

  }, [])
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
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsCheckEvenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on initial render to check screen size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col overflow-y-hidden max-w-[100vw] max-h-[100vh] ">
      {loadingMessage && <LoadingMessage text={loadingMessageText} />}
      <Nav isMenu={true} handelMenu={isCheckMenu} />
      <div className="flex gap-2 ">
        <div className="flex flex-col w-full xl:max-w-[calc(100%-24rem)] h-screen ">
          <div className="w-full h-20  flex gap-3  items-center border-b-2 mb-2">
            <div className="ml-3">
              <button
                onClick={() => (location.reload())}
                className="flex items-center sm:w-32 w-fit h-12 sm:h-14 bg-orange-500 text-white p-1.5 mt-2 rounded-lg right-1 focus:ring-1 focus:ring-orange-500">
                <HiArrowsExpand className="text-3xl " />
                <p className="sm:block hidden"> ເມເນູທັ້ງໝົດ</p>
              </button>
            </div>
            <div className="w-full flex gap-3 overflow-x-auto snap-x">
              {itemsCategory.map((item) => (
                <div key={item.category_ID} className="py-1 mt-2">
                  <CategoryItem
                    categoryId={item.category_ID}
                    categoryName={item.category}
                    categoryImg={item.category_image}
                    handleCategory={handleCategory}
                  />
                </div>
              ))}
            </div>

          </div>
          <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8  overflow-auto p-3 w-full h-fit"
          >
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.food_ID} className="p-1 w-full">
                  <div className="w-full h-28 sm:h-32 md:h-52 lg:h-40 ">
                    <FoodItemSale
                      foodId={item.food_ID}
                      foodName={item.food_name}
                      foodImg={item.food_img}
                      onClick={() => handleClick(item.food_ID, item.food_name)}
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

        <div className={`${!handleModel ? "block" : "hidden"} bg-black/30 w-full h-[93vh] absolute flex justify-center items-center `}>
          <div className={`${isCheckModelEvenMenu == false ? "block" : "hidden"} flex flex-col w-[290px] sm:w-[380px] h-fit bg-white rounded-lg shadow-lg p-3`}>
            <Tableincluded table_ID={tableID} handleClickCloseModle={handleClickCloseModle} />
          </div>
          <div className={`${isCheckModelEvenMenu == true ? "block" : "hidden"} flex flex-col w-80 h-fit  rounded-lg shadow-lg `}>
            <MenuAddFood tableID={tableID} foodID={food_ID} foodName={foodName} handleClickCloseModle={handleClickCloseModle} isCheckModelEvenMenu />
          </div>
        </div>
        <div className={`${isCheckEvenMenu ? 'flex absolute' : 'hidden'}  bg-white w-[375px] h-[91vh] sm:h-[93vh]  max-w-[550px] min-w-[375px] xl:flex  shadow-lg flex-col justify-between px-3`}>


          <div className="flex justify-between w-full">
            <div></div>
            <p className="text-xl sm:text-2xl md:text-3xl py-3 text-orange-500 font-semibold flex justify-center">
              ລາຍການອາຫານ {tableName}
            </p>
            <Dropdown label={<FiPrinter className="text-xl sm:text-2xl" />} inline>
              <Dropdown.Item onClick={() => handlePrinterModel(1)}>ປີ້ນເຕີເຄົາເຕີ</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePrinterModel(2)}>ປີ້ນເຕີຄົວ</Dropdown.Item>
            </Dropdown>
          </div>


          <div className="w-full h-full overflow-hidden">

            <div className="max-h-full overflow-y-auto">
              <table className="w-full border-collapse min-w-max">
                <thead>
                  <tr className="text-gray-700 bg-gray-100 h-12 text-sm md:text-base">
                    <th>ຊື່ເມນູອາຫານ</th>
                    <th>ຈຳນວນ</th>
                    <th>ລາຄາ</th>
                    <th>ລວມ</th>
                    <th>ເມນູ</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-800 text-[14px]">
                  {foodItemsTable.map((item) => (
                    <tr key={item.food_ID} className="border-y">
                      <td className="pl-3">{item.food_name}</td>
                      <td className="p-2">{item.quantity}</td>
                      <td className="p-2">{item.price}</td>
                      <td className="p-2">{Number(item.quantity) * Number(item.price)}</td>
                      <td className="p-2 md:p-2 flex md:table-cell justify-center">
                        <button
                          onClick={() =>
                            alertconfirm(
                              () => handleDelete(item.menu_items_ID),
                              `ຕ້ອງການຍົກເລີກລາຍການນີ້ບໍ່ ?`,
                              "question"
                            )
                          }
                          className="hover:bg-slate-100 py-1.5 rounded-full w-8 sm:w-10 flex items-center justify-center"
                        >
                          <HiOutlineTrash className="text-lg sm:text-xl md:text-2xl text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit  text-sm  ">
            <p className="text-lg sm:text-xl font-semibold mb-2">ລວມບີນ</p>
            <div className="flex justify-between my-1">
              <p>ລາຄາ</p>
              <p>{Price} KIP</p>

            </div>
            <div className="flex justify-between my-1 text-sm">
              <p>Vat 10%</p>
              <p>{vat} KIP</p>
            </div>
            <div className="flex justify-between  text-sm border-t-2 pt-2">
              <p className="font-semibold">ລາຄາລວມ:</p>
              <p className="text-orange-500">{totalPrice} KIP</p>
            </div>
            {
              rateItems.map((item) => (
                <div key={item.rate_ID} className="flex justify-between text-sm  py-1">
                  <p className="">{item.currency}:</p>
                  <p className="text-orange-500">{item.newRate} {item.currency}</p>
                </div>
              ))
            }



            <div className="w-full  flex flex-col sm:flex-row sm:justify-end py-5 space-y-2 sm:space-y-0 sm:space-x-2 ">
              <button
                type="button"
                onClick={() => alertconfirm(
                  () => handleOrderSuccuss(),
                  `ຕ້ອງການເຊັກບີນອໍເດີນີ້ບໍ່ ?`,
                  "question"
                )}
                disabled={isBTNSuccess}
                className={`text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${isBTNSuccess ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                ໄລ່ເງີນ
              </button>
              <button
                onClick={handleTableInclude}
                type="button"
                className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                ລວມໂຕະ
              </button>
              <button
                type="button"
                onClick={() => alertconfirm(
                  () => hadleCancelOrder(),
                  `ຕ້ອງການຍົກເລີກອໍເດີນີ້ບໍ່ ?`,
                  "question"
                )}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                ຍົກເລິກ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen ${!PrinterModel ? "hidden" : "block"} h-screen bg-black/10  absolute  flex justify-center items-center`}>
        <div className="bg-white w-96 rounded-lg">
          <div id="separator-sidebar" className="flex justify-between p-3 border-b-2 drawer">
            <p className="text-orange-500">{titlePrinterModel}</p>
            <button data-drawer-close="separator-sidebar" onClick={() => handlePrinterModel(0)} type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal </span>
            </button>
          </div>
          <div className="w-full p-3 flex flex-col items-start text-sm">
            <button className="p-2 my-1 w-full hover:bg-orange-500 flex items-end rounded-lg focus:bg-orange-500">
              <svg className="w-6 h-6  text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
              </svg>
              <p className="pl-2">ປີ້ນເຕີຄົວ</p>
            </button>
            <button className="p-2 my-1 w-full hover:bg-orange-500 flex items-end rounded-lg focus:bg-orange-500">
              <svg className="w-6 h-6  text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
              </svg>
              <p className="pl-2">ປີ້ນເຕີຄົວ</p>
            </button>
          </div>
          <div className="flex justify-end p-3 border-t-2">
            <button className="flex justify-center items-center text-white bg-green-500 p-2 rounded-lg ">ບັກທືກ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
