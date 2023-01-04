// Hooks
import { useNavigate } from 'react-router-dom'
// Components
import UniButton from '../Components/UniButton'
// Images & Icons
import { GoSearch } from 'react-icons/go'
import imageHome from '../assets/images/Home_group.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-auto lg:w-[90%] w-full h-full min-h-[918px] flex justify-center items-center lg:justify-end'>
      <div className=' py-8  h-full   w-[100%]  sm:w-[50%] flex flex-col items-center justify-around gap-10 lg:ml-[85px] lg:gap-0  md:w-full lg:flex-row  md:flex-wrap md:justify-center  lg:justify-start  md:items-center  mx-auto'>
        {/* TEXT */}
        <div className='w-full flex flex-col items-center justify-center gap-6 md:w-[70%] lg:w-[50%]   '>
          <h1 className='text-[45px] leading-none font-medium text-textBlack sm:text-[53px] lg-text-7 xl:text-[80px] md:text-6xl '>
            Build your <br></br>
            <span className='italic font-medium text-darkGreen'>Future. </span>
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

        {/* SEARCH */}
        <div className='mt-6 flex flex-col items-center justify-center gap-3 sm:w-[450px] lg:pt-[0px] lg:self-start  lg:w-[50%] '>
          <div className='w-full flex items-center justify-center '>
            <label className='relative  w-[90%] sm:w-[80%] xl:w-[60%] '>
              <GoSearch className='w-[20px] absolute top-4 left-5 text-gray text-opacity-50' />
              <input
                type='text'
                className='w-full py-[12px] px-12 box-border placeholder:text-center rounded-full bg-darkBeige shadow-inner placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
                placeholder='Search'
              />
            </label>
          </div>

          {/* BUTTON Browse Ads */}
          <UniButton
            text='Browse Ads'
            type='button'
            onClick={() => navigate('/adslist')}
          />
        </div>
      </div>

      {/* ELEMENTS (circle, lines) */}
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
