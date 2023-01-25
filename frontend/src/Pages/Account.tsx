// Hooks
import { useNavigate } from 'react-router-dom'
import useAdList from '../Hooks/useAdList'
// Components
import UniButton from '../Components/UniButton'
import Ad from '../Components/Ad'
import UserCard from '../Components/UserCard'
import { useEffect } from 'react'
import useUser from '../Hooks/useUser'
// framer-motion
import { motion } from 'framer-motion'
import PaginationButtons from '../Components/PaginationButtons'
import UniButtonDark from '../Components/UniButtonDark'
import useDecorationLine from '../Hooks/useDecorationLine'

const Account = () => {
  const navigate = useNavigate()
  const { user, loading } = useUser()
  const { pageCount, page, setPage } = useAdList(`userId=${user?._id}`)
  const { adList } = useAdList(`userId=${user?._id}&page=${page}`)

  
  useEffect(() => {
    if (!user && !loading) {
      navigate('/auth-required')
    }
  }, [user])

 

  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      className='mx-auto pt-[80px] w-full h-full flex flex-col items-center md:gap-3 lg:min-h-[970px] lg:flex-row lg:gap-0'
    >
      {/* SEMICIRCLE */}
      <div className='w-[50px] h-24 hidden absolute right-0 rounded-tl-full rounded-bl-full bg-lightGreen md:hidden lg:block lg:top-[125px] xl:top-[130px]' />
      {/* LINE */}
      <div className='border-b-[3px] border-lightGreen absolute hidden lg:w-[20%] xl:w-[30%] md:block lg:top-[175px] xl:top-[180px] lg:right-0' />

      {/* USER CARD */}
      <div className='h-full w-[95%] relative flex justify-center lg:w-[32%]'>
        <UserCard />
      </div>

      {/* ADS && BUTTONS CONTAINER */}
      <div className='w-[90%] min-w-fit max-w-[650px]  flex flex-col justify-start items-center lg:h-[700px] lg:max-w-[800px] lg:gap-5'>
        
        <h3 className='w-[80%] py-2 mt-8 self-center shadow rounded-lg text-center text-xl font-semibold text-gray text-opacity-100 lg:mb-[-20px] xl:mb-[-10px] lg:w-[87%] lg:flex lg:justify-start xl:w-[85%]'>
          All Active Ads:
        </h3>

        {/* ADS */}
        <div className='w-full max-w-[600px] h-fit my-[5px] py-10 flex flex-wrap justify-center items-start rounded-xl text-gray bg-darkBeige bg-opacity-36 md:rounded-[21px] lg:px-0 lg:mb-0 lg:h-[450px]'>
          <div className='w-full flex flex-wrap justify-center items-center md:justify-start lg:justify-center'>

            {adList?.length === 0 ? (
              <div
                className='w-full relative text-center font-bold text-gray text-opacity-60 
                  md:text-2xl lg:top-[180px] xl:top-[130px] 
                  '>
                You currently don't have <br></br> any ads 
              </div>
            ) : (
              adList?.map((ad) => <Ad key={ad._id} ad={ad} />)
            )}
          </div>
        </div>
        {
        <div
          aria-label='paginationButtons'
          style={{visibility: pageCount >0 ? 'visible' : 'hidden'}}
          className='w-full lg:mb-0 lg:flex lg:justify-end xl:w-[90%]'>
          <PaginationButtons page ={page} setPage = {setPage} pageCount={pageCount}/>
        </div>}
        {/* BUTTONS */}
        <div
            className='
                w-full flex flex-row justify-center items-center gap-2 md:gap-3
                sm:justify-center sm:flex-row md:justify-center
                lg:justify-start md:mt-14 lg:mt-0'
          >
            <UniButtonDark
              text='Post Ad'
              type='button'
              onClick={() => navigate('/post-ad')}
            
            />
            <UniButton
              text='Browse Ads'
              type='button'
              onClick={() => navigate('/adslist')}
              
            />
          </div>
        </div>
    </motion.div>
  )
}

export default Account
