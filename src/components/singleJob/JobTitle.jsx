import React from 'react'
import { GoLocation } from 'react-icons/go'
import { BiTimeFive } from 'react-icons/bi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { MdOutlineTimerOff } from 'react-icons/md'
import { FcBriefcase, FcBookmark } from 'react-icons/fc'





const JobTitle = () => {
    return (
        <div className=' pt-6'>
            <div className='flex flex-wrap gap-x-[20px] p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
                {/* image */}
                <div className='w-[200px] h-[200px]'>
                    <img src='https://plus.unsplash.com/premium_photo-1664698362212-0b9f241f55b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8' className='w-[180px] h-[180px]' />
                </div>
                {/* detaisl */}
                <div>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex flex-wrap'>
                            <h4 className='text-[26px]'>Java Developer</h4> <span className='text-[26px] text-gray-400'>@Hunchha Digital Agency</span>
                        </div>
                        <div>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Follow</button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Message</button>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4 pt-6'>
                        <div className='flex'>
                            <GoLocation className='text-[20px] text-gray-400' />
                            <p className='text-gray-400'>itahari-7, kheti khola</p>
                        </div>
                        <div className='flex'>
                            <BiTimeFive className='text-[20px] text-gray-400' />
                            <p className='text-gray-400'>Full Time</p>
                        </div>
                        <div className='flex'>
                            <FaRegMoneyBillAlt className='text-[20px] text-gray-400' />
                            <p className='text-gray-400'>Rs. 40000- Rs. 50000</p>
                        </div>
                        <div className='flex'>
                            <MdOutlineTimerOff className='text-[20px] text-gray-400' />
                            <p className='text-gray-400'> Application Deadline: 2023-2-13</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8 pt-6'>
                        <a className="relative flex w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-green-400 hover:text-black hover:bg-white">
                            <FcBriefcase className='text-[22px] ' /> <p className='pl-2'>Apply for this job</p>
                        </a>
                        <a className="relative flex w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-green-400 hover:text-black hover:bg-white">
                            <FcBookmark className='text-[22px] ' /> <p className='pl-2'>Bookmark</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobTitle
