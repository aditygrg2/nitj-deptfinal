import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { departments } from '../../config/server';
function CenterImageScroll() {
    const center=useParams()?.center;
    // const image =useFetch(`/dept/${center}/Images`)?.data?.Images;
    
    const [value, setValue] = useState(0);
    const image = ['https://i.ibb.co/0mxp6kD/DSC-6239.jpg','https://i.ibb.co/h7KYvVD/DSC-5500.jpg','https://i.ibb.co/6J62KrN/DSC-5446.jpg'];
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(() => ((value === (image? image.length-1:-1) ? 0 : value + 1)));
        }, 6000);
        return () => clearInterval(interval);
    }, [value])
    return (
        <>
            <div className="mt-0 w-full">
                <div className="relative w-full overflow-hidden">
                    <div className='relative bg-gradient-to-b from-accent to-transparent bg-cover bg-center w-full items-center transition-all justify-center'>
                        <img src={image? image[value]:""} className='w-screen aspect-video sm:h-[450px] block align-middle' alt="" />
                        <div className='absolute bg-gradient-to-b from-accent to-transparent bg-cover bg-center flex flex-col w-full h-fit bottom-0 items-center justify-center p-1'>
                            <div className="flex text-lg text-center sm:text-2xl mx-2 mb-0 font-bold text-white">
                                <span className='flex'>{departments[center]}</span>
                            </div>
                            <h2 className="sm:text-xl mx-2 mt-1 font-bold text-white">
                                NITJ<span className="mx-2 font-medium uppercase">Welcomes you</span> 
                            </h2>
                        </div>
                        <div className='top-0 absolute w-full h-full flex items-center justify-between p-2'>
                            <button className='w-5 h-5 active:translate-y-1' onClick={()=>setValue(() => ((value === 0 ? (image?image?.length-1:-1) : value - 1)))}><svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/></svg></button>
                            <button className='w-5 h-5 active:translate-y-1' onClick={()=>setValue(() => ((value ===(image?image?.length-1:-1) ? 0 : value + 1)))}><svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CenterImageScroll