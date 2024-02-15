import { FaQuestionCircle } from "react-icons/fa";
import React, { useState } from 'react';
import Image from "next/image";
import noti from "../public/noti.png";

function IconNavbar (){
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return(

         <div>
            <button onClick={togglePopup}>
                <div className="icon-nav">
                    <FaQuestionCircle className="absolute right-11 top-5 " size={25} />
                </div>
            </button>
            {isOpen && (
                <div>

                    <div className="square"></div>
                    <div className="noti-show">
                        <Image src={noti} alt="noti" ></Image>
                    </div>

                </div>
            )}
        </div>
    );

}

export default IconNavbar;