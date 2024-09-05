import ChartSales from "../componets/charts/chartsales";
import Sidebar_Nav from "../componets/sidebar-nav"
function Dashboard() {
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64 flex-col">
                <div className=" flex  flex-col 2xl:flex-row   mt-14">
                    <div className=" w-full h-fit min-h-80 flex p-2 flex-col justify-between mr-2.5">
                        <div className="flex flex-col p-3">
                            <p className="text-xl md:text-2xl font-medium">Today’s Sales</p>
                            <p className="text-xs md:text-sm">Sales Summary</p>
                        </div >
                        <div className="flex flex-col lg:flex-row w-full gap-x-1">
                            <div className="flex flex-row lg:flex-col xl:flex-row w-full">
                                <div className=" w-full h-40 m-1 bg-white shadow-2xl rounded-lg p-3">
                                    <svg className="w-12 h-12 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                    </svg>
                                    <span className="text-[23px] text-gray-600 font-bold">50.000.000</span>
                                    <p className="text-sm md:text-base">Total Sales</p>
                                    <p className="text-xs text-orange-500">+10% from yesterday</p>
                                </div>
                                <div className=" w-full  h-40 m-1 bg-white shadow-2xl rounded-lg p-3">
                                    <svg className="w-12 h-12 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z" />
                                    </svg>
                                    <span className="text-[23px] text-gray-600 font-bold">500 </span>
                                    <p className="text-sm md:text-base">Total Order</p>
                                    <p className="text-xs text-orange-500">+10% from yesterday</p>
                                </div>
                            </div>
                            <div className="flex flex-row lg:flex-col xl:flex-row w-full ">
                                <div className=" w-full h-40 m-1 bg-white shadow-2xl rounded-lg p-3">
                                    <svg className="w-12 h-12 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                    </svg>
                                    <span className="text-[23px] text-gray-600 font-bold">50.000.000</span>
                                    <p className="text-sm md:text-base">Total Sales</p>
                                    <p className="text-xs text-orange-500">+10% from yesterday</p>
                                </div>
                                <div className=" w-full  h-40 m-1 bg-white shadow-2xl rounded-lg p-3">
                                    <svg className="w-12 h-12 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z" />
                                    </svg>
                                    <span className="text-[23px] text-gray-600 font-bold">500 </span>
                                    <p className="text-sm md:text-base">Total Order</p>
                                    <p className="text-xs text-orange-500">+10% from yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 w-full h-80">hoigoiguigiu</div>


                </div>

                <div className=" flex  flex-col 2xl:flex-row   mt-3">
                    <div className=" w-full h-fit min-h-80 flex p-2 flex-col justify-between mr-2.5 bg-slate-500">

                    </div>
                    <div className="bg-slate-800 w-full h-80">hoigoiguigiu</div>


                </div>
                <div className=" flex  flex-col 2xl:flex-row   mt-3">
                    <div className=" w-full h-fit min-h-80 flex p-2 flex-col justify-between mr-2.5 bg-slate-500">


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Color
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>
                                        <td className="px-6 py-4">
                                            White
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td className="px-6 py-4">
                                            $1999
                                        </td>
                                        <td class="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>
                                        <td className="px-6 py-4">
                                            Black
                                        </td>
                                        <td className="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4">
                                            $99
                                        </td>
                                        <td class="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Google Pixel Phone
                                        </th>
                                        <td className="px-6 py-4">
                                            Gray
                                        </td>
                                        <td className="px-6 py-4">
                                            Phone
                                        </td>
                                        <td className="px-6 py-4">
                                            $799
                                        </td>
                                        <td class="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Google Pixel Phone
                                        </th>
                                        <td className="px-6 py-4">
                                            Gray
                                        </td>
                                        <td className="px-6 py-4">
                                            Phone
                                        </td>
                                        <td className="px-6 py-4">
                                            $799
                                        </td>
                                        <td class="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="bg-slate-800 w-full h-80">hoigoiguigiu</div>


                </div>
            </div>


        </div>
    );
}

export default Dashboard;
