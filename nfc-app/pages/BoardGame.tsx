import React from 'react';
import AddGameCard from '@/components/addgame_menu';
import { FaSearch } from "react-icons/fa";


export default function BoardGamePage() {
  return (
    <div className="pt-10">
      <div className='flex justify-center pb-7 text-[30px] font-bold'>
        <h1>All GameBoard</h1>
      </div>
      <div className='flex justify-center items-center pb-10 '>
        <input placeholder='Search' className='p-2 w-3/4 search-bar text-center text-lg transform translate-x-[10px]'></input>
        <FaSearch size={20} className='transform translate-x-[-40px]' />
      </div>
      <AddGameCard></AddGameCard>
    </div>
  );
}
