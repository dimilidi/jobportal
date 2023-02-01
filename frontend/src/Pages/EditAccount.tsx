// Hooks
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import useDecorationLine from '../Hooks/useDecorationLine'
// Component
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
import FileUploader from '../Components/FileUpload'
// Images
import image from '../assets/images/Account_profil.png'
// Toaster
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BrowseJobs from '../Components/BrowseJobs'
import { motion } from 'framer-motion'
import { HiOutlineCamera } from 'react-icons/hi'
import {  MdOutlineAddAPhoto } from 'react-icons/md'



import { RiDeleteBinLine } from 'react-icons/ri'

type Props= {
}

const EditAccount = (props:Props) => {
  const navigate = useNavigate()
  const user = useUser()


  //DECORATION LINE
  // const editText = useDecorationLine({ orientation: 'left' })
  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])

  //STATES EDITABLE BY THE USER
  const [name, setName] = useState(user.user?.name)
  const [profession, setProffesion] = useState(user.user?.profession)
  const [city, setCity] = useState(user.user?.city)
  const [phone, setPhone] = useState(user.user?.phone)
  const [description, setDescription] = useState(user.user?.description)
  const [avatar, setAvatar] = useState<any>(user.user?.avatar)
  const [open, setOpen] = useState(false)
  const [maxLength, setMaxLength] = useState(300)
  const [file, setFile] = useState<any>()

  const defaultAvatar =
    'https://res.cloudinary.com/dmdjfvwkd/image/upload/v1673676247/Account_profilDefault_eqka4e.png'

  // IF USER NOT LOGGED IN GO TO HOME
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/')
    }
  }, [user])

  const editAvatar = () => {
    setOpen(!open)
  }

  const deleteAvatar = () => {
    setAvatar(defaultAvatar)
    setOpen(!open)
  }

  const handleChangeFile = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    files && setFileToBase(files[0])

    files && console.log(files[0])
  }

  const setFileToBase = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setAvatar(reader.result)
    }
    setOpen(!open)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFetching(true)
    setErrors([])
    const newUser = { name, phone, city, profession, description, avatar, file}


    const response = await user.editAccount(newUser)

    console.log('RR',response.status);
    console.log('newUser DATA: ',newUser);
 
    
    // if(response.data.message)

    if (response.status === 200) navigate('/account')
    if (response.status === 401) setErrors(['Unathorized. Please log in'])
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong! Image should not be larger than 1 Mb. '])
    setFetching(false)
  }

  
  return (
    // CONTAINER WHOLE PAGE CONTENT
    <div
      area-label='main-container'
      className='h-full min-h-[930px]
      md:h-[970px] md:max-h-[1200px] md:pb-[50px]

      flex flex-col items-center justify-center
      '
      onClick={() => open && setOpen(false)}
    >
      {/* GREEN SEMICIRCLE */}
      {/* <div
        area-label='green-semicircle'
        className='
        hidden 
        w-[100px] h-[100px]  
        absolute right-[-50px] top-[20.4rem] z-10 
        rounded-full 
        bg-lightGreen 
        xl:block'
      /> */}

      {/* HEADING & IMAGE */}
      <div
        aria-label='headline'
        className='w-[85%] mb-2
          flex justify-between items-center 
          md:mb-5 lg:w-[68%] xl:w-[48%] 2xl:w-[36%]'
      >
         {/* TITLE & BROWSER-B */}
         <div
          className='w-[100%]
      flex flex-row justify-between items-end sm:mt-[70px]'
        >
          <h1
            className='
          w-[30%]
          text-left text-[2rem] font-semibold 
          sm:text-[2.5rem] leading-none
          sm:w-[100%] md:text-left
          md:w-[50%]
          '
          >
            <span className='text-lightGreen italic'>
              Edit
            </span>{' '}
            Profile
          </h1>

          <div className='hidden md:flex'>
            <BrowseJobs />
          </div>
        </div>
      </div>

      {/* FORM */}
      <div
        aria-label='main-form-ctn'
        className='
        w-[90%] h-[650px] mb-[30px] py-50 md:w-[700px] sm:h-[700px] md:h-[800px]
        flex flex-col items-center justify-center 
        relative rounded-[30px] shadow-standard bg-white 
        '
      >
        {/* LINE */}
        {/* <span
          aria-label='line'
          className='
            hidden
            w-[50%] pb-10  
            top-[180px] right-0 z-10 self-end
            border-t-[3px] border-lightGreen 
            sm:top-[45%] 
            md:top-[300px] 
            lg:w-[87%] 
            lg:top-[370px] 
            xl:w-[87%]'
        /> */}

        {/* FORM */}
        <form
          aria-label='form'
          onSubmit={handleSubmit}
          className='
              w-[80%] h-fit translate-y-[-9%] 
              flex flex-col items-start xl:items-stretch justify-between md:translate-y-0
              '
        >

          {/* IMAGE LG - In form */}
          <div className='w-full flex flex-row items-center gap-8 '>
            {/* INPUTS CONTAINER */}
            <div
              aria-label='inputs-ctn'
              className='w-full 
              lg:w-full
               
              flex flex-col items-end md:flex-row-reverse md:justify-between md:items-center'
            >
              {/* IMAGE */}
              <div className='mt-[30px] h-[8em] w-auto  rounded-full relative mb-5 flex flex-col  sm:h-[11em] '>
                <img
                  aria-label='image'
                  className=' h-full w-[8em] object-cover rounded-full  shadow-standard 
                top-[40px] right-5
                z-20 block sm:h-[11em] sm:w-[11em]
                '
                  src={avatar ? avatar : image}
                  alt='profile picture'
                />
                {/*  Edit Avatar */}
                <div className='h-[30px] w-[30px] mt-[-20px] mr-5 flex items-center justify-center self-end z-20 text-lightGreen text-[16px] rounded-full bg-white  border-2 border-lightGreen hover:border-darkGreen hover:text-darkGreen   ease-in-out duration-300 shadow-lg md:mt-[-30px] '>
                  <motion.button
                    type='button'
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    onClick={editAvatar}
                  >
                    <HiOutlineCamera />
                  </motion.button>
                </div>
                {open && (
                  <div
                    className='w-[80%] mt-[-40px]  p-[8px] mx-auto  z-30 bg-background shadow-standard rounded-md flex justify-center gap-5 '
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      style={{ display: 'none' }}
                      type='file'
                      name='avatar'
                      id='file_upload'
                      onChange={handleChangeFile}
                    />
                    <motion.label
                      htmlFor='file_upload'
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className='cursor-pointer text-[24px] text-darkGreen hover:text-lightGreen'
                    >
                      <MdOutlineAddAPhoto />
                    </motion.label>
                    <button
                      type='button'
                      className='cursor-pointer text-[24px] text-darkGreen hover:text-lightGreen'
                      onClick={deleteAvatar}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                )}
              </div>

              <div className='md:w-[350px] mt-5 mb-5'>
                {/* USERNAME */}
                <label
                  aria-label='username'
                  htmlFor='username'
                  className='
                  hidden md:inline-block
                  self-start
                  font-regular text-lightGray  
                  sm:text-[1.1rem] 
                  lg:self-start'
                >
                  Username
                </label>
                <input
                  className='
                  w-full mb-2 px-3 py-[5px]  
                  box-border border border-lightGray rounded-[15rem] 
                  text-sm text-gray font-bold border-opacity-[50%]
                  min-[425px]:py-[8px] 
                  sm:text-[1rem] md:placeholder:invisible
                  focus:outline-lightGreen'
                  placeholder='Username'
                  type='text'
                  name='username'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                {/* PROFESSION */}
                <label
                  aria-label='profession'
                  htmlFor='profession'
                  className='
                  hidden md:inline-block
                  self-start 
                  font-regular text-lightGray  
                  sm:text-[1.1rem] 
                  lg:self-start'
                >
                  Profession
                </label>
                <input
                  className='
                  w-full mb-2 py-[5px] px-3
                  box-border border border-lightGray
                  border-opacity-[50%] rounded-[15rem] 
                  text-sm font-medium text-gray text-opacity-60
                  min-[425px]:py-[8px] placeholder:font-normal placeholder:opacity-40  
                  sm:text-[1rem] md:placeholder:invisible
                  focus:outline-lightGreen'
                  placeholder='Profession'
                  type='text'
                  name='Profession'
                  value={profession}
                  onChange={(e) => setProffesion(e.target.value)}
                />

                {/* PHONE */}
                <label
                  area-label='phone'
                  htmlFor='phone'
                  className='
                  hidden md:inline-block
                  self-start 
                  font-regular text-lightGray   
                  sm:text-[1.1rem] 
                  lg:self-start'
                >
                  Phone
                </label>
                <input
                  className='
                  w-full mb-2
                  py-[5px] px-3
                  box-border border border-lightGray
                  rounded-[15rem] focus:outline-lightGreen 
                  sm:text-[1rem] border-opacity-[50%] placeholder:font-normal placeholder:opacity-40 
                  text-sm font-medium text-gray text-opacity-60 md:placeholder:invisible
                  min-[425px]:py-[8px]'
                  placeholder='Phone'
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                {/* CITY */}
                <label
                  area-label='city'
                  htmlFor='city'
                  className='
                  hidden md:inline-block
                  self-start 
                  font-regular text-lightGray   
                  sm:text-[1.1rem] 
                  lg:self-start'
                >
                  City
                </label>
                <input
                  className='
                  w-full mb-2
                  py-[5px] px-3
                  box-border border border-lightGray
                  rounded-[15rem] focus:outline-lightGreen
                  sm:text-[1rem] border-opacity-[50%] placeholder:font-normal placeholder:opacity-40 
                  text-sm font-medium text-gray text-opacity-60 md:placeholder:invisible
                  min-[425px]:py-[8px]'
                  placeholder='City'
                  type='text'
                  name='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* FILE*/}
          <div className='w-full pb-5 md:pb-0'>
            <FileUploader file={file} setFile={setFile} />        
          </div>

          {/* DESCRIPTION */}
          <label
            htmlFor='description'
            className='hidden
                self-start 
                font-regular text-lightGray  
                sm:text-[1.1rem] md:inline-block
                lg:self-start'
          >
            Description
          </label>
          <textarea
            area-label='description'
            name='description'
            placeholder='Description'
            maxLength={300}
            className='
                w-full mb-2 h-[130px]
                py-[11px] px-3
                box-border border border-lightGray rounded-[1rem] 
                text-sm font-medium text-gray text-opacity-80 md:placeholder:invisible
                min-[425px] placeholder:font-normal placeholder:opacity-40 
                focus:outline-lightGreen 
                sm:text-[1rem] border-opacity-[50%] resize-none'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {description?.length >= 0 ? (
            <span className='w-full text-gray text-sm text-opacity-50 text-right'>
             {description?.length}/{maxLength-(description?.length)}
            </span>
          ) : (
            <span className='w-full text-gray text-sm text-opacity-50 text-right'>
              0/300
            </span>
          )}

          {/* ERRORS */}
          {errors &&
            errors.map((error) => (
              <p
                key={error}
                className='mt-1 
                text-red-600  
                w-[100%] 
                text-center text-sm'
              >
                {error}
              </p>
            ))}

          {/* SAVE CHANGES BUTTON */}
          <UniButton
            text={fetching ? <Spinner /> : 'Save '}
            className='
                mt-2
                w-full
                flex flex-wrap justify-center
                text-lg '
            style={{ padding: '10px' }}
          />

          {/* DELETE-ACCOUNT */}
          <p className='py-4 mb-5 w-full text-center text-lightGray underline text-[14px]  lg:text-center sm:pb-1'>
            <Link to='/delete-account'>Delete account</Link>
          </p>
        </form>
      </div>
      <ToastContainer position='top-right' />
    </div>
  )
}

export default EditAccount
