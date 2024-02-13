import { MdAccessTime } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { PiApplePodcastsLogoBold } from "react-icons/pi";


function BoxDetail (){
    return(
        <div className="flex flex-col pt-1 absolute left-[120px]">
            <text className="text-[20px] font-bold">Were Wolf</text>
            <div className="flex flex-col text-[15px] ">
                <text className="flex">
                    <MdAccessTime size={23} />
                    <span className="ml-2">15+ นาที</span>
                </text>

                <text className="flex">
                    <MdGroup size={23}/>
                    <span className="ml-2">5-75 คน</span>
                </text>

                <text className="flex">
                    <PiApplePodcastsLogoBold size={23}/>
                    <span className="ml-2">15+ ปี</span>
                </text>
            </div>

        </div>
    );
}


export default BoxDetail