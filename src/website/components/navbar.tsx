import Language from "./language";
import Logo from "../../restaurant/components/logo";
import { Navbar } from "flowbite-react";
import { HashLink } from "react-router-hash-link";  // Correct import
import { Link } from "react-router-dom";

function Navbars() {
    return (
        <div className="w-full flex justify-center">
            <Navbar fluid rounded className="bg-[#3a393a] w-full xl:w-2/3 lx:w-3/3 xl:rounded-full rounded-none px-0 xl:px-8 ">
                <Navbar.Brand to="/">
                    <Logo />
                </Navbar.Brand>

                <div className="flex items-center gap-2 md:order-2">
                    <Language />
                    <Link to={'/authentication'} className=" ring-1 text-white ring-white px-2 py-1 rounded-lg hover:text-orange-500 hover:ring-orange-500">SING IN</Link >
                    <Navbar.Toggle className="flex bg-transparent hover:bg-transparent border-none text-sm focus:ring-0" />
                </div>

                <Navbar.Collapse className="hover:bg-transparent">
                    <HashLink to="/#home"  className="">
                        <p className="pl-1 hover:text-orange-500 text-white"> Home</p>
                    </HashLink>
                    <HashLink to="/#pricing" className="border-none text-white hover:bg-transparent">
                        <p className="pl-1 hover:text-orange-500">Pricing</p>
                    </HashLink>
                    <HashLink to="/#download" className="border-none text-white hover:bg-transparent ">
                        <p className="pl-1 hover:text-orange-500">Download App</p>
                    </HashLink>
                    <HashLink to="/#contact" className="border-none text-white hover:bg-transparent">
                        <p className="pl-1 hover:text-orange-500">Contact us</p>
                    </HashLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}



export default Navbars;
