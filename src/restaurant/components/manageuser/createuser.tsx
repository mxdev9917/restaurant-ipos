
import { useState } from "react";
import { PostCHUserService } from "../../../services/users/check-user";
import { PostUserService } from "../../../services/users/create-user";
import { createUserErrors } from "../../../utils/error";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { alertSuccessV3 } from "../../../utils/alert";
import { useAuth } from "../../../context/context";
interface CreateUserProps {
    handleModel: (action: string, userId: string) => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ handleModel }) => {
    const handleClick = (action: string) => {
        console.log("Button clicked with action:", action); // Debugging log
        handleModel(action, "0"); // Call the parent function
    };

    const [passwordType, setPasswordType] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isCheckedTitle, setIsCheckedTitle] = useState("ປີດໃຊ້ງານ");
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("")
    const [pckColor, setPckColor] = useState("ring-orange-500");
    const [ischeckPCK, setIscheckPCK] = useState(false)
    const [loading, setLoading] = useState(false);
     const { data,token } = useAuth();
    const formSumit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true)
        let resId = String(data.restaurant_ID);
        const path_img = "user.jpg";
        try {
            const res = await PostUserService.postUser(
                resId,
                name,
                user,
                phone,
                password,
                role,
                path_img,
                token||""
            );
            if (res.status == 200) {
                console.log(res.status);

                alertSuccessV3("ສ້າງຢູເຊີ້ສຳເລັດ", 'success');
            }
        } catch (error) {

            createUserErrors(error);
        } finally {
            setLoading(false)
        }



    }

    const checkUser = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
        console.log(e.target.value);
        try {

            setIscheckPCK(false)
            setPckColor("border-orange-500")
            if (user.trim() === "" || user.trim() === null) {
                setPckColor("border-gray-300");
                setIscheckPCK(false);
                return;
            } else {
                const res = await PostCHUserService.postCkUser(e.target.value); // Use the updated value directly
                if (res.status == 200) {
                    setPckColor("border-green-500")
                    setIscheckPCK(false)

                } else if (res.status == 409) {
                    setPckColor("border-red-500")
                    setIscheckPCK(true)
                } else {
                    setPckColor("border-gray-300")
                    setIscheckPCK(false)
                }
            }

        } catch (error) {
            console.error(error);
            createUserErrors(error);
        }
    };
    function togglePasswordType() {
        setPasswordType(!passwordType);
    }
    const handleChange = () => {
        setIsChecked(!isChecked); // Toggle checkbox state
        if (isChecked != true) {
            setIsCheckedTitle("ປິດໃຊ້ງານ");
        } else {
            setIsCheckedTitle("ເປີດໃຊ້ງານ");
        }
    };

    return (
        <div className="flex flex-col w-96 h-fit bg-white rounded-lg shadow-xl">
            <div className="flex justify-between items-center px-5 w-full h-16 border-b-2">
                <p className="text-xl font-semibold text-orange-500">
                    ເພີ່ມພະນັກງານ
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
                <form onSubmit={formSumit} className="px-3 md:px-4  flex flex-col gap-3 h-[75vh] overflow-y-auto">
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-orange-500 focus:border-0  block w-full p-2.5 "
                            placeholder="name..."
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label
                            htmlFor="user"
                            className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                        >
                            ຢູເຊີ້<span className="text-red-600"> *</span>
                        </label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            placeholder="Enter username"
                            onBlur={checkUser}  // Use onBlur to call checkUser after focus is lost
                            className={`bg-gray-50 border ${pckColor} text-gray-900 text-xs md:text-sm rounded-lg focus:ring-1 block w-full p-2.5`}
                        />




                        <p className={`text-[11px] text-red-500 pt-2 pl-2 ${ischeckPCK ? "block" : "hidden"}`}>ຢູເຊີ້ນີ້ມີຄົນໃຊ້ແລ້ວ</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1 relative">
                        <label
                            htmlFor="category"
                            className="block mb-2 text-xs md:text-sm font-medium text-gray-900 "
                        >
                            ລະຫັດຜ່ານ<span className="text-red-600"> *</span>
                        </label>
                        <input
                            type={passwordType ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="..."
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-orange-500 focus:border-0 block w-full p-2.5  "
                        />
                        <button
                            onClick={togglePasswordType}
                            className="absolute bottom-2 right-3"
                        >
                            {passwordType ? (
                                <svg
                                    className="w-6 h-6 text-gray-800 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 7a2 2 0 1 1 4 0v4a1 1 0 1 0 2 0V7a4 4 0 0 0-8 0v3H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V7Zm-5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-orange-500 focus:border-0 block w-full p-2.5  "
                            >
                                <option className="" value="0" disabled selected>--ເລືອກ--</option>
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
                                onChange={handleChange}
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
                        className="text-white inline-flex items-center justify-center bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center "
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        {loading ?
                            <LoadingSpinner text="ເພີ່ມພະນັກງານ" />
                            :
                            "ເພີ່ມພະນັກງານ"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;