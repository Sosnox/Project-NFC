import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardBoard from '../../components/card_board';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from 'next/router';
import selectByIdBoardGame from '@/api/BoardGame/selectByIdBoardGame';

interface Boardgame {
    id_boardgame: number,
    title_game: string,
    detail_game: string,
    path_image_boardgame: string,
    player_recommend_start: number,
    player_recommend_end: number,
    recommend: boolean,
    age_recommend: number,
    time_playing: number,
    type_game: string,
    count_scan_boardgame: number
}


export default function BoxBoardGamePage() {
    const [boardGame, setBoardGame] = useState<Boardgame | null>(null);
    const router = useRouter();
    const id_boardgame_from_path = router.query.BoxBoardGame as string;
    const goBack = () => {
        window.history.back();
    }

    useEffect(() => {
        const fetchData = async () => {
            if (id_boardgame_from_path) {
                try {
                    const dataBoardGame = await selectByIdBoardGame(Number(id_boardgame_from_path));
                    setBoardGame(dataBoardGame[0]);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, [id_boardgame_from_path]);

    if (!boardGame) {
        return <div>Loading...</div>;
    }

    console.log(boardGame, "boardGame")

    return (
        <div className="p-10">

            <div className='absolute left-5 back-button'>
                <button onClick={goBack}> <MdOutlineArrowBackIos className="text-left" size={40} /> </button>
            </div>

            <div className="flex justify-center pb-10">
                <h1 className="font font-bold text-[25px] underline">BoardGame : {boardGame.title_game}</h1>
            </div>

            <div className='flex flex-col items-center'>
                <iframe className="mb-10 rounded-lg" width="300" height="200" title="Vdo" src="https://www.youtube.com/embed/d0OoxTyyaDw"></iframe>

                <label className='text-2xl font-bold pb-5 underline'>คำอธิบาย</label>

                <label className='h-screen overflow-y-auto'>
                    <p><label className='text-sm font-bold pb-5 '>รายละเอียด : </label> {boardGame.detail_game}</p>
                    <p><label className='text-sm font-bold pb-5 '>ประเภทบอร์ดเกมส์ :</label> {boardGame.type_game}</p>
                    <p><label className='text-sm font-bold pb-5 '>เหมาะสำหรับผู้เล่นอายุตั้งแต่ : </label>{boardGame.age_recommend}+ ปี</p>
                    <p><label className='text-sm font-bold pb-5 '>จำนวนผู้เล่น</label> {boardGame.player_recommend_start} - {boardGame.player_recommend_end} คน</p>
                    <p><label className='text-sm font-bold pb-5 '>เวลาเล่นต่อเกมส์ ประมาณ</label> {boardGame.time_playing} นาที</p>
                    {/* จำนวนการ์ด 75 ใบ
                    วิธีการเล่น คู่มือเป็นภาษาอังกฤษ*
                    บอร์ดเกมส์ Werewolf จะทำการแบ่งผู้เล่นออกเป็น 2 ฝ่ายด้วยกันนั้นก็คือ Villagers และ Werewolves ซึ่งทั้ง 2 ฝ่ายจะมีจุดมุ่งหมายในการชนะที่แตกต่างกัน ในฝ่าย Villagers จะต้องตามหาตัว Werewolves ให้ได้ซึ่งถ้าหาได้ครบตามจำนวนเกมส์จะจบลงและ Villagers จะเป็นฝ่ายที่ชนะไปในทันที ส่วนทางด้าน Werewolves ก็ต้องต้องคอยหลบเลี่ยง, แฝงตัวให้แนบเนียนไปกับกลุ่มชาวบ้าน และทำการสังหารชาวบ้านให้ได้มากที่สุด ผู้เล่นที่เป็นหมาป่าจะใช้เวลาในช่วงกลางคืน เลือกเหยื่อเพื่อทำการสังหารทิ้ง โดยคนที่ทำหน้าที่เป็นผู้ดำเนินเกมส์จะเป็นคนขานชื่อ Role ต่างๆ เมื่อมีบทบาทที่ขานชื่อ ผู้เล่นถึงจะสามารถลืมตาได้ และผ่านการเล่นในช่วงกลางคืนจบลง ก็จะต่อในช่วงเช้า ซึ่งในช่วงเช้านี่เองผู้เล่นคนไหนที่ใช้ความสามารถพิเศษอะไรไว้ผลก็จะมาเกิดขึ้นในช่วงนี้ สำหรับคนที่ถูกหมาป่าเลือกสังหารก็จะตายลง การเล่นในตอนเช้าจะให้ผู้เล่นทุกคนทำการพูดคุยกัน เพื่อที่ในตอนท้ายสุดจะทำการเลือกผู้เล่นหนึ่งคนออกจากเกมส์ เมื่อผู้เล่นถูกเลือกให้ออกจากเกม ผู้เล่นคนนั้นจะต้องเปิดเผยการ์ดว่าตนเองได้รับบทเป็นอะไร ถ้าเป็นหมาป่าเกมส์จะจบลงและ Villagers จะเป็นผู้ชนะทันที ถ้าไม่ใช่ เกมส์จะวนการเล่นกลางวันกลางคืนไปเรื่อยๆ จนกว่าจะบรรลุเป้าหมายของแต่ละฝ่าย */}
                    </label>
            </div>
        </div>
    );
}
