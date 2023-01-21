// Hooks
import { useNavigate } from 'react-router-dom'
import useAdList from '../Hooks/useAdList'
import useUser from '../Hooks/useUser'
import useSearch from '../Hooks/useSearch'
import { useState } from 'react'
// Components
import Ad from '../Components/Ad'
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
// framer-motion
import { motion } from 'framer-motion'
// Images
import man from '../assets/images/Ads_man_working.png'
import useDecorationLine from '../Hooks/useDecorationLine'
import SearchContainer from '../Components/SearchContainer'
// Icons
import PaginationButtons from '../Components/PaginationButtons'
import useAd from '../Hooks/useAd'


const AdsList = () => {
  // CONSTANTS
  const navigate = useNavigate()
  const user = useUser()
  const {searchCategory, searchWord} = useSearch()
  const {ad, updateAd} = useAd()
  const { pageCount, page, setPage, adList, filteredAds } = useAdList(
    `search=${searchWord}&category=${searchCategory}`
    )
  const ads = useAdList(
      `search=${searchWord}&category=${searchCategory}&page=${page}`
    )


  const [views, setViews] = useState(ad?.views)


  // DECORATION LINE
  const missionText = useDecorationLine({ orientation: 'right' })

  // HANDLE POST AD BUTTON
  const handleClick = () => {
    if (user.user) {
      navigate('/post-ad')
    } else {
      navigate('/auth-required')
    }
  }
  

 

  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      className='pt-[70px] pb-[80px] h-full w-full min-h-[920px]'
    >
      {/* HEADING WITH UNDERLINE  */}
      <div className='mx-auto mt-[30px] h-[100px] w-[250px] lg:w-[270px] flex justify-end'>
        <h2 className='text-left text-[45px] font-semibold leading-tight'>
          Be part of
          <p>
            our
            <span
              className='capitalize  text-lightGreen text-[45px]'
              ref={missionText}
            >
              {' '}
              mission
            </span>
          </p>
        </h2>


        {/* SEMICIRCLE */}
        <div className='w-[50px] h-24 hidden right-0 top-[160px] rounded-tl-full rounded-bl-full bg-lightGreen lg:block absolute'></div>
      </div>

      <>
        {/* MAIN CONTAINER*/}
        <div className='w-full md:w-[100%] h-full 2xl:ml-[150px] flex justify-center items-start'>
          {/* Image */}
          <div
            className=' '
          >
            <img
              className='hidden
              lg:w-[600px]
              xl:w-[790px] xl:h-[500px] xl:mt-[60px] lg:mt-[140px]
              2xl:w-[640px] 2xl:h-[550px]
              lg:flex h-full w-full'
              src={man}
              alt='person working on computer'
            />
          </div>

          {/* SEARCH UND ADS */}

          <div className='h-full w-[100%] xl:w-[80%] 2xl:w-[65%] py-3'>
            {/* Search */}
            
            <SearchContainer page='AdsList' />
        
              
            {/* ADS CONTAINER */}
            {ads.adList.length === 0 ? (
              <div
                className='mt-[30px] h-[150px] text-center sm:px-5 sm:w-[600px] md:w-[900px] font-bold relative text-3xl 
              top-[40px] lg:top-[150px] xl:top-[200px] md:text-4xl
              text-darkBeige'
              >
                No ads found
              </div>
            ) : (
              <div
                className='mt-[25px] w-full h-full
                flex flex-col justify-items-center items-start 
                sm:px-5 lg:px-0 sm:w-[600px] sm:h-[460px] 
                md:w-[700px] md:h-[435px] 
                lg:w-[95%] 
                xl:w-[900px]'
              >
                {/* LOADING SPINNER */}
                {ads.isLoading ? (
                  <div className='mx-auto h-full flex items-center'>
                    <Spinner />
                  </div>
                
              ) : (
                <div className='md:h-[600px] p-1 flex flex-wrap justify-center items-center md:relative'>
                  {/* ADS */}
                  {ads.adList?.map((ad) => (
                    <Ad  key={ad._id} ad={ad} />
                  ))}
                 

                  {/* { filteredAds.length >0 ? filteredAds.map((a:any) =><div>{a}</div> 
                  )
                  :
                  ads.adList?.map((ad) => (
                    <Ad  key={ad._id} ad={ad} />
                  ))

                  } */}
                    
                  {/* BUTTON AD-POST & NEXT-PREV PAGE*/}
                  <div className='flex flex-col-reverse lg:flex-row justify-around items-center
                    w-[80%] md:w-[50%] md:ml-[60px] lg:ml-0 lg:w-[90%] xl:w-[80%] mt-4 gap-4 self-end'>
                    {/* BUTTON AD POST */}
                    <div>
                      <UniButton
                        text='Post Ad'
                        onClick={handleClick}
                        className='
                        flex justify-center items-center lg:w-[100%] xl:w-[85%] mx-auto w-[250px] self-end'
                      />
                    </div>
                    {/* NEXT & PREV PAGE  */}
                    <PaginationButtons page ={page} setPage = {setPage} pageCount={pageCount} />
                  </div>
                </div>
                )}
              </div>
            )}
          </div>
          </div>
      </>
    </motion.div>
  )
}

export default AdsList