import Sidebar_Nav from "../components/sidebar-nav";
import ChartsMenuItem from "../components/charts/chartsMenuItem";
import ChartTopPro from "../components/charts/charttoppro";
import ChartTable from "../components/charts/chartTable";
import ChartOrder from "../components/charts/chartOrder";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/context";
import { dashboardService } from "../../services/dashboard/dashboardService";
import TopTableProduct from "./components/topTableProduct";
import DonutChartOrder from "../components/charts/donutChartOrder";

import { HiMenu } from "react-icons/hi";

function Dashboardv() {
  const NEXT_MONTH = new Date();
  const { data } = useAuth();
  const [topProductItem, setTopProductItem] = useState<any[]>([]);
  const [timeMenuItem, setTimeMenuItem] = useState<any[]>([]);
  const [timeOder, setTimeOrder] = useState<any[]>([]);
  const [timeTable, setTimeTable] = useState<any[]>([]);
  const [tableStatus, setTableStatus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [tablereserved, setTableReserved] = useState("0");
  const [tablebusy, setTableBusy] = useState("0");
  const [tableEmpty, setTableEmpty] = useState("0");
  const [totalOrder, setTotalOrder] = useState("0");
  const [totalOrderPaid, setTotalOrderPaid] = useState("0");
  const [totalOrderUnpaid, setTotalOrderUnpaid] = useState("0");
  const [totalQtyMunuItem, setTotalQtyMunuItem] = useState("0")

  NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: NEXT_MONTH,
  });

  const fetchData = async () => {
    let resId = String(data.restaurant_ID);
    const today = new Date().toISOString().split("T")[0];
    try {
      const res = await dashboardService.getDashboard(resId, today);
      if (res.status === "200") {
        setTopProductItem(res.topProduct || []);
        setTimeMenuItem(res.timeMenuItem || []);
        setTimeTable(res.timeTable || [])
        setTimeOrder(res.timeSale || 0);
        setTableStatus(res.tableStatus || []);
        setTotalQtyMunuItem(String(res.menuItem.qty || 0));

        setTotalOrderPaid(String(res.orderStatus[0].paid_count || 0));
        setTotalOrderUnpaid(String(res.orderStatus[0]?.unpaid_count || 0));
        if (res.tableStatus?.length > 0) {
          setTableReserved(String(res.tableStatus[0].reserved_count || 0));
          setTableBusy(String(res.tableStatus[0].busy_count || 0));
          setTableEmpty(String(res.tableStatus[0].empty_count || 0));
        }

        const totalOrder =
          (Number(res.orderStatus?.[0]?.paid_count || 0) +
            Number(res.orderStatus?.[0]?.unpaid_count || 0)) || 0;
        setTotalOrder(String(totalOrder));
      }
    } catch (error: any) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <Sidebar_Nav />
      <div className="p-1 sm:ml-64 flex-col">
        <div className="flex w-full h-16 justify-between items-center px-3">
          <p className="pt-3">Dashboard</p>
          <div className="w-60 md:w-72 bg-white z-30 text-orange-500">
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
        <div className="flex flex-col gap-2 px-3 2xl:flex-row mb-2">
          <div className="w-full h-40 rounded-md shadow-xl p-2 bg-slate-50">
            <p className="flex items-center gap-2">
              <HiMenu className="text-2xl" />
              <span className="font-semibold text-base">ລາຍການອາຫານ</span>
            </p>
            <div className="flex items-center mt-3">
              <div className="flex justify-center  w-28 border-r-2 border-gray-500">
                <span className="text-7xl text-orange-500 font-bold px-5">{totalQtyMunuItem}</span>
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-28">
                    <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    <p className="font-medium tes">ກຳລັງເຮັດ:</p>
                  </div>
                  {tablebusy} ເມນູ
                </div>
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-28">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <p className="font-medium">ເຮັດແລ້ວ:</p>
                  </div>
                  {tableEmpty} ເມນູ
                </div>
                <span className="w-full pt-1 pl-10 text-orange-500"> +10% from yesterday</span>
              </div>
            </div>
          </div>
          <div className="w-full h-40 rounded-md shadow-xl p-2 bg-slate-50">
            <p className="flex items-center gap-2">
              <HiMenu className="text-2xl" />
              <span className="font-semibold text-base">ລາຍການອໍເດີ</span>
            </p>
            <div className="flex items-center mt-3">
              <div className="flex justify-center  w-28 border-r-2 border-gray-500">
                <span className="text-7xl font-bold text-orange-500 px-5">{totalOrder}</span>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-28">
                    <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    <p className="font-medium">ຍັງບໍ່ຊຳລະເງີນ:</p>
                  </div>
                  {totalOrderUnpaid} ອໍເດີ
                </div>
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-28">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <p className="font-medium">ຊຳລະເງີນແລ້ວ:</p>
                  </div>
                  {totalOrderPaid} ອໍເດີ
                </div>
                <span className="w-full pt-2 pl-10 text-green-500"> +10% from yesterday</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-40 rounded-md shadow-xl p-2 bg-slate-50">
            <p className="flex items-center gap-2">
              <HiMenu className="text-2xl" />
              <span className="font-semibold text-base">ສະຖານະໂຕະ</span>
            </p>
            <div className="flex items-center">
              {tableStatus?.length > 0 ? (
                <DonutChartOrder datalist={tableStatus} />
              ) : (
                <div>ບໍ່ມີຂໍໍ້ມູນ</div>
              )}
              <div className="flex flex-col w-full pb-5 text-sm">
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-20">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                    <p className="font-medium">ໂຕະຈອງ:</p>
                  </div>
                  {tablereserved} ໂຕະ
                </div>
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-20">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <p className="font-medium">ໂຕະບໍ່ວາງ:</p>
                  </div>
                  {tablebusy} ໂຕະ
                </div>
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-20">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <p className="font-medium">ໂຕະວາງ:</p>
                  </div>
                  {tableEmpty} ໂຕະ
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col w-full h-40 rounded-md shadow-xl p-2 bg-slate-50">
            <p className="flex items-center gap-2">
              <HiMenu className="text-2xl" />
              <span className="font-semibold text-base">ສະຖານະໂຕະ</span>
            </p>
            <div className="flex items-center">
              <DonutChartOrder datalist={tableStatus} />
              <div className="flex flex-col w-full pb-5 text-sm">
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-20">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                    <p className="font-medium">ໂຕະຈອງ:</p>
                  </div>
                  {tablereserved} ໂຕະ
                </div>
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-20">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <p className="font-medium">ໂຕະບໍ່ວ່າງ:</p>
                  </div>
                  {tablebusy} ໂຕະ
                </div>
                <div className="flex justify-around gap-2 w-full font-medium">
                  <div className="flex items-center justify-start gap-2 w-20">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <p className="font-medium">ໂຕະວ່າງ:</p>
                  </div>
                  {tableEmpty} ໂຕະ
                </div>

              </div>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col 2xl:flex-row mx-4 bg-white rounded-xl shadow-md">
          <div className="w-full h-fit min-h-80 flex p-2 flex-col justify-between bg-white">
            <ChartsMenuItem datalist={timeMenuItem} />

          </div>
          <div className="bg-white 2xl:w-[800px] w-full p-4">
          <ChartTopPro datalist={topProductItem} />
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-3 m-3">
          <div className="w-full h-fit flex flex-col justify-between bg-white shadow-md">
            <ChartTable datalist={timeTable} />
          </div>
          <div className="bg-white shadow-md w-full h-fit">
            <ChartOrder datalist={timeOder} />
          </div>
          <div className="w-full h-[300px]">
            <TopTableProduct datalist={topProductItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardv;
