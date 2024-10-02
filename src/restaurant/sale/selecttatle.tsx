import ZoneItem from "./components/zoneitem"
import TableItemSale from "./components/tableitemsale";
import Nav from "../components/nav";
import { useState } from "react";
import { Link } from "react-router-dom";
function selectTatles() {
    const [isCheckModel, setIsCheckModel] = useState(false)
    const items = Array.from({ length: 50 }, (_, index) => index);
    function isCheckMenu() { }
    function handleClick() {
        setIsCheckModel(!isCheckModel)
    }
    return (
        <div className="w-screen flex flex-col">
            <Nav handelMenu={isCheckMenu} isCheck={false} />

            <div className="h-32  w-full flex gap-3 pt-20 items-center ">

                <div className="ml-3">
                    <button className="w-28 h-fit bg-orange-500 text-white p-1.5 rounded-lg right-1 focus:ring-1 focus:ring-orange-500">
                        ໂຊນຮ້ານທັ້ງໝົດ
                    </button>
                </div>
                <div className="w-full flex gap-3 overflow-x-auto snap-x ">
                    {items.map((_item, index) => (
                        <div key={index} className=" ">
                            <ZoneItem />
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-[86vh] w-full grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-10 2xl:grid-cols-12 md:grid-cols-6  lg:grid-cols-8 place-items-stretch    overflow-y-scroll">
                {items.map((_, index) => (
                    <div key={index} className="m-1 w-[95%] h-44" >
                        <TableItemSale onClick={handleClick} />
                    </div>
                ))}
            </div>
            <div className={`${isCheckModel ? "block" : "hidden"} bg-black/30 w-full h-full absolute flex justify-center items-center`}>
                <div className="h-fit w-96 bg-white rounded-lg flex flex-col p-3 mx-5 sm:mx-0">
                    <div className="flex justify-between items-center border-b-2">
                        <p className="text-xl pb-2 text-gray-700 font-semibold">
                           ເລືອກເມນູ
                        </p>
                        <button
                            onClick={handleClick}
                            className=" text-red-500"
                        >
                            ຍົກເລິກ
                        </button>
                    </div>
                    <div className="w-full flex justify-evenly mt-3 text-white">
                        <button className="p-3 bg-yellow-400 w-full mr-1 rounded-lg">ຈອງໂຕະ</button>
                        <Link to={'/cart/1'} className="p-3 bg-green-500 w-full ml-1 flex justify-center rounded-lg">ເປີດໂຕະໄໝ່</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default selectTatles