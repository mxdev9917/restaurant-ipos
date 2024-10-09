import { Link } from "react-router-dom"
function manualItem() {
    return (
        <div className=" justify-start  flex-col bg-white rounded-lg shadow-xl ">
            <iframe className="rounded-lg"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dNVAefUJAJ4"
                allowFullScreen
            />

            {/* <div className="w-auto h-auto">dfd</div> */}

            {/* <div className="flex justify-center items-center w-20 h-24 bg-slate-300 rounded-b-3xl rounded-tl-lg">
                <svg className="w-14 h-14 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z" />
                </svg>
            </div>
            <p className="px-3 pt-4 text-xl font-medium">ການໃຊ້ງານ</p>
            <p className="px-3  font-medium text-black opacity-60">Lorem Ipsum เวอร์ชั่นต่างๆ เข้าไว้ในซอฟท์แวร์ด้วย</p>
            <div className="flex gap-2 justify-start w-full h-full  px-1  pt-2 pb-1">
                <Link to="/video" className="w-fit h-fit bg-orange-500 px-3 py-1 rounded-md text-white">ວີດີໂອ</Link>
                <Link to="/read" className="w-fit h-fit bg-green-500 px-4 py-1 rounded-md text-white">ອ່ານ</Link>
            </div> */}




            {/* <svg className="flex-shrink-0 w-24 h-24 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <p className="py-3">ການໃຊ້ງານ</p>
            <div className="flex gap-2 justify-end w-full h-full px-1 py-2 ">
                <Link to="/video" className="w-fit h-fit bg-orange-500 px-3 py-1 rounded-md text-white">ວີດີໂອ</Link>
                <Link to="/read" className="w-fit h-fit bg-green-500 px-4 py-1 rounded-md text-white">ອ່ານ</Link>
            </div> */}


        </div>
    )
}

export default manualItem