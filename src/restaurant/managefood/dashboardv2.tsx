import Sidebar_Nav from "../componets/sidebar-nav"
import ChartComponent from "../componets/charts/chartsales";
import ChartTopProToDay from "../componets/charts/charttopprotoday";
import ChartchartKichen from "../componets/charts/chartkichen";

function Dashboardv2() {

    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className="p-1 sm:ml-64 flex-col">
                <div className=" flex  flex-col 2xl:flex-row   mt-14">
                    <div className=" w-full h-fit  flex p-2 flex-col justify-between mr-2.5">

                        <div className="flex flex-col lg:flex-row w-full gap-x-1">
                            <div className="flex flex-row lg:flex-col xl:flex-row w-full">
                                <div className=" w-full h-fit m-1 bg-white shadow-md  p-3">
                                    <div className="flex items-end">
                                        <svg className="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                        </svg>
                                        <p className="text-sm md:text-base">Total Sales</p>
                                    </div>
                                    <span className="text-[23px] text-gray-600 font-bold">50.000.000</span>

                                    <p className="text-xs text-green-500">+10% from yesterday</p>
                                </div>
                                <div className=" w-full  h-fit m-1 bg-white shadow-md  p-3">
                                    <div className="flex items-end">
                                        <svg className="w-8 h-8 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z" />
                                        </svg>
                                        <p className="text-sm md:text-base">Total Order</p>

                                    </div>
                                    <span className="text-[23px] text-gray-600 font-bold">500 </span>
                                    <p className="text-xs text-green-500">+10% from yesterday</p>
                                </div>
                            </div>
                            <div className="flex flex-row lg:flex-col xl:flex-row w-full ">
                                <div className=" w-full h-fit m-1 bg-white shadow-md  p-3">
                                    <div className="flex items-end">
                                        <svg className="w-8 h-8 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                        </svg>
                                        <p className="text-sm md:text-base">Total Sales</p>
                                    </div>
                                    <span className="text-[23px] text-gray-600 font-bold">50.000.000</span>

                                    <p className="text-xs text-orange-500">+10% from yesterday</p>
                                </div>
                                <div className=" w-full  h-fit m-1 bg-white shadow-md  p-3">
                                    <div className="flex items-end">
                                        <svg className="w-8 h-8 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z" />
                                        </svg>
                                        <p className="text-sm md:text-base">Total Order</p>

                                    </div>
                                    <span className="text-[23px] text-gray-600 font-bold">500 </span>
                                    <p className="text-xs text-orange-500">+10% from yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" flex  flex-col 2xl:flex-row mx-4 bg-white   rounded-xl shadow-md">
                    <div className=" w-full h-fit min-h-80 flex p-2 flex-col justify-between  bg-white ">
                        <ChartComponent />
                    </div>
                    <div className="bg-white 2xl:w-[800px] w-full p-4">
                        <ChartTopProToDay />
                    </div>


                </div>
                <div className=" flex  flex-col 2xl:flex-row gap-3  m-3">
                    <div className=" w-full h-fit flex flex-col justify-between  bg-white shadow-md">
                        <ChartchartKichen />
                    </div>
                    <div className="bg-white shadow-md w-full h-fit">
                        <ChartchartKichen />
                    </div>
                    <div className=" w-full h-[300px]">
                        <div className="relative overflow-x-auto shadow-md ">
                            <table className="w-full h-[340px] text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product name
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white  even:bg-gray-50 e border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Apple MacBook Pro 17"
                                        </th>

                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>

                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>

                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td className="px-6 py-4">
                                            $1999
                                        </td>

                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>

                                        <td className="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4">
                                            $99
                                        </td>

                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Google Pixel Phone
                                        </th>

                                        <td className="px-6 py-4">
                                            Phone
                                        </td>
                                        <td className="px-6 py-4">
                                            $799
                                        </td>

                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Google Pixel Phone
                                        </th>

                                        <td className="px-6 py-4">
                                            Phone
                                        </td>
                                        <td className="px-6 py-4">
                                            $799
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
}

export default Dashboardv2;
