import { Link } from "react-router-dom";
import { useAuth } from "../../context/context";
import { useEffect, useState } from "react";

function Logo() {
    const { data } = useAuth();
    const [pathURL, setPathURL] = useState("");

    useEffect(() => {
        // Check if data and data.user_role are defined before accessing user_role
        if (data && data.user_role) {
            const role = data.user_role;
            if (role === "user" ||role === "chef" ) {
                setPathURL("");
            } else {
                setPathURL("/dashboard");
            }
        }
    }, [data]);

    return (
        <Link to={pathURL} className="flex ms-2 gap-1">
            <img src="/images/ipos.png" className="h-8 sm:h-11" alt="Logo" />
            <span className="self-center text-xl pt-2 font-extrabold text-orange-500 sm:text-4xl whitespace-nowrap">
                IPOS.LA
            </span>
        </Link>
    );
}

export default Logo;
