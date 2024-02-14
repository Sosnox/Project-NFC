import React from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from "react-icons/md";

interface nameCardProps {
  name: string; 
}

export default function CardGamePage( {name} : nameCardProps) {
  const goBack = () => {
    window.history.back();
  }
  return (
    <div className="flex flex-col items-center mx-14"> 
      <div className='absolute left-5 back-button'> 
                <button onClick={goBack}> <MdOutlineArrowBackIos className="text-left" size={40}/> </button>
            </div>
      <button onClick={goBack}>
        <label className='flex justify-between gap-5 text-2xl font-bold pb-5 text-black-10 w-f'> Card : {name}  </label>
      </button>   
      <Image src={`/img_re/${name}.png`} alt={`${name}`} width={300} height={280} />
    </div>
  );  
}