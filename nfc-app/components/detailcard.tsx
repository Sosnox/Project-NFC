import React from 'react';

interface DetailCardProps {
  name: string;
}

interface DetailCardData {
  [key: string]: string;
}

const detailCard: DetailCardData = {
  "werewolf": "Typically werewolves are outnumbered by villagers 2 to 1. So a game of 6 players would have 2 werewolves. The goal of the werewolves is to decide together on one villager to secretly kill off during the night, while posing as villagers during the day so they're not killed off themselves. One by one they'll kill off villagers and win when there are either the same number of villagers and werewolves left, or all the villagers have died. This role is the hardest of all to maintain because these players are lying for the duration of the game.",
  "seer": "The seer is a special role that gets to look at one other player's card or two of the center cards. This role is on the side of the villagers and wins when all the werewolves have been killed off.",
  "hunter": "The hunter is a special role that gets to kill off one other player when they die. This role is on the side of the villagers and wins when all the werewolves have been killed off.",
  "villager": "The villager is a regular player with no special abilities. This role is on the side of the villagers and wins when all the werewolves have been killed off.",
  "bodyguard": "The bodyguard is a special role that gets to protect one other player from being killed off. This role is on the side of the villagers and wins when all the werewolves have been killed off.",
};

export default function DetailCard({ name }: DetailCardProps) {
  return (
    <div className='flex flex-col text-lg items-center'>
      <label className='text-[20px] font-bold my-5 underline'>Detail Card</label>
      <div className='text-base '>
        {detailCard[name]}
      </div>
    </div>
  );
}
