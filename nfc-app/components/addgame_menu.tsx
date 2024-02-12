import Image from 'next/image';
import Link from 'next/link'

import { MdKeyboardArrowRight } from "react-icons/md";

import wherewolf from '../public/imageBoardGame/werewolf.jpg';
import avaron from '../public/imageBoardGame/avalon.webp';
import logo from '../public/tobecon.png';


function AddGameCard (){ 
    const images = [
        wherewolf,
    ];

    return (
        <div className='grid gap-6 pb-24'>
            {
                images.map((image, index) => (

                    
                    <div className='rounded-3xl p-2 game-menu mx-10' >
                        <Link href={'./ShowCardPage'}> <BoardGameImage key={index} imageURL={image} /> </Link> 
                    </div>
            ))}

        </div>
    );
}

function BoardGameImage ({ imageURL }: { imageURL: any}){ 
    return (
        <div>
            <div className='flex shrink-0'>
                <Image src={ imageURL } alt={ imageURL }/>
                <div className='flex items-center pl-20'>
                    <span className="text-boardgame font-bold ">Where Wolf</span>
                    <MdKeyboardArrowRight className="transform translate-x-[30px]" size={50}/>

                </div>
            </div>
            
        </div>
        
    );
}

export default AddGameCard;