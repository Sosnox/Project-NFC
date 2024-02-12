import CardBoard from "@/components/card_board";
import Image from 'next/image';
import Link from 'next/link'

export default function ShowCardPage (){
    return (
       <div className="flex flex-col items-center justify-center mx-10">
            <label className='text-2xl font-bold mt-10 mb-10 underline'>BoardGame : WareWolf</label>
            <Link href={'./BoxBoardGame'}><Image src="/imageBoardGame/Werewolf.svg" alt="Werewolf" width={300} height={400} /></Link>
            <h1 className="mt-10 font-bold text-[20px]"> การ์ดเกม WereWolf</h1>
            <div className="mb-24">
                <CardBoard />
            </div>
       </div> 
    );
}
