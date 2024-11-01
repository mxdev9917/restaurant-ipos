import Sidebar_Nav from "./sidebar-nav";
import { FaDownload } from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { ImMenu2 } from "react-icons/im";
import { Table } from "flowbite-react";
function RestaurantDetail() {
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="sm:ml-64">
                <div className="flex flex-col">
                    <div className="flex justify-between p-3">
                        <p className="text-xl sm:text-2xl font-semibold text-orange-500">Invoice #1677</p>
                        <div className="flex gap-2">
                            <button className="flex items-center justify-center  gap-1 ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 w-20 h-8 rounded-sm"><MdPrint className="text-xl" />Print</button>
                            <button className="flex items-center justify-center gap-1 ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 w-28 h-8 rounded-sm">
                                <FaDownload /> Download
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row h-fit p-1">
                        <div className="flex flex-col gap-2 w-full rounded-sm bg-slate-100 p-3 ">
                            <div className="flex gap-2">
                                <p className="flex justify-end w-28">Customer:</p>
                                <p>gnar sehavong</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="flex justify-end w-28">Order Type:</p>
                                <p>Register</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="flex justify-end w-28">Amount:</p>
                                <p>1,500,000</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="flex justify-end w-28">Discount:</p>
                                <p>15,000</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center w-full  p-3">
                            <p className="uppercase text-2xl font-bold text-red-500">unpaid</p>
                            <p>06/08/2024 13:46</p>
                            <p>Payment Method: BCEL</p>
                            <div className="m:w-96 w-80  flex gap-2">
                                <input type="text" className="bg-gray-50 h-10 border border-gray-300 text-gray-900  rounded-sm  focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                                <button className="w-44 h-10 flex items-center ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 text-black px-4 py-1.5 rounded-sm">
                                    Send Email
                                </button>
                            </div>
                            <div className="flex gap-2 mt-1 sm:w-96 w-80 ">
                                <button className="w-full ring-1 ring-green-500 bg-green-500 focus:ring-orange-500 hover:ring-2 text-white px-4 py-1.5 rounded-sm">
                                    Accept
                                </button>
                                <button className="w-full ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2 text-black px-4 py-1.5 rounded-sm">
                                    Deny
                                </button>
                                <button className="w-full ring-1 ring-gray-300 focus:ring-orange-500 hover:ring-2  text-black px-4 py-1.5 rounded-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex mx-5 mt-3 gap-2 border-b-[1px] items-end">
                        <ImMenu2 className="text-3xl text-gray-500" />
                        <p className="text-orange-500">ຂໍ້ມູນຮ້ານ</p>
                    </div>
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>InvoiceID</Table.HeadCell>
                                <Table.HeadCell>Date</Table.HeadCell>
                                <Table.HeadCell>Payment Method</Table.HeadCell>
                                <Table.HeadCell>Price</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white  ">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                                        {'1256'}
                                    </Table.Cell>
                                    <Table.Cell>01/11/2024</Table.Cell>
                                    <Table.Cell>Bank Transfer</Table.Cell>
                                    <Table.Cell>150000</Table.Cell>

                                </Table.Row>
                                <Table.Row className="bg-white  ">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                                        1563
                                    </Table.Cell>
                                    <Table.Cell>01/11/2034</Table.Cell>
                                    <Table.Cell>BCEL</Table.Cell>
                                    <Table.Cell>150000</Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white  ">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">1356</Table.Cell>
                                    <Table.Cell>01/11/2022</Table.Cell>
                                    <Table.Cell>Bank Transfer</Table.Cell>
                                    <Table.Cell>150000</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RestaurantDetail;
