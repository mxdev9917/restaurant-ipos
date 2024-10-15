

import Language from "./language"
import Logo from "../../restaurant/components/logo"
import { Button, Navbar } from "flowbite-react";

function Navbars() {
    return (
        <div className="w-full flex justify-center">
            <Navbar fluid rounded className="bg-[#3a393a] w-full xl:w-2/3 lx:w-3/3 xl:rounded-full rounded-none px-0 xl:px-8 ">
                <Navbar.Brand >
                    <Logo />
                </Navbar.Brand>

                <div className="flex items-center gap-2 md:order-2">
                    <Language />
                    <Button className="focus:outline-none focus:ring-0 hover:text-orange-500 hover:border-orange-500">Sing in</Button>
                    <Navbar.Toggle className="flex bg-transparent hover:bg-transparent border-none text-sm focus:ring-0" />

                </div>

                <Navbar.Collapse className="hover:bg-transparent">
                    <Navbar.Link href="/home" active className="">
                       <p className="pl-1 hover:text-orange-500"> Home</p>
                    </Navbar.Link>
                    <Navbar.Link href="#" className="border-none text-white hover:bg-transparent">
                       
                        <p className="pl-1 hover:text-orange-500 ">Pricing</p>
                    </Navbar.Link>
                    <Navbar.Link href="#download" className="border-none text-white hover:bg-transparent ">
                        
                        <p className="pl-1 hover:text-orange-500">Download App</p>
                    </Navbar.Link>
                    <Navbar.Link href="#" className="border-none text-white hover:bg-transparent">
                     
                         <p className="pl-1 hover:text-orange-500">Contact us</p>
                    </Navbar.Link> 
                </Navbar.Collapse>


            </Navbar>
        </div>
    );
}

export default Navbars
