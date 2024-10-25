import {
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiOutlineOfficeBuilding,
    HiCog,
    HiOutlineBookOpen,
    HiCubeTransparent ,
    HiClipboardList 
} from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaFire,FaChartBar,FaHospitalUser } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import Nav from "./nav"
import {  useState } from "react";


function Sidebar_Nav() {
    const[translate,setTranslate]=useState(true)
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function isCheckMenu() { 
        setTranslate(!translate);
    }
   
    return (
        <>

        {/* -translate-x-full */}
            <Nav handelMenu={isCheckMenu}/>
            <Sidebar  className={`fixed  mt-2 z-40 w-64 h-screen transition-transform  ${translate ? '-translate-x-full':''} sm:translate-x-0`} aria-label="Sidebar">
                <Sidebar.Items className="h-full px-3 py-5 overflow-y-auto bg-gray-50 ">
                    <Sidebar.ItemGroup className="space-y-3 font-medium">
                    <Sidebar.Item href="#" icon={FaChartBar}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#/admin/users" icon={FaUsersGear}>
                            User
                        </Sidebar.Item>
                        <Sidebar.Item href="#/admin/customers" icon={FaHospitalUser}>
                            ລູກຄ້າ
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
                            <Sidebar.Item href="#">ເມນູອາຫານ</Sidebar.Item>
                            <Sidebar.Item href="#">ປະເພດເມນູ</Sidebar.Item>
                            <Sidebar.Item href="#">ໂຕະ</Sidebar.Item>
                            <Sidebar.Item href="#">ໂຊນຮ້ານ</Sidebar.Item>
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
                            <Sidebar.Item href="#">ຍອດຂາຍ</Sidebar.Item>
                           
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
                            <Sidebar.Item href="#">ຕັ້ງຄ່າບີນ</Sidebar.Item>
                            <Sidebar.Item href="#">ຕັ້ງຄ່າປີ້ນເຕີ</Sidebar.Item>
                            <Sidebar.Item href="">ຕັ້ງຄ່າອັດຕາແລກປ່ຽນ</Sidebar.Item>
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

