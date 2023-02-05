import React from 'react'
import { BsFillFilePostFill, BsFillPersonCheckFill, BsFillKeyboardFill } from 'react-icons/bs'
import { FaIndustry } from 'react-icons/fa'
import { AiOutlineBarChart } from 'react-icons/ai'



const ShortInfo = () => {
    return (
        <div className='pt-6'>
            <div className=' p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' >
                <h3>Short Info</h3>
                <div className='grid gap-3 pt-5'>
                    <div className='flex items-center gap-3'>
                        <BsFillFilePostFill className='text-[18px]' />
                        <p className='text-sm'>posted 1 days ago</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <BsFillPersonCheckFill className='text-[18px]' />
                        <p className='text-sm'>Job Poster: Sujan Chaudhary</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaIndustry className='text-[18px]' />
                        <p className='text-sm'>Industry: Information Technology</p>
                    </div >
                    <div className='flex items-center gap-3'>
                        <AiOutlineBarChart className='text-[18px]' />
                        <p className='text-sm'>Experience: Entry Level</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortInfo
