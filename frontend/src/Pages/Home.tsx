// Hooks
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Components
import UniButton from '../Components/UniButton'
// Images & Icons
import { GoSearch } from 'react-icons/go'
import imageHome from '../assets/images/Home_group.png'
// framer-motion
import { motion } from 'framer-motion'
import Search from '../Components/Search'
import useSearch from '../Hooks/useSearch'

const Home = () => {
  const navigate = useNavigate()
  const { setSearchWord } = useSearch()
  const [searchInput, setSearchInput] = useState('')
  const futureText = React.useRef<HTMLSpanElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchWord(searchInput)
    navigate('/adslist')
  }

  // useEffect(() => {
  //   let prevLine: null | HTMLElement = null
  //   const createLine = () => {
  //     if (prevLine) prevLine.remove()
  //     if (!futureText.current) return
  //     const rect = futureText.current.getBoundingClientRect()
  //     const line = document.createElement('div')
  //     line.style.position = 'absolute'
  //     line.style.top = rect.bottom - 10 + 'px'
  //     line.style.left = '0px'
  //     line.style.width = rect.right - 20 + 'px'
  //     line.style.borderBottom = '2px solid #84A98C'
  //     futureText.current.parentElement!.insertBefore(line, futureText.current)
  //     prevLine = line
  //   }
  //   createLine()
  //   window.addEventListener('resize', createLine)
  //   return () => {
  //     window.removeEventListener('resize', createLine)
  //   }
  // }, [])

  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      className='mx-auto lg:w-[90%] w-full h-full min-h-[918px] flex justify-center items-center lg:justify-end'
    >
      <div className=' py-8  h-full   w-[100%]  sm:w-[50%] flex flex-col items-center justify-around gap-10 lg:ml-[85px] lg:gap-0  md:w-full lg:flex-row  md:flex-wrap md:justify-center  lg:justify-start  md:items-center  mx-auto'>
        {/* TEXT */}
        <div className='w-full flex flex-col items-center justify-center gap-6 md:w-[70%] lg:w-[50%]   '>
          <h1 className='text-[45px] leading-none font-medium text-textBlack sm:text-[53px] lg-text-7 xl:text-[80px] md:text-6xl '>
            Build your <br></br>
            <span
              ref={futureText}
              className='italic font-medium text-darkGreen'
            >
              Future.{' '}
            </span>
            Build <br />
            Your
            <span className='italic font-medium text-lightGreen'> Dream.</span>
          </h1>
          <p className='w-[80%] h-[80px] hidden font-light text-gray break-words xl:max-w-[450px] xl:text-lg xl:pt-2 lg:inline-block'>
            Lorem Ipsum is simply dummy text of the has been the industry's
            standard dummy text Ipsum is simply dummy.
          </p>
        </div>

        {/* IMAGE */}
        <img
          className='w-[80%] max-w-[250px] z-30 xl:max-w-[500px]  lg:max-w-[370px] lg:mb-[-100px] lg:ml-0xl:ml-[0px]'
          src={imageHome}
        ></img>

        <form
          className='mt-6 flex flex-col items-center justify-center gap-3 sm:w-[450px] lg:pt-[0px] lg:self-start  lg:w-[50%] '
          onSubmit={handleSubmit}
        >
          {/* SEARCH */}
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          {/* BUTTON Browse Ads */}
          <UniButton text='Browse Ads' type='button' />
        </form>
      </div>

      {/* ELEMENTS (circle, lines) */}

      <div
        area-label='right line'
        className='w-[54%] absolute  top-[19rem] right-0 border-b-[2px] border-lightGreen  lg:w-[69%] md:w-[54%] sm:top-[19.6rem] md:top-[20.2rem] lg:top-[27rem] lg:border-b-[4px] xl:top-[28.6rem] xl:w-[71%]'
      ></div>
      <div
        area-label='circle'
        className='hidden xl:block w-[332px] h-[332px] absolute top-[460px] right-[-250px] translate-y-[-50%] rounded-full md:bg-lightGreen'
      ></div>
    </motion.div>
  )
}

export default Home
