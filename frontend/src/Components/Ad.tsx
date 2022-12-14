import React from 'react'

type Props = {}

function Ad({}: Props) {
  return (
    <div className='w-full md:py-1 sm:px-5 py-[0px]'>
        <div className='md:h-[80px] h-[110px] w-full flex sm:justify-around justify-around items-center border-textBlack border-opacity-25 md:border-y-2 border-b-0 border-t-2 text-[14px] gap-2 md:px-0 px-3'>

           
             {/* Profile Image*/}
             <div className='w-[60px] self-start'>
                <div className='md:w-[40px] w-[50px] md:h-[50px] h-[75px] ml-[10px] mb-[20px] rounded-b-[40px] flex self-start justify-center items-end bg-lightBeige'>
                    <div className='md:w-[30px] w-[40px] md:h-[30px] h-[40px] mb-1 self-end rounded-full bg-white'>
                        <img src="" alt="" />
                    </div>
                </div>
             </div>
          

            {/* Links */}
            <div className='md:w-[500px] sm:w-[200px]  w-[180px] flex  md:flex-row flex-col  justify-start items-center'>
                <div className='sm:w-[200px] w-[150px] flex '>

                    {/* Title, Sector */}
                    <div className='sm:w-[250px] text-textBlack'>
                        <p className='text-[18px] text-textBlack'>Product Manager</p>
                        <p className='text-[16px] text-textBlack text-opacity-50'>Sector</p>
                    </div>
                </div>

                <div className='sm:w-[200px] w-[150px] flex justify-end sm:gap-2 gap-1 '>
                    {/* Location */}
                    <div className='flex justify-center items-center p-1 sm:w-[100px] w-[100px] border-2 border-lightBeige rounded-full sm:text-[12px] text-[10px] text-textBlack text-opacity-50 '>
                        <p>100% remote</p>
                    </div>
                    {/* Category */}
                    <div  className='flex justify-center items-center p-1 sm:w-[100px] w-[100px] bg-lightBeige rounded-full sm:text-[12px] text-[10px]  text-textBlack text-opacity-50'>
                        <p>Category</p>
                    </div>
                </div>
            </div>
          
           
          {/* Rechts */}
          <div className='md:w-[180px] w-[100px] h-full md:self-center self-end flex md:flex-row flex-col md:justify-between  justify-end items-start gap-1 '>
            {/* Created At */}
            <div className=' md:text-[16px]  text-[14px] text-textBlack text-opacity-50'>
                <p>20.02.2023</p>
            </div>

            {/* Wage */}
            <div className='flex justify-center items-center mr-[-20px] md:h-[80px] md:w-[70px]  w-[70px] h-[60px]   md:rounded-r-[20px] md:rounded-tl-[0px]  rounded-t-[20px] bg-lightBeige md:text-[16px] text-[14px]  text-textBlack text-opacity-70'>
                <p className='text-[18px]'>
                    10€ 
                    <p className='text-[14px] text-textBlack text-opacity-50'>
                        / hour
                    </p>
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ad