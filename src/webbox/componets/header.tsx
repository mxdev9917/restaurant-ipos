import { Link } from "react-router-dom"

function header() {
    return (
        <div>
            <div className="bg-white h-10 flex items-center justify-between text-gray-500 px-[20px] text-[12px] border-solid border-b-2 shadow-sm ">

                <div className="h-[100%] w-auto  flex items-center ">
                    <div>
                        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </div>
                    <div className="flex flex-col absolute h-[100%] bg-red-400">
                        <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                        <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                        <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                        <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                    </div>
                </div>
                <div className="">
                    <Link className="mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>
                        Sign In
                    </Link>
                    <Link to={'#'} className="bg-transparent hover:bg-red-500 text-orange-500 font-semibold hover:text-white py-1 px-4 border border-orange-500 hover:border-transparent rounded">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default header