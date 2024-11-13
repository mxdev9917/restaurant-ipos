import Sidebar_Nav from "../components/sidebar-nav";
import { useState } from "react";
import { Label, Table } from "flowbite-react";
import { ImMenu2 } from "react-icons/im";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
function CustomerDetail() {
    const [passwordType, setPasswordType] = useState(false)
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className=" sm:ml-64">
                <div className="p-1">
                    <div className="flex justify-between w-full h-full items-end border-b-[1px]">
                        <div className=" flex-col items-start w-full h-fit pb-2 pl-2 hidden lg:flex ">
                            <Breadcrumb aria-label="Default breadcrumb example">
                                <Breadcrumb.Item href="#" icon={HiHome}>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Customer</Breadcrumb.Item>
                                <Breadcrumb.Item>Detail</Breadcrumb.Item>
                            </Breadcrumb>

                        </div>

                        <div className="w-full flex justify-end gap-1 pr-1 my-2  md:pr-5 ">
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                Delete
                            </button>
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm w-fit"
                            >
                                Reset Password
                            </button>
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full flex  sm:gap-0 gap-0 md:gap-10 flex-col sm:flex-row justify-between px-5 pt-2">
                        <div className=" w-full flex flex-col gap-3">
                            <div>
                                <div className=" block">
                                    <Label htmlFor="email2" value="Name" />
                                </div>
                                <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                            </div>
                            <div>
                                <div className=" block">
                                    <Label htmlFor="email2" value="Date" />
                                </div>
                                <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                            </div>
                            <div>
                                <div className=" block">
                                    <Label htmlFor="email2" value="Status" />
                                </div>
                                <div className="flex gap-2">
                                    <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                                    <button
                                        // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                        className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm w-fit"
                                    >
                                        UnLock
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col gap-3">
                            <div>
                                <div className=" block">
                                    <Label htmlFor="email2" value="Email" />
                                </div>
                                <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                            </div>
                            <div className="w-full  relative">
                                <label htmlFor="">ລະຫັດຜ່ານ</label>
                                <input type={passwordType ? "text" : "password"} className="h-11bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full " placeholder="•••••••••" required />
                                <button onClick={togglePasswordType} className="absolute bottom-3 right-3">
                                    {
                                        passwordType ?
                                            <IoMdLock className="text-2xl text-gray-400" />
                                            :
                                            <IoMdUnlock className="text-2xl text-gray-400" />
                                    }
                                </button>
                            </div>
                            <div className="w-full relative">
                                <label htmlFor="">ລະຫັດຜ່ານ</label>
                                <input type={passwordType ? "text" : "password"} className="h-11 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full  " placeholder="•••••••••" required />
                                <button onClick={togglePasswordType} className="absolute bottom-3 right-3">
                                    {
                                        passwordType ?
                                            <IoMdLock className="text-2xl text-gray-400" />
                                            :
                                            <IoMdUnlock className="text-2xl text-gray-400" />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex mx-5 mt-3 gap-2 border-b-[1px] items-end">
                        <ImMenu2 className="text-3xl text-gray-500" />
                        <p className="text-orange-500">ຂໍ້ມູນຮ້ານ</p>
                    </div>
                    <div className="overflow-x-auto px-5 mt-2">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>Restaurant Name</Table.HeadCell>
                                <Table.HeadCell>User</Table.HeadCell>
                                <Table.HeadCell className="hidden md:table-cell">Customer Name</Table.HeadCell>
                                <Table.HeadCell>Status</Table.HeadCell>
                                <Table.HeadCell className="hidden lg:table-cell">Expiration</Table.HeadCell>
                                {/* <Table.HeadCell>
                                    <span className="">Edit</span>
                                </Table.HeadCell> */}
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {'Apple MacBook Pro 17"'}
                                    </Table.Cell>
                                    <Table.Cell>addmin123</Table.Cell>
                                    <Table.Cell className="hidden md:table-cell">Sliver</Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className="hidden lg:table-cell">$2999</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>



                </div>
            </div>

        </div>
    );

}

export default CustomerDetail