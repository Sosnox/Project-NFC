import React, { useEffect, useState } from 'react';
import selectAllCards from "@/api/selectAllCard";
import CardBoard from "@/components/card_board";
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/components/input_search';

interface Card {
    id_card: number,
    title_card: string,
    detail_card: string,
    path_image_card: string,
    count_scan_card: number ,
}

type value = {
    name: string;
    index: number;
    nameCard: string;
}

const nameCard = [
    "villager",
    "werewolf",
    "seer",
    "cupid",
    "bodyguard",
    "auraseer",
    "drunk",
    "prince",
    "priest",
    "pi",
    "troublemaker",
    "witch",
    "oldhag",
    "apprenticeseer",
    "mayor",
    "hunter",
    "diseased",
    "pacifist",
    "ghost",
    "mason",
    "doppelganger",
    "lycan",
    "toughguy",
    "idiot",
    "wolfcup",
    "minion",
    "sorcerer",
    "hoodlum",
    "cursed",
    "tanner",
    "vampire",
    "cultleader",
    "revealer",
    "mentalist",
    "huntress",
    "mystic",
    "alphawolf",
    "spellcaster"
  ]

export default function ShowCardPage() {
    const [cards, setCards] = useState<Card[]>([]);

    // useEffect(() => {
    //     const fetchCards = async () => {
    //         try {
    //             const data = await selectAllCards(1);
    //             setCards(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchCards();
    // }, []);

    // console.log(cards)

    return (
        <div className="flex flex-col items-center justify-center mx-10 mt-10">
            <Search/>
            <label className='text-2xl font-bold mb-10 underline'>BoardGame : WareWolf</label>
            <Link href={'./BoxBoardGame'}>
                <Image src="/imageBoardGame/Werewolf.svg" alt="Werewolf" width={300} height={400} />
            </Link>
            <h1 className="mt-10 font-bold text-[20px]">การ์ดเกม WereWolf</h1>
            <div className=" mt-4 grid grid-cols-3 gap-4">
                {nameCard.map((card) => (
                    <CardBoard name={card} />
                ))}
            </div>
        </div>
    );
}
