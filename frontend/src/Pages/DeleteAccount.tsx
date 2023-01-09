// Hooks
import { Navigate, useNavigate } from 'react-router-dom'
// Components
import UniButton from '../Components/UniButton'
import UniButtonWhite from '../Components/UniButtonWhite'
import BrowseJobs from '../Components/BrowseJobs'
// framer-motion
import {motion} from 'framer-motion'
// Images

const DeleteAccount = () => {
  const navigate = useNavigate()
  return (
    <motion.section
    initial={{ width: '100%'}}
    animate={ {width: '100%'}}
    exit={{x:window.innerWidth}} 
   >
  <div 
  className='pb-20 mx-auto pr-2 w-[90%] h-full min-h-[910px]
    flex justify-center flex-col items-center
    sm:w-[60%] lg:w-[50%] md:pt-[0]'>
    
    {/* ICON & BROWSE JOBS */}
    <div className='w-full flex lg:ml-[50%] p-5'>
      <BrowseJobs />
    </div>
    {/* ICON & BROWSE JOBS END */}

    {/* MAIN CONTAINER */}
    <div
      className='bg-white p-10 pb-40
        flex justify-center items-center flex-col
        rounded-xl shadow-standard 
        md:w-[400] md:px-16 '
    >
      <h1 className=' text-4xl md:text-5xl'>
        Delete <br />
        <span className='italic text-lightGreen font-semibold'>Account</span>
      </h1>

      <div className=' w-[80%] text-center mt-8'>
        <p>Are you sure you want to delete your account?</p>
      </div>

      <UniButton
        text='Delete'
        className='my-5'
        // onClick={}
        />
      <UniButtonWhite
        text='Back to Account'
        onClick={() => navigate('/account')} />

      {/* ELEMENTS */}
      {/* Line */}
      <div
        area-label='line'
        className='w-[52%] min-w-[240px] border-b-[3px] 
              border-lightGreen sm:block 
              absolute top-[318px] md:top-[327px] right-0'
      ></div>

      {/* Circle */}
      <div
        area-label='circle'
        className='w-24 h-24 hidden 
              right-[-3rem] top-[280px]  
              rounded-full bg-lightGreen 
              lg:block absolute'
      ></div>
      {/* ELEMENTS END*/}

      {/* IMAGES */}
      {/* <div>
        <img
          // src={}
          alt='postman'
          className='scale-x-[-1] absolute
              sm:top-[460px] sm:left-4 max-h-96 overflow-hidden 
              md:max-h-full  md:top-[360px] md:-left-4 
              lg:left-32 lg:top-[300px] 
              xl:left-56 xl:top-[260px] 
              2xl:left-96  '
        />
      </div> */}
      {/* IMAGES END */}
    </div>
    {/* MAIN CONTAINER END */}
</div>

   </motion.section>
  )
}

export default DeleteAccount