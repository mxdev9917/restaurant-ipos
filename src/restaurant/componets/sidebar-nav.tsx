import { useState } from "react"


function Sidebar_Nav() {
    const[hiddenAside ,sethiddenAside]=useState(true)
    function toggleHiddenAside(){
        sethiddenAside(!hiddenAside)
    }

    return (
        <div className="flex flex-col relative">
            <nav className="w-full h-16 bg-blue-600 flex justify-between items-center px-7">
                <div className="flex">
                    <button onClick={toggleHiddenAside} className="w-9 h-9 bg-transparent">
                        <svg className="w-8 h-8  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                        </svg>

                    </button>
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="src/assets/images/Qpos.png" className="h-11" alt="Flowbite Logo" />
                    </a>
                </div>
                <div>

                    <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar" />

                </div>

            </nav>
            <aside className={`${hiddenAside ? 'block' : 'hidden'} w-64 h-screen   bg-slate-200 absolute top-16`}></aside>



        </div>
    )
}

export default Sidebar_Nav