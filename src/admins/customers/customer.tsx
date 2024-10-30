import Sidebar_Nav from "../components/sidebar-nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserForm from "../components/userform";
import { Table } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
function Customers() {
    const [titleUserForm, settitleUserForm] = useState('ເພີ່ມຜູ້ດູແລລະບົບ')
    const [isCheckUserForm, setsCheckUserForm] = useState(false)
    function handleUserForm(title: string) {
        setsCheckUserForm(!isCheckUserForm)
        settitleUserForm(title)
    }
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className=" sm:ml-64">
                <div className="p-1">
                    <div className="flex justify-between w-full h-fit items-center mb-2">
                        <Breadcrumb aria-label="Default breadcrumb example">
                            <Breadcrumb.Item href="#" icon={HiHome}>
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Costomer</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className=" flex gap-2 ">
                            <button
                                onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-[5px] px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                refresh
                            </button>
                            <button
                                onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-[5px] px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                ເພີ່ມ
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell className="min-w-32">ຊື່ລູກຄ້າ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">ຈຳນວນຮ້ານ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">ສະຖານະ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">ວັນທີລົງທະບຽນ</Table.HeadCell>
                                <Table.HeadCell className="min-w-32">
                                    <span className="">ເມນູ</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="flex whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img
                                            className="w-10 h-10 rounded-full hidden sm:block"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="Jese image"
                                        />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">Neil Sims</div>
                                            <div className="font-normal text-gray-500">
                                                02056085825
                                            </div>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className="pl-11">2</Table.Cell>
                                    <Table.Cell className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                                        ok
                                    </Table.Cell>
                                    <Table.Cell>23:04/25/10/24</Table.Cell>
                                    <Table.Cell>
                                        <Link to={'/admin/customer/detail'} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            ຂໍ້ມູນເພີ່ມເຕີມ
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
            {isCheckUserForm && <UserForm handelButtonClose={() => handleUserForm('')} title={titleUserForm} />}
        </div>
    );

}

export default Customers