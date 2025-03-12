interface MenuItemProps {
    id: string;
    foodName: string;
    qty: string;
    description:string;
    tableName:string
    pathImg: string;
  }
  
  const MenuItem: React.FC<MenuItemProps> = ({ id, foodName, qty,description,tableName, pathImg }) => {

    return (
        <>
            <div className="flex flex-col w-[300px] h-96 shadow-inner bg-slate-50 rounded-md p-3">
                <img className="h-40" src="https://www.ilovepdf.com/storage/blog/43-1623746165-Digital-Signature.jpeg" alt="" />
                <div className="flex justify-between mt-2 px-1.5 border-b-[1px]">
                    <p className="text-xl font-semibold text-orange-500">{foodName}</p>
                    <p>ຈຳນວນ {qty}</p>
                </div>
                <div className=" h-full my-2 px-1.5">
                    <p className=" text-[12px] text-gray-700 ">{description}</p>
                </div>
                <div className="flex h-fit justify-end w-full ">
                   <div className="flex gap-2 text-white">
                   <button className="bg-orange-500 hover:bg-orange-400 px-3 py-1 rounded-sm">ຮັບອໍເດີ</button>
                   {/* <button className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-sm">ຍົກເລີກ</button> */}
                   </div>
                </div>
            </div>
        </>
    );
}

export default MenuItem;