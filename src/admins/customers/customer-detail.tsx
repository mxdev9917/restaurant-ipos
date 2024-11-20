import Sidebar_Nav from "../components/sidebar-nav";
import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Label, Table } from "flowbite-react";
import { ImMenu2 } from "react-icons/im";
import { IoMdLock } from "react-icons/io";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { patchOwnerUpStatus } from "../services/owner_service";
import { OwnerById, IRestaurant } from "../interfaces/customer_interface";
import Loading from "../../utils/Loading";
import { useAuth } from "../../context/authen_context";
import { customerByIDErrors } from "../../utils/error";
import { alertconfirm, alertSuccessV3 } from "../../utils/alert";
import { GetOwnerByIdService } from "../services/owner_service";



function CustomerDetail() {
    const [owner, setOwner] = useState < OwnerById > ();
    const [restaurants, setRestaurants] = useState < IRestaurant[] > ();
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const { token } = useAuth();
    const [btnText, setBtnText] = useState("")
    const [status, setStatus] = useState("")
    const handleUpdateOwnerStatus = async () => {
        try {
            if (!token) {
                throw new Error("Authorization token is required");
            }
            if (!id || !status) {
                throw new Error("ID and status are required");
            }
            const res = await patchOwnerUpStatus.patchOwnerStatus(id, status, token)
            const response = res.status;
            if (response == '200') {
                alertSuccessV3(fetchData, 'ອັບເດດສະຖານະສຳເລັດ', "success");
                if (owner?.owner_status === "active") {
                    setStatus("lock")
                    setBtnText("lock");
                    console.log('a');
                }
                if (owner?.owner_status === "lock") {
                    setStatus("active")
                    setBtnText("active");
                    console.log('l');
                }
            }

        } catch (error: any) {
            console.log(error.message);
        }

    }
    const fetchData = async () => {
        try {
            setLoading(true);

            if (!id) {
                throw new Error("ID is required");
            }
            if (!token) {
                throw new Error("Authorization token is required");
            }
            const res = await GetOwnerByIdService.getOwnerById(id, token);
            setOwner(res.data.owner);
            setRestaurants(res.data.restaurants);

            // Handle status after fetching data
            if (res.data.owner?.owner_status === "active") {
                setStatus("lock");
                setBtnText("Lock");
            } else if (res.data.owner?.owner_status === "lock") {
                setStatus("active");
                setBtnText("Unlock");
            }
        } catch (error: any) {
            console.log(error.message);
            customerByIDErrors(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id, token]);

    return (
        owner === undefined ? (
            <div className="flex w-screen h-screen items-center justify-center"><Loading text="ດາວໂຫຼດຂໍ້ມູນ" /></div> // You can replace this with any loading or error message
        )
            : (
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
                                            <Label htmlFor="name" value="Name" />
                                        </div>
                                        <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg cursor-not-allowed block w-full p-2.5 " value={owner?.owner_name} required readOnly disabled />
                                    </div>
                                    <div>
                                        <div className=" block">
                                            <Label htmlFor="phone" value="ເບີໂທລະສັບ" />
                                        </div>
                                        <input id="phone" name="phone" type="phone" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg cursor-not-allowed block w-full p-2.5 " value={owner?.owner_phone} readOnly disabled />
                                    </div>
                                    <div>
                                        <div className=" block">
                                            <Label htmlFor="email" value="ສະຖານະ" />
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg cursor-not-allowed block w-full p-2.5 " value={owner?.owner_status} readOnly disabled />
                                            <button
                                                onClick={() => alertconfirm(handleUpdateOwnerStatus, `ທ່ານຕ້ອງການ ${btnText}?`, "question")}
                                                className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm w-fit"
                                            >
                                                {btnText}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-full flex flex-col gap-3">
                                    <div>
                                        <div className=" block">
                                            <Label htmlFor="email2" value="ອີເມລ" />
                                        </div>
                                        <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg cursor-not-allowed block w-full p-2.5 " placeholder="...." value={owner?.owner_email} readOnly disabled />
                                    </div>
                                    <div className="w-full  relative">
                                        <label htmlFor="">ວັນທີລົງທະບຽນ</label>
                                        <input type="text" className="h-11bg-gray-50 border border-gray-300 text-gray-900  rounded-lg cursor-not-allowed block w-full " placeholder="...." value={owner?.owner_date} readOnly disabled />
                                    </div>
                                    <div className="w-full relative">
                                        <label htmlFor="">ລະຫັດຜ່ານ</label>
                                        <input type="password" className="h-11 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg cursor-not-allowed block w-full  " placeholder="...." value={"********"} readOnly disabled />
                                        <button className="absolute bottom-3 right-3">
                                            {
                                                <IoMdLock className="text-2xl text-gray-400" />
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
                                        <Table.HeadCell>Status</Table.HeadCell>
                                        <Table.HeadCell className="hidden lg:table-cell">Expiration</Table.HeadCell>
                                        <Table.HeadCell className="hidden lg:table-cell">ວັນທີສ້າງ</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y border-b-[1px]">
                                        {
                                            loading ? (
                                                <Table.Cell colSpan={6} className="text-center h-28">
                                                    <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
                                                </Table.Cell>
                                            ) : (
                                                restaurants === undefined ? (<Table.Cell colSpan={6} className="text-center h-28">
                                                    <p>ຍັງບໍ່ມີຮ້ານ</p>
                                                </Table.Cell>) :
                                                    restaurants?.map((item) => (
                                                        <Table.Row key={item.restaurant_ID} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                                {item.restaurant_name}
                                                            </Table.Cell>

                                                            <Table.Cell>
                                                                <div className="flex items-center">
                                                                    <div className="flex items-end justify-start h-full">
                                                                        <div className="flex items-center justify-start">
                                                                            <div className={`h-2.5 w-2.5 rounded-full me-2 
                                                                            ${item.restaurant_status === 'active'
                                                                                    ? 'bg-green-500' : 'bg-red-500'
                                                                                }`
                                                                            } />
                                                                            {item.restaurant_status}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Table.Cell>
                                                            <Table.Cell className="hidden lg:table-cell">{item.restaurant_expiry_date}</Table.Cell>
                                                            <Table.Cell className="hidden lg:table-cell">{item.restaurant_created_at}</Table.Cell>
                                                        </Table.Row>
                                                    )
                                                    ))
                                        }

                                    </Table.Body>
                                </Table>
                            </div>
                            {/* <div className="overflow-x-auto">
                                <Table striped className="border-b-[1px]">
                                    <Table.Head>
                                    <Table.HeadCell>Restaurant Name</Table.HeadCell>
                                        <Table.HeadCell>Status</Table.HeadCell>
                                        <Table.HeadCell className="hidden lg:table-cell">Expiration</Table.HeadCell>
                                        <Table.HeadCell className="hidden lg:table-cell">ວັນທີສ້າງ</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {
                                            loading ? (
                                                <Table.Cell colSpan={6} className="text-center h-28">
                                                    <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
                                                </Table.Cell>
                                            ) : (

                                                restaurants?.map((item) => (
                                                    <Table.Row key={item.restaurant_ID} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {item.restaurant_name}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                        <div className="flex items-center">
                                                                <div className="flex items-end justify-start h-full">
                                                                    <div className="flex items-center justify-start">
                                                                        <div className={`h-2.5 w-2.5 rounded-full me-2 
                                                                            ${
                                                                                item.restaurant_status === 'Expired' ? 'bg-red-500' :  item.restaurant_status==='active'?'bg-green-500':'bg-yellow-500'
                                                                            }`
                                                                            } />
                                                                            {item.restaurant_status}
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell className="hidden lg:table-cell">{item.restaurant_expiry_date}</Table.Cell>
                                                        <Table.Cell className="hidden lg:table-cell">{item.restaurant_created_at}</Table.Cell>
                                                    </Table.Row>
                                                )
                                                ))
                                        }



                                    </Table.Body>
                                </Table>
                            </div> */}


                        </div>
                    </div>

                </div>
            )
    );

}

export default CustomerDetail