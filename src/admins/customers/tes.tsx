import Sidebar_Nav from "../components/sidebar-nav";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import UserForm from "../components/userform";
import { Table } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { OwnerService } from "../services/owner_service";
import { useAuth } from "../../context/authen_context";
import { IOwner } from "../interfaces/customer_interface";


function Customers() {
    const [titleUserForm, settitleUserForm] = useState('ເພີ່ມຜູ້ດູແລລະບົບ');
    const [isCheckUserForm, setsCheckUserForm] = useState(false);
    const { token } = useAuth();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState < IOwner[] > ([]);

    function handleUserForm(title: string) {
        setsCheckUserForm(!isCheckUserForm);
        settitleUserForm(title);
    }

    const callData = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        try {
            const res = await OwnerService.getOwner(token);
            if (res.status === "200") {
                const results: IOwner[] = res.data.data; // ตรวจสอบว่า res.data.data เป็นอาเรย์ของ IOwner
                setData(results); // อัพเดท state ด้วยข้อมูลของเจ้าของ
            }
        } catch (error: any) {
            console.log("Error:", error.message);
            if (error.response) {
                console.log("Response data:", error.response.data);
                console.log("Response status:", error.response.status);
            }
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
                            <Breadcrumb.Item>Costomer</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="flex gap-2">
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
                                {loading ? (
                                    <Table.Row>
                                        <Table.Cell colSpan={5} className="text-center">Loading...</Table.Cell>
                                    </Table.Row>
                                ) : (
                                    data.map((item) => (
                                        <Table.Row key={item.owner_ID} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="flex whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                <div className="ps-3">
                                                    <div className="text-base font-semibold">{item.owner_name}</div>
                                                    <div className="font-normal text-gray-500">{item.owner_phone}</div>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell className="pl-11">1</Table.Cell> {/* Example of store count */}
                                            <Table.Cell className="flex items-center">
                                                <div className={`h-2.5 w-2.5 rounded-full me-2 ${item.owner_status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                {item.owner_status === 'active' ? 'Active' : 'Locked'}
                                            </Table.Cell>
                                            <Table.Cell>{new Date(item.created_at).toLocaleDateString()}</Table.Cell>
                                            <Table.Cell>
                                                <Link to={`/admin/customer/detail/${item.owner_ID}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                    ຂໍ້ມູນເພີ່ມເຕີມ
                                                </Link>
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


