

type Props = {}

function Ad({}: Props) {
  return (
    <div className='sm:px-5 w-full px-3 py-[0px]'>
        <div className=' h-[110px] w-full flex justify-around items-center border-lightBeige border-y-2  text-[14px] '>
             {/* Left */}
            <div className="w-full h-full flex self-start justify-start ">
                {/* Profile Image*/}
                <div className='w-[60px] flex'>
                    <div className=' w-[50px] h-[75px] rounded-b-[40px] flex justify-center items-end bg-lightBeige'>
                        <div className='w-[40px]  h-[40px] mb-1 self-end rounded-full bg-white'>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            
               
                <div className='sm:w-[250px] w-[180px]  px-3 flex  flex-col justify-center items-start'>
                    <div className='w-[150px] flex '>

                        {/* Title, Sector */}
                        <div className='self-start  text-textBlack'>
                            <p className='text-[18px] text-textBlack'>Product Manager</p>
                            <p className='text-[16px] text-textBlack text-opacity-50'>Sector</p>
                        </div>
                    </div>

                    <div className='sm:w-[200px] w-[150px] flex  gap-1 '>
                        {/* Location */}
                        <div className='md:w-[120px] sm:text-[12px] flex justify-center items-center p-1  w-[100px] border-2 border-lightBeige rounded-full text-[10px] text-textBlack text-opacity-50 '>
                            <p>100% remote</p>
                        </div>
                        {/* Category */}
                        <div  className='sm:w-[120px] sm:text-[12px] flex justify-center items-center p-1  w-[100px] bg-lightBeige rounded-full  text-[10px]  text-textBlack text-opacity-50'>
                            <p>Category</p>
                        </div>
                    </div>
                </div>
            </div>

           
           
            {/* Right */}
            <div className=' w-[100px] h-full flex flex-wrap justify-end  items-end  '>
                {/* Created At */}
                <div className=' md:text-[16px]  text-[14px] text-textBlack text-opacity-50'>
                    <p>20.02.2023</p>
                </div>

                {/* Wage */}
                <div className='md:text-[16px] flex justify-center items-center   w-[70px] h-[60px]  rounded-t-[20px] bg-lightBeige  text-[14px]  text-textBlack text-opacity-70'>
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