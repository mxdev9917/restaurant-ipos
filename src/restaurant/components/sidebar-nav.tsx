import { Sidebar } from "flowbite-react";
import { HiOutlineMinusSm, HiOutlinePlusSm, HiOutlineOfficeBuilding, HiCog, HiCubeTransparent, HiClipboardList } from "react-icons/hi"; //HiOutlineBookOpen
import { FaKitchenSet } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa"; //FaFire
import { FaUsersGear } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Nav from "./nav";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Sidebar_Nav() {
  const [translate, setTranslate] = useState(true);
  const { t } = useTranslation();
  function isCheckMenu() {
    setTranslate(!translate);
  }

  return (
    <>
      <Nav handelMenu={isCheckMenu} isMenu={true} />
      <Sidebar className={`fixed mt-2 z-40 w-64 h-screen transition-transform ${translate ? '-translate-x-full' : ''} sm:translate-x-0`} aria-label="Sidebar">
        <Sidebar.Items className="h-full px-3 py-5 overflow-y-auto bg-gray-50 ">
          <Sidebar.ItemGroup className="space-y-3 font-medium">
            <Sidebar.Item href="#dashboard" icon={FaChartBar}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#manageuser" icon={FaUsersGear}>
              {t("staff")}
            </Sidebar.Item>
            <Sidebar.Item href="#sale" icon={HiClipboardList}>
              {t("sale")}
            </Sidebar.Item>
            <Sidebar.Item href="#manage/kitchen" icon={FaKitchenSet}>
              {t("kichen")}
            </Sidebar.Item>
            <Sidebar.Collapse
              icon={HiOutlineOfficeBuilding}
              label={t("restaurant")}
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />;
              }}
            >
              <Sidebar.Item href="#managefood">{t("menu")}</Sidebar.Item>
              <Sidebar.Item href="#managecategory">{t("category")}</Sidebar.Item>
              <Sidebar.Item href="#managetable"> {t("table")}</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={TbReportAnalytics}
              label={t("report")}
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />;
              }}
            >
              <Sidebar.Item href="#salereport">ຍອດຂາຍ</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              icon={HiCog}
              label={t("setting")}
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />;
              }}
            >
              <Sidebar.Item href="#setting/bill">{t("bilSetting")}</Sidebar.Item>
              <Sidebar.Item href="#setting/printer">{t("printerSetting")}</Sidebar.Item>
              <Sidebar.Item href="#/setting/rate">{t("rateSetting")}</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
            {/* <Sidebar.Item href="#" icon={() => <FaFire className="text-orange-500 text-2xl " />}>
              Upgrade to Pro
            </Sidebar.Item> */}
            {/* <Sidebar.Item href="#manual" icon={HiOutlineBookOpen}>
              ຄູ່ມືການໃຊ້ງານ
            </Sidebar.Item> */}
            <Sidebar.Item href="#help" icon={HiCubeTransparent}>
              {t("help")}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default Sidebar_Nav;
