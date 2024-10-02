import { Link } from "react-router-dom"


function Logo() {
    return <div>
        <Link to={"/"} className="flex ms-2 gap-1  md:me-24">
            <img src="/images/ipos.png" className="h-11 " alt=" Logo" />
            <span className="self-center text-xl pt-2 font-extrabold text-orange-500 sm:text-4xl whitespace-nowrap ">IPOS.LA</span>
        </Link>
    </div>
}


export default Logo