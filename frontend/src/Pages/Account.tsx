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
      className='
      min-h-[885px]
      flex flex-col items-center justify-evenly gap-10
      lg:flex-row 
      xl:justify-center
      2xl:gap-0'>

      {/* SEMICIRCLE RIGHT SIDE*/}
      <div className='
      w-[60px] h-24 
      hidden absolute right-0 
      rounded-tl-full rounded-bl-full bg-lightGreen 
      xl:block
      xl:top-[7.2rem]'/>
     
      {/* LINE */}
      <div className='
      absolute hidden 
      border-b-[3px] border-lightGreen 
      md:block md:top-[10.2rem]
      lg:w-[10%] right-0
      min-[1088px]:w-[17%] min-[1180px]:w-[23%] min-[1270px]:w-[29%]
      xl:w-[20rem] min-[1440px]:w-[27rem]
      min-[1460px]:w-[30rem]
      min-[1518px]:w-[34rem]
      min-[1572px]:w-[36rem]
      min-[1586px]:w-[50%]
      '/>

        {/* USER CARD */}
        <div className='
        w-[95%] h-full 
        relative 
        flex justify-center
        lg:flex-1 lg:min-w-[420px] lg:max-w-[300px] lg:max-h-[600px] 
        2xl:max-w-[450px]'>
          <UserCard />
        </div>

        {/* ADS && BUTTONS CONTAINER */}
        <div className='
        min-h-fit w-[90%]
        lg:pt-[8.3rem] lg:h-[48rem] lg:w-[300px] lg:flex-1'>

          {/* BUTTONS */}
          <div
            className='
                w-full 
                flex justify-center items-center gap-2
                min-[500px]:gap-3
                sm:justify-center md:justify-center
                lg:justify-start'>
            <UniButtonDark
              text='Post Ad'
              type='button'
              onClick={() => navigate('/post-ad')}/>
            <UniButton
              text='Browse Ads'
              type='button'
              onClick={() => navigate('/adslist')}/>
          </div>
          
          <h3 className='
          w-full py-2 mt-6 mb-[-10px]
          flex self-center max-md:justify-center flex-1
          underline-offset-8 text-center text-xl 
          font-semibold text-gray text-opacity-100 
          md:mt-6 lg:w-[90%]'>
            All Active Ads:
          </h3>
{/* kommentar */}
          {/* ADS */}
          <div className='
          w-full max-h-[400px] my-[8px]
          flex flex-wrap justify-center items-start
          rounded-xl
          text-gray bg-darkBeige bg-opacity-36 
          
          md:rounded-[21px] 
          lg:w-[90%] lg:px-0 lg:mb-0 '>

          <div className='
          w-full
          flex flex-wrap justify-center items-center'>
            {adList?.length === 0 ? (
              <div
                className='
                w-full 
                relative 
                text-center font-bold text-gray text-opacity-60 
                md:text-2xl'>
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
          className='w-full mt-2 h-3 lg:w-[90%] mb-5'>
          <PaginationButtons page ={page} setPage = {setPage} pageCount={pageCount}/>
        </div>}
        
        </div>
    </motion.div>
  )
}

export default Account
