import Language from "./language";
import Logo from "../../restaurant/components/logo";
import { Button, Navbar } from "flowbite-react";
import { HashLink } from "react-router-hash-link";  // Correct import

function Navbars() {
    return (
        <div className="w-full flex justify-center">
            <Navbar fluid rounded className="bg-[#3a393a] w-full xl:w-2/3 lx:w-3/3 xl:rounded-full rounded-none px-0 xl:px-8 ">
                <Navbar.Brand to="/">
                    <Logo />
                </Navbar.Brand>

                <div className="flex items-center gap-2 md:order-2">
                    <Language />
                    <Button className="focus:outline-none focus:ring-0 hover:text-orange-500 hover:border-orange-500">Sign in</Button>
                    <Navbar.Toggle className="flex bg-transparent hover:bg-transparent border-none text-sm focus:ring-0" />
                </div>

                <Navbar.Collapse className="hover:bg-transparent">
                    <HashLink to="/#home" active className="">
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
