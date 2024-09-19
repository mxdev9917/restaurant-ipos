import { Link } from "react-router-dom"
function manualItem() {
    return (
        <div className="flex  w-fit h-fit justify-start items-center flex-col bg-white rounded-lg shadow-inner  p-4 ">
            <svg className="flex-shrink-0 w-20 h-20 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <p className="py-3">ການໃຊ້ງານ</p>
            <div className="flex gap-2 justify-end w-full h-full px-1 py-2 ">
                <Link className="w-fit h-fit bg-orange-500 px-3 py-1 rounded-md text-white ">ວີດີໂອ</Link>
                <Link className="w-fit h-fit bg-green-500 px-4 py-1 rounded-md text-white ">ອ່ານ</Link>
            </div>


        </div>
    )
}

export default manualItem