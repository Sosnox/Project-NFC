import React from 'react';
import Image from 'next/image';
import CardBoard from '../components/card_board';
import wherewolf from '../public/imageBoardGame/werewolf.jpg';
import logo from '../public/tobecon.png';
import Link from 'next/link'
import ShowCardPage from '@/pages/ShowCardPage';

function AddGameTopic() {
    
    const images = [
        logo, logo, wherewolf, logo, logo
    ];

    return (
        <div className="pb-16 ">
            <div className='flex justify-center pb-14 mt-14 text-[30px] font-bold underline'>
                <h1> บอร์ดเกมแนะนำ </h1>
            </div>
            <div className="flex justify-center gap-4 overflow-auto h-60">

                {
                    images.map((image, index) => (
                        <Link href={'./ShowCardPage'}>  <BoardGameImage key={index} imageURL={image} /> </Link>
                ))}

            </div>

        </div>
    );

    function BoardGameImage ({ imageURL }: { imageURL: any}){ 
        return (
            <div className='boardgame shrink-0'>
                <Image src={ imageURL } alt={ imageURL }/>
                
            </div>
        );
    }

}

export default AddGameTopic;