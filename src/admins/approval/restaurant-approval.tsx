import Sidebar_Nav from "../components/sidebar-nav";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
function RestaurantApproval() {
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="sm:ml-64">
                <div className="p-1">
                    <div className="flex justify-end sm:justify-between w-full h-fit items-center mb-2">

                        <Breadcrumb aria-label="Default breadcrumb example ">
                            <Breadcrumb.Item href="#" icon={HiHome}> Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Approval</Breadcrumb.Item>
                            <Breadcrumb.Item>restaurant</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className=" flex gap-2 ">
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-[5px] px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                refresh
                            </button>
                            <Link
                                to={''}
                                // onClick={() => handleRestaurant('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-[5px] px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                ເພີ່ມ
                            </Link>
                        </div>



                    </div>
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>ຊື່ຮ້ານ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">ຊື່ລູກຄ້າ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">ແພັດເກັດ</Table.HeadCell>
                                <Table.HeadCell className="min-w-48 sm:min-w-0 ">ວັນທີໝົດອາຍຸ</Table.HeadCell>
                                <Table.HeadCell className="min-w-38 sm:min-w-0 ">ວັນທີລົງທະບຽນ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">ສະຖານະ</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="">ເມນູ</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                                        {'ຮ້ານອາຫານຈຳປາ"'}
                                    </Table.Cell>
                                    <Table.Cell>ນິນ່າ ທຳມະວົງ</Table.Cell>
                                    <Table.Cell>ຟຣີ</Table.Cell>
                                    <Table.Cell>30/10/2024 23:20</Table.Cell>
                                    <Table.Cell>30/10/2024 23:20</Table.Cell>
                                    <Table.Cell className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 me-2"></div>{" "}
                                        ລໍອະນຸມັດ
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Link to={"/admin/Approval/restaurant/detail"} className="font-medium text-cyan-600 hover:underline">
                                            ຂໍ້ມູນເພີ່ມເຕີມ
                                        </Link>

                                    </Table.Cell>
                                </Table.Row>

                            </Table.Body>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                                        {'ຮ້ານອາຫານຈຳປາ"'}
                                    </Table.Cell>
                                    <Table.Cell>ນິນ່າ ທຳມະວົງ</Table.Cell>
                                    <Table.Cell>ຟຣີ</Table.Cell>
                                    <Table.Cell>30/10/2024 23:20</Table.Cell>
                                    <Table.Cell>30/10/2024 23:20</Table.Cell>
                                    <Table.Cell className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 me-2"></div>{" "}
                                        ລໍອະນຸມັດ
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Link to={"/admin/Approval/restaurant/detail"} className="font-medium text-cyan-600 hover:underline">
                                            ຂໍ້ມູນເພີ່ມເຕີມ
                                        </Link>

                                    </Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
            {/* {isCheckAddRestaurant && <RestaurantDetail handelButtonClose={()=>handleRestaurant('ເພີ່ມຮ້ານ')} title={titleRestaurant} />} */}
        </div>
    );
}

export default RestaurantApproval