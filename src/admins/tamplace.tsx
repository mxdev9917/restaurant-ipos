import { useEffect } from "react";
import { useAuth} from "../context/context";
import Sidebar_Nav from "./components/sidebar-nav";
function Tamplace(){
    const{token,logout}=useAuth();
    useEffect(() => {
        if (!token) {
          logout();
        }
      }, [token]);
    return (
        <div className="flex flex-col">
            <Sidebar_Nav />
            <div className=" sm:ml-64">
                tamplace
                <p>{token}</p>
            </div>
          
        </div>
    );

}

export default Tamplace