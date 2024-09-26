import { Link } from "react-router-dom"

function tableItemSale(){
    return(
        <Link to={'/cart'} className="flex justify-center items-center w-full h-full bg-green-500 rounded-md shadow-inner">
         <p className="text-2xl font-bold text-white">ໂຕະ1</p>
        </Link>
    )
}

export default tableItemSale