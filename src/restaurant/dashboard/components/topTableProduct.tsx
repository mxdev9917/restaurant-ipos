
interface TopTableProductProps {
    datalist: { food_ID: string, food_name: string, category: string, total_quantity: string, total_price: string }[]; // Assuming datalist is an array of objects
}

const TopTableProduct: React.FC<TopTableProductProps> = ({ datalist }) => {
    return <>
        <div className=" relative overflow-auto md:overflow-hidden   md:h-[76vh] ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
                    <tr className="flex items-center justify-between w-full h-14 text-left bg-gray-100 text-gray-800 font-semibold uppercase">
                        <th className="px-6 py-3 flex justify-start min-w-[10rem] w-20">ເມນູອາຫານ</th>
                        <th className="px-6 py-3 flex justify-start min-w-[7rem] w-20">ປະເພດອາຫານ</th>
                        <th className="px-6 py-3 flex justify-start min-w-[2rem] w-10">ຈຳນວນ</th>
                        <th className="px-6 py-3 flex justify-start min-w-[7rem] w-20">ລາຄາລວມ</th>
                        
                    </tr>
                </thead>
            </table>
            <div className="md:overflow-y-auto h-[283px]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                        {
                            datalist.map((item) => (
                                <tr key={item.food_ID}
                                    className="flex justify-between text-left border-b hover:bg-gray-50 transition-all ">

                                    <td className="px-6 py-3 flex justify-start items-end min-w-[10rem] w-20">
                                        {item.food_name}</td>

                                    <td className="px-6 py-3 flex justify-start items-end min-w-[7rem] w-20">
                                        {item.category}</td>
                                        <td className="px-6 py-3 flex justify-start items-end min-w-[2rem] w-10">
                                        {item.total_quantity}</td>
                                        <td className="px-6 py-3 flex justify-start items-end min-w-[7rem] w-20">
                                        {item.total_price}</td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default TopTableProduct;