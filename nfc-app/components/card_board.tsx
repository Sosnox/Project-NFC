// CardBoard.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from './card';
// import selectCard from '@/api/selectAllCard';



const nameCard = [
  "villager",
];

interface CardProps {
  title_card: string;
}

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
            src={`/imageBoardGame/Card/${name}.svg`}
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
