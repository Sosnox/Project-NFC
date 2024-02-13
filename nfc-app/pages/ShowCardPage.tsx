import React, { useEffect, useState } from 'react';
import selectAllCards from "@/api/selectAllCard";
import CardBoard from "@/components/card_board";
import Image from 'next/image';
import Link from 'next/link';

interface Card {
    id_card: number,
    title_card: string,
    detail_card: string,
    path_image_card: string,
    count_scan_card: number,
}

export default function ShowCardPage() {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const data = await selectAllCards(2);
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCards();
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center mx-10">
            <label className='text-2xl font-bold mt-10 mb-10 underline'>BoardGame : WareWolf</label>
            <Link href={'./BoxBoardGame'}>
                <Image src="/imageBoardGame/Werewolf.svg" alt="Werewolf" width={300} height={400} />
            </Link>
            <h1 className="mt-10 font-bold text-[20px]">การ์ดเกม WereWolf</h1>
            <div className="mb-24">
                {/* Render cards here */}
                {cards.map(card => (
                    <CardBoard />
                ))}
            </div>
        </div>
    );
}
