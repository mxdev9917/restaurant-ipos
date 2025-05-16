import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/context";
import { useEffect, useState } from "react";

function Logo() {
    const { data } = useAuth();
    const [pathURL, setPathURL] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        // Check if data and data.user_role are defined before accessing user_role
        if (data && data.user_role) {
            const role = data.user_role;
            if (role === "user" || role === "chef") {
                setPathURL("");
            } else {
                setPathURL("/dashboard");
            }
        }
    }, [data]);

    const hangleClick = () => {
        navigate(pathURL);
    }

    return (
        <div onClick={hangleClick} className=" ms-2 gap-1 sm:flex hidden">
            <img src="/images/ipos.png" className="h-8 sm:h-11" alt="Logo" />
            <span className="self-center text-xl pt-2 font-extrabold text-orange-500 sm:text-4xl whitespace-nowrap">
                IPOS.LA
            </span>
        </div>
    );
}

export default Logo;
