// CardBoard.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from './card';
// import selectCard from '@/api/selectAllCard';


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
            src={`http://210.246.215.173:8000/static/${card.title_card}.png`}
            alt={card.title_card}
            width={300}
            height={280}
          />
        </div>
    </div>
  );
};

export default CardBoard;
