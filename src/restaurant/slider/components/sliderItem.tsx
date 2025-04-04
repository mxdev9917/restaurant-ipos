import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { HiPencilAlt, HiOutlineTrash, HiOutlineBan, HiDotsVertical, HiCheck } from "react-icons/hi";
import { IPOS_BASE_URL } from "../../../utils/connection";
import { slideService } from "../../../services/slide/SlideService";
import { useAuth } from "../../../context/context";
import { generalErrors } from "../../../utils/error";
import LoadingSpinnerMessage from "../../../utils/LoadingSpinnerMessage";
import { alertconfirm, alertSuccessV3 } from "../../../utils/alert";


interface SlideItemProps {
    slider_ID: string;
    slider_url: string;
    slider_visibility: string;
    handleModel: (value: boolean) => void;
}

const SliderItem: React.FC<SlideItemProps> = ({ slider_ID, slider_url, slider_visibility,handleModel }) => {
    const { token } = useAuth();
    const imageUrl = `${IPOS_BASE_URL}${slider_url}`;
    const [isLoading, setIsLoading] = useState(false);



    const handleEditStatus = async () => {
        try {
            setIsLoading(true);
            const newStatus = slider_visibility.toLowerCase() === "disable" ? "active" : "disable";
            const res = await slideService.postStatusSlideService(slider_ID, newStatus, token || "");

            if (res.status === "200") {
                alertSuccessV3("ສຳເລັດ", "success")
            }
        } catch (error) {
            console.error("Failed to update status:", error);
            generalErrors(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            const res = await slideService.deleteRateService(slider_ID, token || "")
            if (res.status === "200") {
                alertSuccessV3("ສຳເລັດ", "success")
            }


        } catch (error) {
            console.error("Failed to update status:", error);
            generalErrors(error);
        } finally {
            setIsLoading(false);
        }
    }

    






    return (
        <>

            <div className={`${isLoading ? "absolute" : "hidden"}  z-50 w-screen h-full top-0 right-0 bg-black/5 flex justify-center items-center`}>
                <div className="w-[280px] h-[150px] bg-white flex justify-center items-center rounded-md shadow-sm">
                    <div className="flex flex-col">
                        <LoadingSpinnerMessage text="ດຳເນີນການ" />
                    </div>
                </div>
            </div>
            <div className=" relative flex justify-center items-center w-[360px] h-[130px] rounded-md p-1.5">
                <img className="object-cover w-full h-full rounded-md" src={imageUrl} alt="Slider Image" />

                {/* Dropdown for actions */}
                <div className="absolute flex justify-end items-start top-3 right-3 w-full h-full">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/30 hover:bg-gray-300/45">
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => (
                            <span className="flex justify-center items-center text-base text-gray-600 cursor-pointer">
                                <HiDotsVertical />
                            </span>
                        )}>
                            <Dropdown.Item onClick={handleEditStatus}>
                                {slider_visibility === "disable" ? (
                                    <span className="flex">
                                        <HiCheck className="text-lg text-gray-400 mr-2" /> Enable
                                    </span>
                                ) : (
                                    <span className="flex">
                                        <HiOutlineBan className="text-lg text-gray-400 mr-2" /> Disable
                                    </span>
                                )}
                            </Dropdown.Item>

                            <Dropdown.Item 
                            onClick={()=>(handleModel(true))}
                            >
                                <HiPencilAlt className="text-lg text-gray-400 mr-2" /> Edit Menu
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() =>
                                    alertconfirm(
                                        () => handleDelete(),
                                        `ຕ້ອງການລົບ ?`,
                                        "question"
                                    )
                                }
                            >
                                <HiOutlineTrash className="text-lg text-gray-400 mr-2" /> Delete
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SliderItem;
