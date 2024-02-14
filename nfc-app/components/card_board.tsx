// CardBoard.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from './card';
// import selectCard from '@/api/selectAllCard';


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



interface CardProps {
  card: {
    id_card: number,
    title_card: string,
    detail_card: string,
    path_image_card: string,
    count_scan_card: number,
  }
}


const CardBoard: React.FC<CardProps> = ({ card }) => {
  const router = useRouter();

  const viewCard = (name: string) => {
    router.push(`/Card/?name=${name}`);
  };

  return (
    <div className='h-full'>
        <div onClick={() => viewCard(card.title_card)} className="cursor-pointer">
            <Image
            src={`/img_re/${card.title_card}.png`}
            alt={card.title_card}
            width={300}
            height={280}
            />
          )
        </div>
    </div>
  );
};

export default CardBoard;
