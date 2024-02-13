import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from "@nextui-org/react";
import FiveStar from '@/components/fivestar';

export default function FeedbackPage() {

    type InputValue = {
        name: string;
        contact: string;
        comment: string;
        rating: number;
    }

    const [valueInput , setValueInput] = useState<InputValue>({
        name: '',
        contact: '',
        comment: '',
        rating: 0
    })
    
    const submitData = () => {
        // valueInput ////////////////////////////////////////////////////////////////////
    }
    console.log(valueInput)

    return (
        <div className="flex flex-col items-center p-12 ">
            <label className='text-3xl font-bold pb-10'>Feedback Form</label>
            <div className='flex flex-col gap-4 pb-5 w-full justify-center items-center'>
                <Input
                    type="text"
                    label="Name"
                    variant="bordered"
                    placeholder='Name Surname'
                    onChange={(e) => {
                        setValueInput(prevState => ({
                            ...prevState,
                            name: e.target.value,
                        }));
                    }}
                    className="max-w-xs"
                />
                <Input
                    type="text"
                    label="Contact"
                    variant="bordered"
                    placeholder='junior@nextui.org'
                    onChange={(e) => {
                        setValueInput(prevState => ({
                            ...prevState,
                            contact: e.target.value,
                        }));
                    }}
                    className="max-w-xs"
                />
            </div>

            <div className='flex flex-col w-full pb-4 sm:items-center items-start'>
                <div>Share</div>
                <FiveStar rating={(rating : number) => {
                    setValueInput(prevState => ({
                        ...prevState,
                        rating: rating,
                    }));
                }} />
            </div>
            <Input
                type="email"
                label="Comment"
                variant="bordered"
                onChange={(e) => {
                    setValueInput(prevState => ({
                        ...prevState,
                        comment: e.target.value,
                    }));
                }}
                placeholder='Add your comments...'
                className="max-w-xs"
            />
            <div className='flex w-full justify-end md:justify-center'>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5 hover:bg-slate-600' onClick={submitData}>Submit</button>
            </div>
        </div>
    );
}
