// Hooks
import { Navigate, useNavigate } from 'react-router-dom'
import useDecorationLine from '../Hooks/useDecorationLine'
// Components
import UniButton from '../Components/UniButton'
import UniButtonWhite from '../Components/UniButtonWhite'
import BrowseJobs from '../Components/BrowseJobs'
// framer-motion
import { motion } from 'framer-motion'
import useUser from '../Hooks/useUser'
// Images
import DeleteAccountImage from '../assets/images/DeleteAccount.png'

const DeleteAccount = () => {
  const accountText = useDecorationLine({orientation: 'right'})
  const navigate = useNavigate()
  const deleteAccount = useUser().deleteAccount
  const handleDelete = () => {
    deleteAccount()
    navigate('/')
  }
  return (
    <motion.section
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <div
        className='pb-20 mx-auto pr-2 w-[90%] h-full min-h-[910px]
          flex justify-center flex-col items-center
          sm:w-[60%] lg:w-[50%] md:pt-[0]'
      >
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
            <span 
            ref={accountText}
            className='italic text-lightGreen font-semibold'>
              Account
            </span>
          </h1>

          <div className=' w-[80%] text-center mt-8  text-gray'>
            <p>Are you sure you want to delete your account?</p>
          </div>

          <UniButton
            text='Delete'
            className='my-5'
            onClick={() => handleDelete()}
          />
          <UniButtonWhite
            text='Back to Account'
            onClick={() => navigate('/account')}
          />

          {/* ELEMENTS */}

          {/* CIRCLE */}
          <div
            area-label='circle'
            className='w-24 h-24 hidden 
              right-[-3rem] top-[280px]  
              rounded-full bg-lightGreen 
              lg:block absolute'
          ></div>
          {/* ELEMENTS END*/}

          {/* IMAGES */}
          <div>
        <img
          src={DeleteAccountImage}
          alt='box'
          className='w-[180px] top-[38rem] scale-x-[-1] absolute 
            left-[20%]
            sm:left-[3%]
            md:left-[6%] md:w-[230px] md:top-[35rem] md:scale-x-[-1] md:-rotate-[20deg]
            lg:left-[16%]
            xl:left-[31%]
            2xl:left-[32%]'
        />
      </div>
          {/* IMAGES END */}
        </div>
        {/* MAIN CONTAINER END */}
      </div>
    </motion.section>
  )
}

export default DeleteAccount
