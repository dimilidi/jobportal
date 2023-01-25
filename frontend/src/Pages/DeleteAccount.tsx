// Hooks
import { useNavigate } from 'react-router-dom'
import useDecorationLine from '../Hooks/useDecorationLine'
// Components
import UniButton from '../Components/UniButton'
import BrowseJobs from '../Components/BrowseJobs'
// framer-motion
import { motion } from 'framer-motion'
import useUser from '../Hooks/useUser'
// Images
import DeleteAccountImage from '../assets/images/DeleteAccount.png'
import UniButtonDark from '../Components/UniButtonDark'

const DeleteAccount = () => {
  //DECORATION LINE
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
        className='pb-20 mx-auto w-[90%] h-[800px] md:min-h-0[910px]
          flex justify-center flex-col items-center
          pt-[70px] md:pt-[150px] xl:pt-[290]
          sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]'
      >
        {/* ICON & BROWSE JOBS */}
        <div className='w-full flex items-start py-5'>
          <BrowseJobs />
        </div>
        {/* ICON & BROWSE JOBS END */}

        {/* MAIN CONTAINER */}
        <div
          className='bg-white p-10 pb-40
            flex justify-center items-center flex-col
            rounded-xl shadow-standard 
            md:px-16'
        >
          <h1 className='text-4xl md:text-5xl font-semibold'>
            Delete <br />
            <span 
            ref={accountText}
            className='italic text-lightGreen font-semibold'>
              Account
            </span>
          </h1>

          <div className='w-[80%] text-center mt-8  text-gray'>
            <p>Are you sure you want to delete your account?</p>
          </div>

          <UniButton
            text='Delete'
            className='my-5'
            onClick={() => handleDelete()}
          />
          <UniButtonDark
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
          className='w-[180px] top-[34rem] scale-x-[-1] absolute 
            left-[20%] 
            sm:left-[3%]
            md:left-[6%] md:w-[230px] md:top-[30rem] md:scale-x-[-1] md:-rotate-[20deg]
            lg:left-[16%]
            xl:left-[27%] 
            2xl:left-[34%] 2xl:top-[36rem]'
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
