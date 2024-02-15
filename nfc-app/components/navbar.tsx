import logo from "../public/logo.png";
import Image from 'next/image';
import Link from 'next/link';

import IconNavbar from "./notification_navbar";
import { useState } from "react";

function Navbar(){
    return (
        <nav className="navbar z-20">
            <div className="tranform translate-x-[-10px] nav-img flex ">
                <Link href="./Home"><Image src={ logo } alt="logo" width={200}/></Link>

                
            </div>
            <div>
                <IconNavbar></IconNavbar>
            </div>
            
        </nav>
    );
}


export default Navbar;



