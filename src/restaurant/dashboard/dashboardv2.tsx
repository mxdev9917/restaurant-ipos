import Sidebar_Nav from "../components/sidebar-nav";
import ChartsMenuItem from "../components/charts/chartsMenuItem";
import ChartTopPro from "../components/charts/charttoppro";
// import ChartKichen from "../components/charts/chartTable";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/context";
import { DashboardService } from "../../services/dashboard/dashboardService";
import TopTableProduct from "./components/topTableProduct";








function Dashboardv() {
  const NEXT_MONTH = new Date();
  const { data } = useAuth();
  const [topProductItem, setTopProductItem] = useState<any[]>([]);
  const[timeMenuItem,setTimeMenuItem] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // const[TotalSalesDay,setTotalSalesDay]=useState("0");
  const[TotalQtyDay,setTotalQtyDay]=useState("0");
  NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: NEXT_MONTH,
  });

  const fetchData = async () => {
    let resId = String(data.restaurant_ID);
    const today = new Date().toISOString().split("T")[0];
    try {
      const res = await DashboardService.getDashboard(resId, today);
      if (res.status === "200") {
        setTopProductItem(res.topProduct);
        setTimeMenuItem(res.timeMenuItem);
        // let ts=Number(res.totalSale[0].total_price);
        // setTotalSalesDay(String(ts));
        setTotalQtyDay(res.totalSale[0].total_quantity);
      
        
      } 
    } catch (error:any) {
     
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data.restaurant_ID]);  // Only re-run when restaurant_ID changes

  useEffect(() => {
  }, [topProductItem,timeMenuItem]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="flex flex-col">
      
      <Sidebar_Nav />

      <div className="p-1 sm:ml-64 flex-col">
        <div className=" flex  flex-col 2xl:flex-row">
          <div className=" w-full h-fit  flex p-2 flex-col justify-between mr-2.5">
            <div className="flex w-full h-16 justify-between items-center">
              <p className="pt-3">Dashboard</p>
              <div className="w-60 md:w-72  bg-white z-30 text-orange-500">
                <Datepicker
                  primaryColor={"orange"}
                  value={value}
                  onChange={(newValue) =>
                    setValue({
                      startDate: newValue?.startDate ?? new Date(),
                      endDate: newValue?.endDate ?? new Date(),
                    })
                  }
                  showShortcuts={true}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-x-1">
              <div className="flex flex-row lg:flex-col xl:flex-row w-full">
                <div className=" w-full h-fit m-1 bg-white shadow-md  p-3">
                  <div className="flex items-end">
                    <svg
                      className="w-8 h-8 text-green-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                      />
                    </svg>
                    <p className="text-sm  md:text-base">ລາຍໄດ້ຕໍ່ມື້</p>
                  </div>
                  <span className="text-[23px] text-gray-600 font-bold">
                    {/* {TotalSalesDay} */}
                  </span>

                  <p className="text-xs text-green-500">+10% from yesterday</p>
                </div>
                <div className=" w-full  h-fit m-1 bg-white shadow-md  p-3">
                  <div className="flex items-end">
                    <svg
                      className="w-8 h-8 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                      />
                    </svg>
                    <p className="text-sm md:text-base">ອໍເດີຕໍ່ມື້</p>
                  </div>
                  <span className="text-[23px] text-gray-600 font-bold">
                    {TotalQtyDay}
                  </span>
                  <p className="text-xs text-green-500">+10% from yesterday</p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col xl:flex-row w-full ">
                <div className=" w-full h-fit m-1 bg-white shadow-md  p-3">
                  <div className="flex items-end">
                    <svg
                      className="w-8 h-8 text-orange-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                      />
                    </svg>
                    <p className="text-sm md:text-base">Total Sales</p>
                  </div>
                  <span className="text-[23px] text-gray-600 font-bold">
                    50.000.000
                  </span>

                  <p className="text-xs text-orange-500">+10% from yesterday</p>
                </div>
                <div className=" w-full  h-fit m-1 bg-white shadow-md  p-3">
                  <div className="flex items-end">
                    <svg
                      className="w-8 h-8 text-orange-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                      />
                    </svg>
                    <p className="text-sm md:text-base">Total Order</p>
                  </div>
                  <span className="text-[23px] text-gray-600 font-bold">
                    500{" "}
                  </span>
                  <p className="text-xs text-orange-500">+10% from yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex  flex-col 2xl:flex-row mx-4 bg-white   rounded-xl shadow-md">
          <div className=" w-full h-fit min-h-80 flex p-2 flex-col justify-between  bg-white ">
            <ChartsMenuItem datalist={timeMenuItem}/>
          </div>
          <div className="bg-white 2xl:w-[800px] w-full p-4">
            <ChartTopPro datalist={topProductItem} />
          </div>
        </div>
        <div className=" flex  flex-col 2xl:flex-row gap-3  m-3">
          <div className=" w-full h-fit flex flex-col justify-between  bg-white shadow-md">
            {/* <ChartKichen /> */}
          </div>
          <div className="bg-white shadow-md w-full h-fit">
            {/* <ChartKichen /> */}
          </div>
          <div className=" w-full h-[300px]">
          <TopTableProduct datalist={topProductItem}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardv;
