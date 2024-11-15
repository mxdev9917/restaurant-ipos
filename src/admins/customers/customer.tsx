import Sidebar_Nav from "../components/sidebar-nav";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import UserForm from "../components/userform";
import { Table } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { OwnerService } from "../services/owner_service";
import { useAuth } from "../context/authen_context";
import { IOwner } from "../interfaces/customer_interface";
import { customerErrors } from "../../utils/error";
import Loading from "../../utils/Loading" // Import the spinner component

function Customers() {
    const [titleUserForm, setTitleUserForm] = useState('ເພີ່ມຜູ້ດູແລລະບົບ');
    const [isCheckUserForm, setIsCheckUserForm] = useState(false);
    const { token } = useAuth();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState < IOwner[] > ([]);

    function handleUserForm(title: string) {
        setIsCheckUserForm(!isCheckUserForm);
        setTitleUserForm(title);
    }

    const callData = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        try {
            const res = await OwnerService.getOwner(token);
            if (res.status === "200") {
                setData(res.data);
            }
        } catch (error: any) {
            customerErrors(error)
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        callData();
    }, [callData]);

    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="sm:ml-64">
                <div className="p-1">
                    <div className="flex justify-between w-full h-fit items-center mb-2">
                        <Breadcrumb aria-label="Default breadcrumb example">
                            <Breadcrumb.Item href="#" icon={HiHome}>
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Customer</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="flex gap-2">
                            <button
                                onClick={() => callData()}
                                className="bg-green-500 hover:bg-green-600 py-[5px] px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                Refresh
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
                                <Table.HeadCell>Name</Table.HeadCell>
                                <Table.HeadCell>Phone</Table.HeadCell>
                                <Table.HeadCell>Store</Table.HeadCell>
                                <Table.HeadCell>Status</Table.HeadCell>
                                <Table.HeadCell>Date</Table.HeadCell>
                                <Table.HeadCell>Actions</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {loading ? (
                                    <Table.Row>
                                        <Table.Cell colSpan={6} className="text-center h-28">
                                            <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
                                        </Table.Cell>
                                    </Table.Row>
                                ) : (
                                    data.map((item) => (
                                        <Table.Row key={item.owner_ID} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                <div className="flex gap-2">
                                                    <img
                                                        className="w-10 h-10 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                        alt="Jese image"
                                                    />
                                                    <div>
                                                        <div className="text-base font-semibold">{item.owner_name}</div>
                                                        <div className="font-normal text-gray-500">{item.owner_email}</div>
                                                    </div>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell className="h-[75px]">
                                                <p className="flex items-end justify-start h-full">{item.owner_phone}</p>
                                            </Table.Cell>
                                            <Table.Cell className="h-[75px]">
                                                <p className="flex items-end justify-start h-full">{item.restaurant_count}</p>
                                            </Table.Cell>
                                            <Table.Cell className="h-[75px]">
                                                <div className="flex items-end justify-start h-full">
                                                    <div className="flex items-center justify-start">
                                                        <div className={`h-2.5 w-2.5 rounded-full me-2 ${item.owner_status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                                                        {item.owner_status === 'active' ? 'Active' : 'Locked'}
                                                    </div>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell className="h-[75px]">
                                                <p className="flex items-end justify-start h-full">
                                                    {new Date(item.created_at).toLocaleDateString()}
                                                </p>
                                            </Table.Cell>
                                            <Table.Cell className="h-[75px]">
                                                <p className="flex items-end justify-start h-full">
                                                    <Link to={`/admin/customer/detail/${item.owner_ID}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                        View Details
                                                    </Link>
                                                </p>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                )}
                            </Table.Body>
                        </Table>
                    </div>

                </div>
            </div>
            {isCheckUserForm && <UserForm handelButtonClose={() => handleUserForm('')} title={titleUserForm} />}
        </div>
    );
}

export default Customers;
