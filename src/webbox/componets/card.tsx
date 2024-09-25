import { Link } from "react-router-dom"

function Card() {
    return (
        <div className="flex flex-col w-[250px]   bg-slate-50 rounded-xl py-50 px-5  shadow-md m-2">
            <div className="flex justify-center flex-col items-center py-5">
                <div className="flex justify-center items-center text-xl sm:text-4lg font-extrabold h-16 w-44 bg-slate-100 text-orange-500   rounded-b-lg rounded-t-4xl shadow-2xl  ">FREE</div>
                <div className="flex flex-col  mt-5 w-full h-auto ">
                    <p className="flex mb-1">
                        <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                        <span className="pl-1">ihfosigfoisgf</span>
                    </p>
                    <p className="flex mb-1">
                        <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                        <span className="pl-1">ihfosigfoisgf</span>
                    </p>
                    <p className="flex mb-1">
                        <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                        <span className="pl-1">ihfosigfoisgf</span>
                    </p>
                    <p className="flex mb-1">
                        <svg className="w-7 h-7 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>

                        <span className="pl-1">ihfosigfoisgf</span>
                    </p>
                </div>
               <p className=" text-3xl font-bold ">300,000 <span>ກີບ</span></p>
               <p className="mt-1 text-orange-500">frist month</p>
               <Link to={"/payment"} className="mt-3 text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Default</Link>
            </div>
        </div>
    )
}


export default Card