
import {
  
    
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    
    HiUsers,
    HiOutlineOfficeBuilding,
    HiCog,
    HiOutlineFire,
    HiOutlineBookOpen,
    HiCubeTransparent ,
    HiClipboardList 
} from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaFire,FaChartBar } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import Nav from "./nav"
function Sidebar_Nav() {
    function isCheckMenu() { }
    return (
        <>
            <Nav handelMenu={isCheckMenu} isCheck={false} />
            <Sidebar id="separator-sidebar" className="fixed  mt-4 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <Sidebar.Items className="h-full px-3 py-5 overflow-y-auto bg-gray-50 ">
                    <Sidebar.ItemGroup className="space-y-3 font-medium">
                    <Sidebar.Item href="#dashboard" icon={FaChartBar}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#manageuser" icon={FaUsersGear}>
                            User
                        </Sidebar.Item>
                        <Sidebar.Item href="#sale" icon={HiClipboardList}>
                            ຂາຍ
                        </Sidebar.Item>
                         <Sidebar.Collapse
                            icon={HiOutlineOfficeBuilding}
                            label="ຈັດການຮ້ານ"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(theme.label.icon.open[open ? "on" : "off"])}
                                    />
                                );
                            }}
                        >
                            <Sidebar.Item href="#managefood">ເມນູອາຫານ</Sidebar.Item>
                            <Sidebar.Item href="#managecategory">ປະເພດເມນູ</Sidebar.Item>
                            <Sidebar.Item href="#managetable">ໂຕະ</Sidebar.Item>
                            <Sidebar.Item href="#managezone">ໂຊນຮ້ານ</Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            icon={TbReportAnalytics}
                            label="ລາຍງານ"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(theme.label.icon.open[open ? "on" : "off"])}
                                    />
                                );
                            }}
                        >
                            <Sidebar.Item href="#salereport">ຍອດຂາຍ</Sidebar.Item>
                           
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            icon={HiCog}
                            label="ຕັ້ງຄ່າ"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(theme.label.icon.open[open ? "on" : "off"])}
                                    />
                                );
                            }}
                        >
                            <Sidebar.Item href="#settingbill">ຕັ້ງຄ່າບີນ</Sidebar.Item>
                            <Sidebar.Item href="#settingprinter">ຕັ້ງຄ່າປີ້ນເຕີ</Sidebar.Item>
                            <Sidebar.Item href="#settingrate">ຕັ້ງຄ່າອັດຕາແລກປ່ຽນ</Sidebar.Item>
                            <Sidebar.Item href="#managezone">ໂຊນຮ້ານ</Sidebar.Item>
                        </Sidebar.Collapse>
                        

                   
                       
                        
                      
                       

                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup  className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
                    <Sidebar.Item href="#payment"  icon={() => < FaFire className="text-orange-500 text-2xl " />}>
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item href="#manual" icon={HiOutlineBookOpen }>
                            ຄູ່ມືການໃຊ້ງານ
                        </Sidebar.Item>
                        <Sidebar.Item href="#help" icon={HiCubeTransparent }>
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

           

        </>
    )
}

export default Sidebar_Nav