import { Link } from "react-router-dom"

function header() {
    return (
        <div className="bg-white h-10 flex items-center justify-between text-gray-500 px-[20px] text-[12px] border-solid border-b-2 shadow-sm drop-shadow-md md:drop-shadow-xl">
            <div className="h-[100%] w-auto  flex items-center ">
                <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
                <Link className=" mr-5 hover:text-orange-500 active:hover:text-orange-600 focus:outline-none focus:border-solid  focus:text-orange-600 focus:border-b-2" to={"#"}>menu1</Link>
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
    )
}

export default header