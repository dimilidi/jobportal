// Hooks
import { useNavigate } from 'react-router-dom'
import useAdList from '../Hooks/useAdList'
import useUser from '../Hooks/useUser'
import useSearch from '../Hooks/useSearch'
import { useCallback, useRef, useState } from 'react'
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
import { GrPrevious, GrNext } from 'react-icons/gr'
import PaginationButtons from '../Components/PaginationButtons'


const AdsList = () => {
  // CONSTANTS
  const { searchWord, searchCategory } = useSearch()
  const user = useUser()

  const { pageCount, page, setPage } = useAdList(
    `search=${searchWord}&category=${searchCategory}`
  )
  const ads = useAdList(
    `search=${searchWord}&category=${searchCategory}&page=${page}`
  )
  
  const navigate = useNavigate()

 

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
        <div className='w-24 h-24 hidden  right-[-3rem] top-[160px]  rounded-full bg-lightGreen lg:block absolute'></div>
      </div>

      <>
        {/* MAIN CONTAINER */}
        <div className='mx-auto  w-full h-full  flex justify-center items-start gap-10 '>
          {/* IMAGE */}
          <div
            className=' hidden xl:w-[500px] xl:flex'
          >
            <img
              className='h-full w-full'
              src={man}
              alt='person working on computer'
            />
          </div>

          {/* SEARCH UND ADS */}
          <div className='h-full py-5'>
            {/* className='flex flex-col justify-center items-center
              lg:justify-end lg:items-end' */}

            {/* SEARCH */}
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
                className='mt-[10px] w-full h-full
                flex flex-col justify-items-center items-start 
                sm:px-5 lg:px-0 sm:w-[600px] sm:h-[460px] 
                md:w-[900px] md:h-[435px] 
                lg:w-[700px] 
                xl:w-[900px]'
              >
                {/* LOADING SPINNER */}
                {ads.isLoading ? (
                  <div className='mx-auto h-full flex items-center'>
                    <Spinner />
                  </div>
                
              ) : (
                <div className='mx-auto  md:h-[600px] p-1 flex flex-wrap justify-center'>
                  {/* ADS */}
                  {ads.adList?.map((ad) => (
                    <Ad  key={ad._id} ad={ad} />
                  ))}

                  {/* NEXT & PREV PAGE  */}
                  <PaginationButtons page ={page} setPage = {setPage} pageCount={pageCount} />
                </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* BUTTON AD POST */}
        <div className='mb-2'>
          <UniButton
            text='Post Ad'
            onClick={handleClick}
            className='
              flex justify-center items-center lg:w-[50%] mx-auto   w-[250px] '
          />
        </div>
      </>
    </motion.div>
  )
}

export default AdsList
