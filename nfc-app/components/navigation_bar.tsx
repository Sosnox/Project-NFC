import Image from 'next/image'
import Link from 'next/link'

import { FaHome } from "react-icons/fa";
import { GiCardPick } from "react-icons/gi";
import { PiDotsNineBold } from "react-icons/pi";



export default function NavigationBar() {
    return (
      <nav className="flex justify-between navi-bar">

        <div className="tranfrom translate-x-[20px] icon">
            <Link href={'/Home'}>
                <FaHome size={30} className="icon-home"/>
                <label htmlFor="icon-home" className="text-xs ">หน้าหลัก</label>
            </Link>
        </div>

        <div className="icon">
            <Link href={'/BoardGame'}>
                <GiCardPick size={30}/>
                <label htmlFor="icon-home" className="text-xs">เกมส์</label>
            </Link>
        </div>

        <div className="tranfrom translate-x-[-20px] icon">
        <Link href={'/Service'}>
                <PiDotsNineBold size={30} />
                <label htmlFor="icon-home" className="text-xs">บริการ</label>
            </Link>
        </div>
        

      </nav>
    )
}