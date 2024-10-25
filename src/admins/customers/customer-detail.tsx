import Sidebar_Nav from "../components/sidebar-nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserForm from "../components/userform";
import { TiEdit } from "react-icons/ti";
import { MdLockReset, MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Label, Popover } from "flowbite-react";
import { HiCog } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { Table } from "flowbite-react";
import { ImMenu2 } from "react-icons/im";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { Clipboard } from "flowbite-react"
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
                        <div className="flex flex-col items-start w-full h-fit pb-2 pl-2 ">
                            <Breadcrumb aria-label="Default breadcrumb example">
                                <Breadcrumb.Item href="#" icon={HiHome}>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                                <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
                            </Breadcrumb>

                        </div>

                        <div className="flex gap-1 pr-1 my-2  md:pr-5 ">
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                Delete
                            </button>
                            <button
                                // onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm w-full"
                            >
                                Reset
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
                                <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
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
                                <Table.HeadCell>Restaurant name</Table.HeadCell>
                                <Table.HeadCell>token</Table.HeadCell>
                                <Table.HeadCell>Customer Name</Table.HeadCell>
                                <Table.HeadCell>Status</Table.HeadCell>
                                <Table.HeadCell>Expiration date</Table.HeadCell>
                                <Table.HeadCell className="flex justify-end"> Action</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {'Apple MacBook Pro 17"'}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex  gap-3 relative  items-center">
                                            <p id="pass-code" className="p-2 text-[14px] rounded-md ">YiZ7952M0sktCD188coEiTzZEtGbKK
                                                <Clipboard.WithIcon className=" right-28 bottom-1" valueToCopy="YiZ7952M0sktCD188coEiTzZEtGbKK" label="Copy" />
                                            </p>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>Sliver</Table.Cell>
                                    <Table.Cell>Laptop</Table.Cell>
                                    <Table.Cell>$2999</Table.Cell>
                                    <Table.Cell className="flex justify-end">
                                    <Link className="flex w-fit  sm:bottom-2  bg-orange-500 p-1 rounded-md text-white"><HiCog className="text-lg" />Config</Link>
                                    </Table.Cell>
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