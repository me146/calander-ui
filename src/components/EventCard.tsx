import React from 'react'

const EventCard = () => {
  return (
    <div className=' w-full flex flex-col justify-start items-start mx-[10px] mt-2 mb-2 border border-none bg-[#7E93FF] bg-opacity-[10%] rounded-l-[3px] rounded-r-[7px]'>
        <div className='w-full px-[7px] pb-[5px] pt-[3px] border-l-[2.5px] border-l-[#F00] rounded-tl-[3px]'>
            <div className='flex justify-start items-start shrink-0 '>
                <span className='text-xs font-normal uppercase leading-4 text-black'>0:00 - 1:00</span>
            </div>
        </div>
        <div className=' w-full px-[7px] pb-[5px] pt-[2px]  border-l-[2.5px] border-l-[#EAF956] rounded-bl-[3px]'>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center pr-2 pt-2 lg:pt-0'>
                <p className='font-normal text-xs lg:text-sm leading-4 text-[#7E93FF]'>Finn daud</p>
                <p className='font-normal text-[11px] leading-4 uppercase text-[#7E93FF] lg:mt-[7px]'>3\4</p>
            </div>
        </div>
    </div>
  )
}

export default EventCard