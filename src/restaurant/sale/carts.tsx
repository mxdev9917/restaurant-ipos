import Nav from "../components/nav";
import CartsItem from "./components/carditem";
import FoodItemSale from "./components/fooditem";
import CategoryItem from "./components/categoryitem";
import { useEffect, useRef, useState } from "react";
// import TableItemSale from "./components/tableitemsale";
import { Dropdown } from "flowbite-react";
import { FiPrinter } from 'react-icons/fi';
import { GetallcategoryByStatusService } from "../../services/categories/getbystatuse-category";
import { useAuth } from "../../context/context";
import { HiArrowsExpand } from "react-icons/hi";
import { generalErrors } from "../../utils/error";
import { GetFoodByStatusService } from "../../services/foods/getbystatus-food";
import Loading from "../../utils/Loading";
import MenuAddFood from "./components/menuaddfood";

function Carts() {

  const [PrinterModel, setPrinterleModel] = useState(false);
  const [handleModel, setHandleModel] = useState(true);
  const [foodName, setFoodName] = useState("");

  const [titlePrinterModel, setTitlePrinterModel] = useState("")
  const [isCheckEvenMenu, setIsCheckEvenMenu] = useState(false)
  const [isCheckModelEvenMenu, setIsCheckModelEvenMenu] = useState(false)
  const [itemsCategory, setItemsCategory] = useState<any[]>([]);
  const { data } = useAuth();
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(0);
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);



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
  function handleClick(name: string) {
    setHandleModel(!handleModel);;
    setFoodName(name);
    setIsCheckModelEvenMenu(true)
  }
  function handleClickCloseModle() {
    setHandleModel(!handleModel);
  }
 

  const fetchData = async () => {
    let resId = String(data.restaurant_ID);

    try {
      const res = await GetallcategoryByStatusService.GetAllCategory(resId)
      setItemsCategory(res.data);

    } catch (error: any) {
      generalErrors(error)
    }
  }

  const fetchedItemIDs = useRef(new Set<string>());
  const fetchfoodData = async (currentPage: number) => {
    try {
      let resId = String(data.restaurant_ID);
      const res = await GetFoodByStatusService.GetFoodService(resId, currentPage, 40);
      if (res.status === "200") {
        console.log(res.data);

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
    fetchData();
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

  return (
    <div className="flex flex-col overflow-y-hidden max-w-[100vw] max-h-[100vh] ">
      <Nav handelMenu={isCheckMenu} />
      <div className="flex gap-2">
        <div className="flex flex-col w-full xl:max-w-[calc(100%-24rem)] h-screen ">
          <div className="w-full h-20  flex gap-3  items-center border-b-2 mb-2">
            <div className="ml-3">
              <button className="flex items-center w-32 h-12 sm:h-14 bg-orange-500 text-white p-1.5 mt-2 rounded-lg right-1 focus:ring-1 focus:ring-orange-500">
                <HiArrowsExpand className="text-3xl " />
                <p> ເມເນູທັ້ງໝົດ</p>
              </button>
            </div>
            <div className="w-full flex gap-3 overflow-x-auto snap-x  ">
              {itemsCategory.map((item) => (
                <div key={item.category_ID} className="py-1 mt-2">
                  <CategoryItem categoryId={item.category_ID} categoryName={item.category} categoryImg={item.category_image} />
                </div>
              ))}
            </div>

          </div>
          <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 overflow-y-auto pl-2"
          >
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.food_ID} className="p-1 w-full">
                  <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56">
                    <FoodItemSale foodId={item.food_ID} foodName={item.food_name} onClick={() => handleClick(item.food_name)} />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex justify-center items-center h-40 text-gray-500">
                No data available.
              </div>
            )}

            {isLoading && (
              <p className="text-center w-full mt-2">
                <Loading text="ໂຫລດຂໍ້ມູນ" />
              </p>
            )}
          </div>

        </div>
        {/* Modal */}
        <div className={`${!handleModel ? "block" : "hidden"} bg-black/30 w-full h-full absolute flex justify-center items-center`}>

          <div className={`${isCheckModelEvenMenu == false ? "block" : "hidden"} flex flex-col w-[290px] sm:w-[380px] h-fit bg-white rounded-lg shadow-lg p-3`}>
            <div className="flex justify-between items-center border-b-2">
              <p className="text-xl pb-2 text-gray-700 font-semibold">
                ເລືອກໂຕະ
              </p>
              <button
                onClick={handleClickCloseModle}
                className=" text-red-500"
              >
                ຍົກເລິກ
              </button>
            </div>

            <div className="h-96  flex flex-wrap  place-items-stretch overflow-y-scroll">
              {/* {items.map((_, index) => (
                <div key={index} className="m-1 w-20  h-20" >
                  <TableItemSale />
                </div>
              ))} */}
            </div>
            <div className="flex justify-end pt-2 border-t-2">
              <button className="flex justify-center items-center text-white bg-green-500 p-2 rounded-lg ">ບັກທືກ</button>
            </div>
          </div>
          <div className={`${isCheckModelEvenMenu == true ? "block" : "hidden"} flex flex-col w-80 h-fit  rounded-lg shadow-lg `}>
            <MenuAddFood foodName={foodName} handleClickCloseModle={handleClickCloseModle} isCheckModelEvenMenu/>
          </div>
        </div>
        <div className={`${isCheckEvenMenu ? 'flex absolute h-[85vh]' : 'hidden'} bg-white min-w-96 xl:flex h-[100vh] shadow-lg flex-col justify-between  px-3`}>
          <div className="flex  justify-between">
            <div></div>
            <p className="text-3xl py-3 text-orange-500 font-semibold flex justify-center">
              ລາຍການອາຫານ ໂຕະ1
            </p>
            <Dropdown label={<FiPrinter className="text-2xl" />} inline>
              <Dropdown.Item onClick={() => handlePrinterModel(1)}>ປີ້ນເຕີເຄົາເຕີ</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePrinterModel(2)}>ປີ້ນເຕີຄົວ</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex text-sm  justify-between w-full bg-slate-100 py-3 pl-2">
            <p className="w-full">ຊື່ເມນູອາຫານ</p>
            <p className=" w-12 flex justify-center">ຈຳນວນ</p>
            <p className="w-52 flex justify-center">ລາຄາ</p>
            <p className=" w-16 flex justify-center">ເມນູ</p>
          </div>
          <div className="h-full overflow-y-auto text-sm ">
            {itemsCategory.map((_, index) => (
              <div key={index}>
                <CartsItem />
              </div>
            ))}
          </div>
          <div className="  flex  flex-col text-sm pb-14">
            <p className="text-xl font-semibold mb-2">ລວມບີນ</p>
            <div className="flex justify-between my-1">
              <p>ລາຄາ</p>
              <p>$6,592.00</p>
            </div>
            <div className="flex justify-between my-1 text-sm">
              <p>Vat 10%</p>
              <p>$6,5</p>
            </div>
            <div className="flex justify-between my-1 text-sm border-y-2 py-2">
              <p className="font-semibold">ລາຄາລວມ</p>
              <p className="text-orange-500">$6,592.00</p>
            </div>

            <div className="w-full flex justify-end py-5">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
              >
                ໄລ່ເງີນ
              </button>
              <button
                onClick={handleTableInclude}
                type="button"
                className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
              >
                ລວມໂຕະ
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
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
              <p className="pl-2"> ປີ້ນເຕີຄົວ</p>
            </button>
            <button className="p-2 my-1 w-full hover:bg-orange-500 flex items-end rounded-lg focus:bg-orange-500">
              <svg className="w-6 h-6  text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
              </svg>
              <p className="pl-2"> ປີ້ນເຕີຄົວ</p>
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
