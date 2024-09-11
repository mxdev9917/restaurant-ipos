import { Link } from "react-router-dom"
import ZoneItem from "./componets/zoneitem"
import TableItemSale from "./componets/tableitemsale";
import Nav from "./componets/nav";
function selectTatles() {

    const items = Array.from({ length: 50 }, (_, index) => index);
    return (
        <div className="w-screen flex flex-col">
           <Nav/>
            <div className="h-fit w-full flex gap-3 px-5 overflow-x-scroll ">
                {items.map((_item, index) => (
                    <div key={index} className=" py-5 ">
                        <ZoneItem />
                    </div>
                ))}
            </div>

            <div className="h-[86vh] w-full grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-10 2xl:grid-cols-12 md:grid-cols-6  lg:grid-cols-8 place-items-stretch    overflow-y-scroll">
                        {items.map((_, index) => (
                            <div key={index} className="m-1 w-[95%] h-44" >
                                <TableItemSale />
                            </div>
                        ))}
                    </div>

        </div>
    )
}

export default selectTatles