import React from 'react';
import Image from 'next/image';
import { Input } from "@nextui-org/react";

export default function FeedbackPage() {
    return (
        <div className="flex flex-col items-center p-12 h-screen ">

            <label className='text-3xl font-bold pb-10'>Feedback Form</label>


            <div className='flex flex-col gap-4 w-full pb-10'>
                <Input
                    isReadOnly
                    type="text"
                    label="Name"
                    variant="bordered"
                    placeholder='Name Surname'
                    // defaultValue="Name"
                    className="max-w-xs"
                />

                <Input
                    isReadOnly
                    type="text"
                    label="Contact"
                    variant="bordered"
                    placeholder='junior@nextui.org'
                    // defaultValue="junior@nextui.org"
                    className="max-w-xs"
                />
            </div>

            <div className='flex flex-col items-start w-full pb-4'>
                <div>Share</div>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <Input
                isReadOnly
                type="email"
                label="Comment"
                variant="bordered"
                // defaultValue="junior@nextui.org"
                placeholder='Add your comments...'
                className="max-w-xs"
            />
        </div>
    );
}
