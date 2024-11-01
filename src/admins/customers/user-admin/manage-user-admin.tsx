import Sidebar_Nav from "../../components/sidebar-nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserForm from "../../components/userform";
import { TiEdit } from "react-icons/ti";
import { MdLockReset } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

function UserAdmin() {
    const [titleUserForm, settitleUserForm] = useState('ເພີ່ມຜູ້ດູແລລະບົບ');
    const [isCheckUserForm, setsCheckUserForm] = useState(false);

    function handleUserForm(title: string) {
        setsCheckUserForm(!isCheckUserForm);
        settitleUserForm(title);
    }

    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="pt-8 sm:ml-64">
                <div className="p-1">
                    <div className="flex justify-between w-full h-fit items-end">
                        <div className="flex flex-col w-fit h-fit pb-2 pl-2">
                            <div className="flex text-gray-500">
                                <Link className="text-orange-500 text-xs md:text-sm" to={""}>
                                    ຈັດການຢູເຊີ້
                                </Link>
                            </div>
                            <div className="flex">
                                <form className="flex items-center max-w-lg mx-auto mt-2 relative">
                                    <input
                                        className="w-48 md:w-64 h-8 text-xs md:text-sm rounded-full border-gray-300 focus:outline-transparent focus:ring-0"
                                        type="text"
                                        placeholder="ຄົ້ນຫາ..."
                                    />
                                    <button className="absolute right-3 top-1.5 flex">
                                        <svg
                                            className="w-6 h-6 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="pr-1 mb-2 md:pr-5">
                            <button
                                onClick={() => handleUserForm('ເພີ່ມຜູ້ດູແລລະບົບ')}
                                className="bg-green-500 hover:bg-green-600 py-[5px] px-4 rounded-md text-white text-xs md:text-sm"
                            >
                                ເພີ່ມ
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Position</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <th
                                        scope="row"
                                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                                    >
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="Jese image"
                                        />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">Neil Sims</div>
                                            <div className="font-normal text-gray-500">02056085825</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">super administrator</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                            Online
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button className="font-medium hover:underline">
                                                <MdLockReset className="text-2xl" />
                                            </button>
                                            <button
                                                onClick={() => handleUserForm('ແກ້ໄຂຜູ້ດູແລລະບົບ')}
                                                className="font-medium hover:underline"
                                            >
                                                <TiEdit className="text-2xl" />
                                            </button>
                                            <button className="font-medium hover:underline">
                                                <FaRegTrashAlt className="text-xl text-red-500" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isCheckUserForm && (
                <UserForm handelButtonClose={() => handleUserForm('')} title={titleUserForm} />
            )}
        </div>
    );
}

export default UserAdmin;
