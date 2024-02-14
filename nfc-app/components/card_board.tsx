// CardBoard.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from './card';


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




];

const CardBoard: React.FC = () => {
  const router = useRouter();

  const viewCard = (name: string) => {
    router.push(`/Card/?name=${name}`);
  };

  return (
    <div className='grid h-full grid-cols-3 gap-4 pt-12'>
      {nameCard.map((name, index) => (
        <div key={index} onClick={() => viewCard(name)} className="cursor-pointer">
          <Image
            src={`/img_re/${name}.png`}
            alt={name}
            width={300}
            height={280}
          />
        </div>
      ))}
    </div>
  );
};

export default CardBoard;
