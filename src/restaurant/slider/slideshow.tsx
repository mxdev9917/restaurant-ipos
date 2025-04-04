import { useTranslation } from "react-i18next";
import Sidebar_Nav from "../components/sidebar-nav"
import { HiMenuAlt1 } from "react-icons/hi";
import EditSlide from "./components/editSlide";
import { useEffect, useState } from "react";
import AddSlide from "./components/addSlide";
import { slideService } from "../../services/slide/SlideService";
import { generalErrors } from "../../utils/error";
import { useAuth } from "../../context/context";
import SliderItem from "./components/sliderItem";
const Slideshow = () => {
    const { t } = useTranslation();
    const [items, setItems] = useState<any[]>([]);
    const { data, token } = useAuth();
    const [isCheckModel, setisCheckModel] = useState(false)
    const [even, setEven] = useState(true)
    const [slider_ID,setSlider_ID]=useState("")

    const handleOpenMenu = (value: boolean) => {
        setisCheckModel(value);
        setEven(true);
    }
 const handleOpenMenuEdit = (value: boolean,slider_ID:string) => {
        setisCheckModel(value);
        setEven(false);
        setSlider_ID(slider_ID);
    }



    const fetchingData = async () => {
        try {
            let resId = String(data.restaurant_ID);
            const res = await slideService.GetAllSlideService(resId, token || "");
            if (res.status === "200") {
                setItems(res.data);
            }
        } catch (error) {
            console.log(error)
            generalErrors(error);
        }
    }

    useEffect(() => {
        fetchingData();
    }, [])

    
    return (
        <div className="relative flex flex-col h-full w-[100.0vw] overflow-visible">
            <Sidebar_Nav />
            <div className="p-4 sm:ml-64">
                <div className="flex justify-between w-full ">
                    <div className=" text-gray-500 flex gap-2 items-center text-xs md:text-sm">
                        <p className="hover:text-orange-500" > {t("slideshow")}</p>
                    </div>
                    <button
                        onClick={() => (handleOpenMenu(true))}
                        className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-xs md:text-sm">
                        <span >{t("add")}</span>
                    </button>
                </div>
                <div className="flex gap-2 w-full">
                    <HiMenuAlt1 className="text-3xl" /><span>ລາຍການ</span> <div className="w-full border-b-[1px]"></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {
                        items.map((item, index) => {
                            return <SliderItem 
                            key={index} 
                            slider_ID={item.slider_ID} 
                            slider_url={item.slider_url} 
                            slider_visibility={item.slider_url} 
                            handleModel={(value: boolean) => handleOpenMenuEdit(value, item.slider_ID)} 
                        />;
                        
                        })
                    }

                </div>
            </div>
            <div className={`w-screen ${!isCheckModel ? 'hidden' : 'block'} h-screen bg-black/10 absolute z-50 flex justify-center items-center`}>
    {even ? 
        <AddSlide handleModel={handleOpenMenu} /> 
        : 
        <EditSlide 
            handleModel={(value: boolean) => handleOpenMenuEdit(value,slider_ID)} 
            slider_ID={slider_ID} 
            // slider_url={item.slider_url} 
            // slider_visibility={item.slider_url}
        />
    }
</div>



        </div>
    )
}
export default Slideshow