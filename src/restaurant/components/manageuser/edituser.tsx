
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GetUserByIdService, PatchUserbyIdService } from "../../../services/users/getuserbyid";
import Loading from "../../../utils/Loading";

import { createUserErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { alertSuccessV3 } from "../../../utils/alert";
interface EditUserProps {
    handleModel: (action: string,userId:string) => void;
    user_id: string; 

}

const EditUser: React.FC<EditUserProps> = ({ handleModel, user_id }) => {
    const handleClick = (action: string) => {
        handleModel(action,user_id); // Call the parent function
    };

    const [isChecked, setIsChecked] = useState(true);
    const [isCheckedTitle, setIsCheckedTitle] = useState("ປີດໃຊ້ງານ");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("")
    const [loading, setLoading] = useState(false);
  



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await GetUserByIdService.GetUserById(user_id);
                const userData = res.data[0];
              
                setName(userData.user_name || ""); // Populate the `name` state
                setPhone(userData.user_phone || ""); // Populate the `phone` state
                setRole(userData.user_role || ""); // Populate the `role` state
            } catch (error: any) {
                console.error("API Error:", error);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [user_id]);

  
    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true)
        const path_img = "user.jpg";
        try {
            const res = await PatchUserbyIdService.patchUserById(
                user_id,
                name,
                phone,
                role,
                path_img
            );
            if (res.status == "200") {
                alertSuccessV3("ແກ້ໄຂສຳເລັດ", 'success');
            }
        } catch (error) {

            createUserErrors(error);
        } finally {
            setLoading(false)
        }
    }

    const handleChange = () => {
        setIsChecked(!isChecked); // Toggle checkbox state
        if (isChecked != true) {
            setIsCheckedTitle("ປິດໃຊ້ງານ");
        } else {
            setIsCheckedTitle("ເປີດໃຊ້ງານ");
        }
    };
    if (loading) {
        return <div className="flex flex-col  w-96 h-[70%] rounded-sm bg-white p-3">
            <button
                onClick={() => handleClick("close")}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
                <span className="sr-only">Close modal </span>
            </button>
            <div className="flex justify-center items-center w-full h-full">
                <Loading text="ດາວໂຫຼດຂໍ້ມູນ" />
            </div>
        </div>;
    }

    return (
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                <p className="text-xl font-semibold text-orange-500">
                    ແກ້ໄຂພະນັກງານ
                </p>
                <button
                    onClick={() => handleClick("close")}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close modal </span>
                </button>
            </div>
            <div className="px-3 mt-3">
                <form onSubmit={formSumit} className="px-3 md:px-4  flex flex-col gap-3 h-[55vh] overflow-y-auto">
                    <div className="col-span-2">
                        <label
                            htmlFor="name"
                            className="block mb-2  font-medium text-gray-900 text-xs md:text-sm"
                        >
                            {" "}
                            Name <span className="text-red-600"> *</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-orange-500 focus:border-0  block w-full p-2.5 "
                            placeholder="name..."
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                        >
                            Phone<span className="text-red-600"> *</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="020xxxxxxxx"
                            pattern="[0-9]{3}[0-9]{8}"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-orange-500 focus:border-0 block w-full p-2.5  "
                        />

                        <div className="col-span-2 sm:col-span-1">
                            <label
                                htmlFor="category"
                                className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                            >
                                Role<span className="text-red-600"> *</span>
                            </label>
                            <select
                                id="category"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-orange-500 focus:border-0 block w-full p-2.5"
                            >
                                <option value="0">--ເລືອກ--</option>
                                <option value="admin">ແອັດມີນ</option>
                                <option value="user">ເສີບ</option>
                            </select>
                        </div>
                        <label className="inline-flex items-center my-3 cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={isChecked}
                                onChange={handleChange} // Handle state changes
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-2 peer-focus:ring-orange-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 ">
                                {isCheckedTitle}
                            </span>
                        </label>
                        <div className="col-span-2 ">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 text-xs md:text-sm"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2  text-gray-500 text-xs md:text-sm">
                                        <span className="font-semibold">Click to upload</span>
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 ">
                                        SVG, JPG (MAX. 204x240px)
                                    </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white inline-flex items-end  justify-center gap-2 bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 mb-2 text-center "
                    >
                        <FaEdit className="text-white text-xl" />
                        {loading ?
                            <LoadingSpinner text="ແກ້ໄຂພະນັກງານ" />
                            :
                            "ແກ້ໄຂພະນັກງານ"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;