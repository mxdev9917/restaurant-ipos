
import Sidebar_Nav from "../components/sitebar";
import ResItem from "./components/res_item";
import { useAuth } from "../../context/context";


function profile() {
    const { data } = useAuth();
    const res = data?.restaurants || [];
    return (
        <div className="flex flex-col h-screen ">
            <Sidebar_Nav />
            <div className="flex justify-center  sm:ml-72 mt-5">
                <div className="flex flex-col space-y-3  w-full max-w-xs sm:max-w-md md:max-w-3xl h-fit px-2 ">
                    <p className="font-medium text-lg">ຈັດການຮ້ານ</p>
                    {
                        res?.length ? (
                            res?.map((item:any) => (
                                <ResItem key={item.restaurant_ID} name={item.restaurant_name} />
                            ))
                        ) : (
                            <p></p>
                        )
                    }


                </div>
            </div>
        </div>

    );

}


export default profile;