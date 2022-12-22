// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { GoSearch } from 'react-icons/go'
// import imageHome from '../assets/images/Home_group.png'

// type Props = {}

// const Home = (props: Props) => {
//   return (
//     <div className='h-full'>
//       <div className=' py-8 h-[80vh] min-h-[915px] w-[80%] flex flex-col items-center justify-center gap-5 lg:w-[70%] lg:flex-row lg:justify-between mx-auto'>
//         {/* TEXT LEFT */}
//         <div className='w-full lg:w-[550px] flex flex-col items-center justify-center gap-6'>
//           <h1 className='text-4xl font-medium text-textBlack md:text-5xl xl:text-7xl'>
//             Build your <br></br>
//             <span className='italic font-medium text-darkGreen'>Future. </span>Build <br /> 
//             {/* <div className='w-[600px] border border-b-[2px] border-lightGreen translate-x-[-60%]'/> */}
//             Your
//             <span className='italic font-medium text-lightGreen'> Dream.</span>
//             {/* <div className='w-full border border-b-[2px] border-lightGreen  ml-[-1400px]'/> */}

//           </h1>
//           <p className='px-6 w-full hidden font-light text-gray break-all lg:inline-block'>
//             Lorem Ipsum is simply dummy text of the has been the industry's
//             standard dummy text Ipsum is simply dummy.
//           </p>

//           {/* SEARCH ohne funktionalität */}
//           <div className='mt-6 flex flex-col items-center justify-center gap-1 md:mt-10 lg:mt-6'>
//             <div className='flex items-center justify-center'>
//               <label className='relative'>
//                 <GoSearch className='w-[20px] absolute top-3.6 left-5 text-gray text-opacity-50 md:top-3 ' />
//                 <input
//                   type='text'
//                   className='w-full  py-2 box-border placeholder:text-center rounded-full bg-darkBeige placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
//                   placeholder='Search'
//                 />
//               </label>
//             </div>

//             {/* Browser Ads button */}
//             <button className='h-[40px] w-[250px] mt-2 rounded-full bg-lightGreen text-background md:w-[350px] lg:mt-3'>
//               <NavLink to={'/adslist'}>Browse Ads</NavLink>
//             </button>
//           </div>
//         </div>

//         {/* IMAGE right/botton */}
   
//            <img
//           className='w-full max-w-xl  z-30 lg:w-[600px] lg:mt-0'
//           src={imageHome}
//            ></img>
      
       
//       </div>

//       {/* elemente (kreis-linie) */}
    
//         {/* <div
//           area-label='left line'
//           className='w-[53%] block absolute z-10 left-0 top-[16.5rem] border-b-[2px] border-lightGreen lg:w-[35%] md:w-[53%] md:top-[20.5rem] lg:top-[24rem] lg:border-b-[4px]'
//         ></div> */}
//         <div
//           area-label='right line'
//           className='w-[54%] block absolute  top-[19.5rem] right-0 border-b-[2px] border-lightGreen xl:w-[77%] lg:w-[69%] md:w-[54%] md:top-[25rem] lg:top-[29rem] lg:border-b-[4px]'
//         ></div>
//         <div
//           area-label='circle'
//           className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:absolute lg:top-[460px] lg:right-[-250px] lg:translate-y-[-50%] lg:rounded-full md:bg-lightGreen'
//         ></div>
    
//     </div>
//   )
// }

// export default Home







import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import imageHome from '../assets/images/Home_group.png'
import UniButton from '../Components/UniButton'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='mx-auto lg:w-[90%] w-full h-full min-h-[918px] flex justify-center items-center lg:justify-end'>
      <div className=' py-8  h-full   w-[100%]  sm:w-[50%] flex flex-col items-center justify-around gap-10 lg:ml-[85px] lg:gap-0  md:w-full lg:flex-row  md:flex-wrap md:justify-center  lg:justify-start  md:items-center  mx-auto'>
        {/* TEXT LEFT */}
        <div className='w-full flex flex-col items-center justify-center gap-6 md:w-[70%] lg:w-[50%]   '>
          <h1 className='text-[45px] leading-none font-medium text-textBlack sm:text-[53px] lg-text-7 xl:text-[80px] md:text-6xl '>
            Build your <br></br>
            <span className='italic font-medium text-darkGreen'>Future. </span>Build <br /> 
            {/* <div className='w-[600px] border border-b-[2px] border-lightGreen translate-x-[-60%]'/> */}
            Your
            <span className='italic font-medium text-lightGreen'> Dream.</span>
            {/* <div className='w-full border border-b-[2px] border-lightGreen  ml-[-1400px]'/> */}

          </h1>
          <p className='w-[80%] h-[80px] hidden font-light text-gray break-words xl:max-w-[450px] xl:text-lg xl:pt-2 lg:inline-block'>
            Lorem Ipsum is simply dummy text of the has been the industry's
            standard dummy text Ipsum is simply dummy.
          </p>

        </div>

        {/* IMAGE right/botton */}
    
             <img
              className='w-[80%] max-w-[250px] z-30 xl:max-w-[500px]  lg:max-w-[370px] lg:mb-[-100px] lg:ml-0xl:ml-[0px]'
              src={imageHome}
            ></img>

          {/* SEARCH ohne funktionalität */}
          <div className='mt-6 flex flex-col items-center justify-center gap-3 lg:pt-[0px]  lg:self-start sm:w-[450px] lg:w-[50%] '>
          
            <div className='w-full flex items-center justify-center '>
              <label className='relative w-full sm:w-[80%] xl:w-[60%] '>
                <GoSearch className=' w-[20px] absolute top-3.6 left-5 text-gray text-opacity-50 md:top-3 ' />
                <input
                  type='text'
                  className='w-full py-[12px] px-5 box-border placeholder:text-center rounded-full bg-darkBeige shadow-inner placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
                  placeholder='Search'
                />
              </label>
            </div>

            {/* Browser Ads button */}
              <UniButton 
                text='Browse Ads'
                type='button'
                className='w-full sm:w-[80%] lg:w-[50%] xl:w-[40%]'
              />
           
            {/* <button className='h-[40px] w-[250px] mt-2 rounded-full bg-lightGreen text-background md:w-[350px] lg:mt-3'>
              <NavLink to={'/adslist'}>Browse Ads</NavLink>
            </button> */}
          </div>
      </div>

      {/* elemente (kreis-linie) */}
    
        <div
          area-label='left line'
          className='w-[53%] absolute z-10 left-0 top-[16.1rem] border-b-[2px] border-lightGreen lg:w-[35%] sm:top-[16.3rem] sm:w-[51%] md:top-[16.5rem] lg:top-[23.3rem] lg:border-b-[4px] xl:top-[23.7rem] xl:w-[32%]'
        ></div> 
        <div
          area-label='right line'
          className='w-[54%] absolute  top-[19rem] right-0 border-b-[2px] border-lightGreen  lg:w-[69%] md:w-[54%] sm:top-[19.6rem] md:top-[20.2rem] lg:top-[27rem] lg:border-b-[4px] xl:top-[28.6rem] xl:w-[71%]'
        ></div>
        <div
          area-label='circle'
          className='hidden xl:block w-[332px] h-[332px] absolute top-[460px] right-[-250px] translate-y-[-50%] rounded-full md:bg-lightGreen'
        ></div>
    
    </div>
  )
}

export default Home
