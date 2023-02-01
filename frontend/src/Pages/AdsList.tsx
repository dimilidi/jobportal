// Hooks
import { useLocation, useNavigate } from 'react-router-dom'
import useAdList from '../Hooks/useAdList'
import useUser from '../Hooks/useUser'
import useSearch from '../Hooks/useSearch'
import { useEffect, useState } from 'react'
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

  // RESET PAGE NUMBER BY SEARCH 
    useEffect(() => {
      if(searchWord) setPage(0)
    },[searchWord])


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
      {/* SEMICIRCLE */}
      <div className='w-[50px] h-24 hidden right-0 top-[160px] rounded-tl-full rounded-bl-full bg-lightGreen xl:block absolute'></div>

      {/* HEADING WITH UNDERLINE  */}
      <div className='mx-auto md:mt-[30px] h-[100px] w-[250px] lg:w-[320px] xl:w-[370px] flex justify-end'>
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
      </div>

        {/* MAIN CONTAINER*/}
        <div className='w-full md:w-[100%] h-full flex justify-center items-center'>
          {/* Image */}
            <img
              className='
              hidden 
              h-full w-full
              lg:flex lg:w-[500px] lg:mt-[30px]
              xl:w-[540px]
              '
              src={man}
              alt='person working on computer'
            />

          {/* SEARCH - ADS - BUTTONS*/}
          <div className='w-[60%] h-full flex flex-col justify-between items-center lg:mr-5 xl:w-[45%]'>
            {/* SEARCH */}
            <div className='w-full flex justify-center items-center'>
            <SearchContainer page='AdsList' />
            </div>
            {/* SEARCH END */}

            {/* ADS CONTAINER */}
            <div className='flex justify-start items-center lg:ml-[-42px]'>
            {ads.adList.length === 0 ? (
              <div
                className='mt-[130px] xl:mt-[230px] h-[150px] text-center sm:px-5 sm:w-[600px] md:w-[770px] lg:w-[600px] font-bold relative text-3xl 
                md:text-4xl
              text-darkBeige'
              >
                No ads found
              </div>
            ) : (
              <div
                className='w-full h-full md:h-[380px] mt-5 md:mt-0
                flex flex-col justify-center items-start lg:w-[80%] 
              '
              >
                {/* LOADING SPINNER */}
                {ads.isLoading ? (
                  <div className='mx-auto h-full flex items-center'>
                    <Spinner />
                  </div>
                
              ) : (
                <div className='md:p-1 flex flex-col justify-start items-center'>
                  {/* ADS */}
                  {ads.adList?.map((ad) => (
                    <Ad key={ad._id} ad={ad} />
                  ))}
                </div>
                )}
              </div>
            )}
            </div>
            {/* ADS END */}

            {/* BUTTON AD-POST & NEXT-PREV PAGE*/}
            <div className='pt-3 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center
              w-full lg:w-[37rem] xl:w-[40rem] xl:ml-[-30px]'>
              {/* BUTTON AD POST */}
              <div>
                <UniButton
                  text='Post Ad'
                  onClick={handleClick}
                  className='
                  flex justify-center items-center lg:w-[100%] w-[250px] lg:mt-0 mt-8 self-end'
                />
              </div>
              {/* NEXT & PREV PAGE  */}
              <div 
                style={{visibility: pageCount >0 ? 'visible' : 'hidden'}}
                className='flex justify-center items-center w-[250px]'>
              <PaginationButtons page ={page} setPage = {setPage} pageCount={pageCount} />
              </div>
            </div>
            {/* BUTTON END */}
          </div>
        </div>
    </motion.div>
  )
}

export default AdsList
