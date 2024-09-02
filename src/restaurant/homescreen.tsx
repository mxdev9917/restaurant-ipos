import NavBar from "../restaurant/componets/navbar"
import Sidebar from "../restaurant/componets/sidebar"
function HomeScreen() {

    return (
        <div className="w-screen h-screen">
            <NavBar />
            <div className="flex w-full">
                <Sidebar />
                <div className="flex w-full bg-slate-200">
                    khogldihr
                </div>
            </div>
        </div>
    )
}

export default HomeScreen