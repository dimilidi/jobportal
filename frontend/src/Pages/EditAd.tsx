// Hooks
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAd from '../Hooks/useAd'
import useUser from '../Hooks/useUser'
import useDecorationLine from '../Hooks/useDecorationLine'
// Components
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
import TextEditorEdit from '../Components/TextEditorEdit'
import UniButtonDark from '../Components/UniButtonDark'
// Notification
import { ToastContainer } from 'react-toastify'
import { notify } from '../utils/toastNotification'
// Style
import 'react-toastify/dist/ReactToastify.css'
import imagePostAd from '../assets/images/PostAd_chef.png'
// Others
import { motion } from 'framer-motion'
import BrowseJobs from '../Components/BrowseJobs'



const EditAd = () => {
  // CONSTANTS
  const params = useParams()
  const navigate = useNavigate()
  const user = useUser()
  const ads = useAd()

    // DECORATION LINE
  // const editText = useDecorationLine({orientation: 'left'})

  // STATES
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [wage, setWage] = useState<number | string>('')
  const [category, setCategory] = useState('')
  const [sector, setSector] = useState('')
  const [contactVia, setContactVia] = useState<
    [string, string] | [string] | [] | string | undefined
  >([])
  const [checked, setChecked] = useState({ email: false, phone: false })
  // const [image, setImage] = useState('')

  // SET STATES OF AD THAT IS GOING TO BE UPDATED
  useEffect(() => {
    if (ads.ad) {
      setTitle(ads.ad?.title)
      setLocation(ads.ad?.location)
      setSector(ads.ad?.sector)
      setDescription(ads.ad?.description)
      setWage(ads.ad?.wage)
      setCategory(ads.ad?.category)
      setChecked({
        email: ads.ad?.contactVia.includes('email'),
        phone: ads.ad?.contactVia.includes('phone'),
      })
    }
  }, [ads.ad])

  // HANDLE CONTACT_VIA (according checkbox)
  useEffect(() => {
    if (checked.email && checked.phone) {
      if (!user.user?.phone)
        notify('No phone number. Please edit your account.')
      setContactVia(['email', 'phone'])
    } else if (!checked.email && checked.phone) {
      if (!user.user?.phone)
        notify('No phone number. Please edit your account.')
      setContactVia(['phone'])
    } else if (checked.email && !checked.phone) {
      setContactVia(['email'])
    } else {
      setContactVia([])
    }
  }, [checked])


  // HANDLE EDIT
  const handleEdit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const ad = {
      title,
      category,
      sector,
      description,
      location,
      wage,
      contactVia
    }

    ads.updateAd(ad)

    setIsLoading(false)
  }



  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <div
        area-label='page-postAd'
        className='h-full lg:pt-0 mt-[0px] relative flex justify-center items-center text-Black '
      >
        {/* CIRCLE && LINES */}
        <div
          area-label='circle'
          className='hidden md:block md:w-[332px] md:h-[332px] md:absolute md:top-[50%] md:left-[-250px] md:translate-y-[-50%] md:rounded-full md:bg-lightGreen'
        />
        <div
          area-label='line'
          className='w-screen hidden md:block md:absolute md:top-[50%] md:translate-y-[-50%] md:left-0 md:border-b-[3px] md:border-lightGreen'
        />

        {/* MAIN */}
        <div
          area-label='main'
          className='relative h-full min-h-[880px] pt-[70px] w-[85%] max-w-[1000px] md:w-[70%] flex flex-col justify-center'
        >
          {/* TITLE MOBILE */}
            <div>
              <h1
                area-label='title-mobile'
                className='text-4xl flex justify-center gap-3 mb-5 font-medium text-textBlack md:hidden lg:hidden'
              >
                <span
                className='italic font-medium text-lightGreen md:hidden lg:hidden'>
                  Edit{' '}
                </span>
                your Ad
              </h1>
            </div>

        {/* BACK TO ACCOUNT */}
        <div className='hidden md:block pb-[20px]'>
        <BrowseJobs/>
        </div>


          {/* AD FORM */}
          <form
            area-label='form'
            className='gap-6 md:flex-col lg:flex-row md:gap-10 lg:gap-20 z-10 '
            onSubmit={handleEdit}
          >
            <div
              area-label='ad'
              className='p-5 pt-5 flex flex-col items-center rounded-[21px] bg-white shadow-standard sm:p-10 md:py-3 '
            >

              {/* TITLE DESKTOP */}
              <h1
                  area-label='title-md'
                  className='hidden text-[45px] font-semibold text-textBlack md:block mt-8'
                >
                  <span className='italic font-semibold text-lightGreen xl:text-[3.5rem]'>
                    Edit{' '}
                  </span>
                  your Ad
                </h1>

              {/* RADIO (offering- searching) */}

              <div
                area-label='index-radio'
                className='w-full flex justify-center '
              >
                <div className='md:mt-2 lg:mb-[20px] md:py-2 px-5 gap-5 flex justify-center items-center
                w-[330px] md:rounded-full md:bg-lightGreen md:bg-opacity-10 md:shadow-inner'>
              <label className='hidden lg:inline-block font-semibold text-gray'>Category</label>
              <div className='flex gap-2'>
                <input
                  type='radio'
                  id='offering'
                  value='offering'
                  name='case'
                  className='accent-darkGreen'
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor='offering' className='form-label cursor-pointer text-gray text-opacity-70'>offering</label>
              </div>

              <div className='flex gap-2'>
                <input
                  type='radio'
                  id='searching'
                  value='searching'
                  name='case'
                  className='accent-darkGreen'
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor='searching' className='form-label cursor-pointer text-gray text-opacity-70'>searching</label>
              </div>
              </div>
            </div>

              {/* TITLE && CITY && SECTOR */}
              <div
                area-label='inputs colum'
                className='pb-5 w-full mt-3 flex flex-col items-center justify-center'
              >
                <div
                  area-label='title-city'
                  className='w-full flex flex-col justify-center  lg:flex-row lg:justify-between gap-2 '
                >
                  <div className='w-full flex flex-col lg:w-[65%]'>
                    <label
                      htmlFor='title'
                      className='form-label hidden mb-0 text-gray font-semibold  lg:inline-block'
                    >
                      Title
                    </label>
                    <input
                      type='text'
                      name='title'
                      className=' form-control py-1 px-5 w-full block text-gray border-[1px] rounded-lg border-lightGray border-opacity-50 placeholder:text-sm 
                    focus:outline-lightGray '
                      placeholder='Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className='w-full flex flex-col  lg:w-[35%]'>
                    <label
                      area-label='city'
                      htmlFor='city'
                      className='form-label hidden mb-0 text-gray font-semibold lg:inline-block'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      name='city'
                      className='py-1 px-5 form-control box-border  text-gray rounded-lg border-[1px] border-lightGray border-opacity-50 placeholder:text-sm  focus:outline-lightGray'
                      placeholder='City'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className='w-full flex flex-col  lg:w-[35%]'>
                    <label
                      area-label='city'
                      htmlFor='city'
                      className='form-label hidden mb-0 text-gray font-semibold lg:inline-block'
                    >
                      Sector
                    </label>
                    <input
                      type='text'
                      name='city'
                      className='py-1 px-5 form-control box-border  text-gray rounded-lg border-[1px] border-lightGray border-opacity-50 placeholder:text-sm  focus:outline-lightGray'
                      placeholder='Sector'
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                    />
                  </div>
                </div>

                {/* TEXTAREA */}
              
                  <TextEditorEdit description={description} setDescription={setDescription}/>

                {/* TEXTAREA - ORIGINAL */} 
                 {/* <textarea
                  area-label='text area'
                  name='text'
                  id='text'
                  className='h-[170px] w-full mt-3 mb-3 p-5 rounded-xl resize-none caret-gray border-2 border-lightGray border-opacity-50 focus:outline-none placeholder:text-sm placeholder:text-lightGray  lg:w-full  lg:mb-0 lg:rounded-3xl lg:placeholder:text-base'
                  placeholder='Your description..'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea> */}

                {/* CHECKBOX (email-phone) */}
                <div
                  area-label='form-bottom'
                  className='w-full mt-4 flex flex-wrap-reverse justify-start gap-3 lg:flex-row lg:justify-between lg:gap-2 '
                >
                  <div
                    area-label='checkbox-text '
                    className='w-[300px] flex  flex-wrap justify-start  gap-1 sm:gap-3 lg:flex-row lg:justify-center lg:items-center'
                  >
                    <p className='text-lightGray'>How to reach you:</p>

                    <div
                      area-label='email-phone'
                      className='flex flex-row justify-start gap-3'
                    >
                      <div area-label='email' className='flex flex-row gap-2'>
                        <input
                          type='checkbox'
                          value='email'
                          name='contact'
                          checked={checked.email}
                          className='accent-darkGreen form-checkbox'
                          onChange={(e) =>
                            setChecked({
                              email: !checked.email,
                              phone: checked.phone,
                            })
                          }
                        />
                        <label>Email</label>
                      </div>
                      <div area-label='phone' className='flex flex-row gap-2'>
                        <input
                          type='checkbox'
                          value='phone'
                          name='contact'
                          checked={checked.phone}
                          className='accent-darkGreen form-checkbox'
                          onChange={(e) =>
                            setChecked({
                              email: checked.email,
                              phone: !checked.phone,
                            })
                          }
                        />
                        <label>Phone</label>
                      </div>
                    </div>
                  </div>
                  {/* WAGE */}
                  <div
                    area-label='wage'
                    className='w-[300px] flex flex-wrap justify-start items-center lg:items-center gap-1 sm:gap-3 lg:flex-row lg:justify-end lg:gap-2'
                  >
                    <label className=' text-lightGray'>
                      Approx. wage per hour:
                    </label>
                    <div>
                      <input
                        type='number'
                        name='wage'
                        className='py-1 px-5 w-[100px] text-sm text-gray rounded-lg border-[1px] border-lightGray border-opacity-50 focus:outline-none  placeholder:font-bold placeholder:opacity-50 '
                        placeholder='00'
                        value={wage}
                        onChange={(e) => setWage(Number(e.target.value) || '')}
                      />
                      <span className='text-lightGray ml-1'>€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BUTTON - POST AD */}
            <div className='pt-7 mb-20 flex flex-col md:flex-row justify-start lg:justify-center items-center gap-5'>
            <UniButtonDark
              type='submit'
              area-label='postAdButton'
              text={isLoading ? <Spinner /> : 'Save Changes'}
              className=' self-center md:mb-0'
              style={{width:'220px'}}
            />
            {/* BUTTON - BACK TO ACCOUNT */}
            <Link to='/account'>
            <UniButton
              type='button'
              area-label='backToAccountButton'
              text='Back to Account'
              className='self-center md:mb-0'
              style={{width:'220px'}}

            />
            </Link>
            </div>
          </form>
        </div>
        <ToastContainer position='top-right' />
      </div>
      {/* IMAGE */}
      <img
        className='w-[200]  lg:w-[260px] lg:h-[330px] hidden absolute bottom-[0px] right-[0px]  sm:block z-30 lg:right-[20px] xl:right-[60px]'
        src={imagePostAd}
      ></img>
    </motion.div>
  )
}

export default EditAd
