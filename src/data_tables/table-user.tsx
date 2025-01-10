import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Dropdown } from "flowbite-react";
import { GetAllUserByIdService } from '../services/users/getalluserbyid';
import { IGetAllUserById } from '../interfaces/getalluserbyid_interface';
import { alertconfirm } from '../utils/alert';

interface UserProps {
    handleResetPass: (userId: string) => void;
    handleDelete: (userId: string) => void;
    handleModel: (action: string, user_id: string) => void;
}

const UserTable: React.FC<UserProps> = ({ handleResetPass, handleDelete, handleModel }) => {
    const [users, setUsers] = useState<IGetAllUserById["data"]>([]);
    const [totalRows, setTotalRows] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // Default to page 1

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // Update current page
    };

    const getData = async (page:number) => {
        const res = await GetAllUserByIdService.GetAllUserById("3",page);
        setUsers(res.data);
        setTotalRows(res.totalCount || 0);
    };

    const handleResetPassword = (userId: string) => {
        handleResetPass(userId);
    };

    const handleDeleteUser = (userId: string) => {
        handleDelete(userId);
    };

    const handleEditUser = (action: string, userId: string) => {
        handleModel(action, userId);
    };

    const columns = [
        {
            name: 'Name',
            selector: (row: { user_name: string; user_phone: string; }) => row.user_name, // Return a primitive like `user_name`
            cell: (row: { user_name: string, user_phone: string }) => (
                <div className='flex min-w-72'>
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Profile"
                    />
                    <div className='flex flex-col pl-2'>
                        <p>{row.user_name}</p>
                        <p>{row.user_phone}</p>
                    </div>
                </div>
            ),
        },
        {
            name: "User",
            selector: (row: { user: string; }) => row.user,  // Return a primitive like `user`
            cell: (row: { user: string }) => <p className='pt-6'>{row.user}</p>,
        },
        {
            name: "Position",
            selector: (row: { user_role: string; }) => row.user_role, // Return a string
            cell: (row: { user_role: string }) => <p className='pt-6'>{row.user_role}</p>,
        },
        {
            name: "Status",
            selector: (row: { user_status: string; }) => row.user_status, // Return a string like 'active' or 'locked'
            cell: (row: { user_status: string }) => (
                <div className="flex items-center mt-6">
                    <div
                        className={`h-2.5 w-2.5 rounded-full me-2 ${row.user_status === "active" ? "bg-green-500" : "bg-red-500"}`}
                    />
                    {row.user_status === "active" ? "Active" : "Locked"}
                </div>
            ),
        },
        {
            name: "Date",
            selector: (row: { created_at: string; }) => row.created_at, // Return date string or timestamp
            cell: (row: { created_at: string }) => <p className='pt-6'>{row.created_at}</p>,
        },
        {
            name: "Action",
            selector: (row: { user_ID: string; user: string }) => row.user_ID, // Return user_ID (primitive)
            cell: (row: { user_ID: string; user: string }) => (
                <Dropdown label="Menu" inline>
                    <Dropdown.Item onClick={() => alertconfirm(() => handleResetPassword(row.user_ID), `Change password for ${row.user}?`, "question")}>
                        Change Password
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEditUser('edit', row.user_ID)}>
                        Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => alertconfirm(() => handleDeleteUser(row.user_ID), `Delete ${row.user}?`, "question")}>
                        Delete
                    </Dropdown.Item>
                </Dropdown>
            ),
        },
    ];

    useEffect(() => {
        getData(currentPage);
    }, []);

    return (
        <div>
            <DataTable
                columns={columns}
                data={users}
                pagination
                highlightOnHover
                selectableRowsComponent
                paginationTotalRows={totalRows}
                paginationComponentOptions={{
                    noRowsPerPage: true
                }}
                customStyles={{
                    headCells: {
                        style: {
                            backgroundColor: '#f9fafb',
                            color: '#384152',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            padding: '12px 8px',
                            textAlign: 'center',
                        },
                    },
                    rows: {
                        style: {
                            height: '100%',
                            border: '0.5px solid #e5e7eb',
                        },
                    },
                    cells: {
                        style: {
                            padding: '10px 4px',
                            textAlign: 'left',
                        },
                    },
                }}
            />
        </div>
    );
};

export default UserTable;
