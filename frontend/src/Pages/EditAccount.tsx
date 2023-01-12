// Hooks
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import useDecorationLine from '../Hooks/useDecorationLine'
// Types
// Component
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
// Images
import image from '../assets/images/Account_profil.png'
// Toaster
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BrowseJobs from '../Components/BrowseJobs'
import { notify } from '../utils/toastNotification'
import { AiFillEdit } from 'react-icons/ai'

type Props = {}

const EditAccount = (props: Props) => {
  const navigate = useNavigate()
  const user = useUser()

  //DECORATION LINE
  const editText = useDecorationLine( {orientation: 'left'})
  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])

  //STATES EDITABLE BY THE USER
  const [name, setName] = useState(user.user?.name)
  const [profession, setProffesion] = useState(user.user?.profession)
  const [city, setCity] = useState(user.user?.city)
  const [phone, setPhone] = useState(user.user?.phone)
  const [description, setDescription] = useState(user.user?.description)
  const [avatar, setAvatar] = useState<any>([])
  console.log('AVATAR',avatar);
  

  // IF USER NOT LOGGED IN GO TO HOME
    useEffect(() => {
      if (!user.isLoggedIn ) {
        navigate('/')
      }
    }, [user])


    const handleChangeFile = (e: React.SyntheticEvent) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      console.log(files);
      
          files &&  setFileToBase(files[0])
          files && console.log(files[0])
        
    } 

  

    const setFileToBase = (file:File) =>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () =>{
          setAvatar(reader.result);
      }
    }

   
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFetching(true)
    setErrors([])
    const newUser = { name, phone, city, profession, description, avatar }
    const response = await user.editAccount(newUser)

    console.log('response', response)

    if (response.status === 200) navigate('/account')
    if (response.status === 401) setErrors(['Unathorized. Please log in'])
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong!'])
    setFetching(false)
  }

  return (
    // CONTAINER WHOLE PAGE CONTENT
    <div
      area-label='main-container'
      className='
      md:h-[900px]
      pt-[70px] md:pt-[150px] xl:pt-[290]
      flex flex-col items-center
      '
    >
      {/* GREEN SEMICIRCLE */}
      <div
        area-label='green-semicircle'
        className='
        hidden 
        w-[100px] h-[100px]  
        absolute right-[-50px] top-[20.4rem] z-10 
        rounded-full 
        bg-lightGreen 
        xl:block'
      />

      {/* HEADING & IMAGE */}
      <div
        aria-label='headline'
        className='w-[85%] mb-2
          flex justify-between items-end
          md:mb-5 md:w-[65%] lg:w-[70%] xl:w-[48%]'>
        
      {/* TITLE & BROWSER-B */}
      <div className='w-[100%]
      flex flex-row justify-between items-end'>
        <h1
          className='
          w-[30%]
          text-left text-[2rem] font-semibold 
          sm:text-[2.5rem] leading-none
          md:w-[80%] md:text-[3rem]
          lg:w-[50%]
          '
        >
          <span
            ref={editText}
            className='text-lightGreen italic'>
            Edit
          </span>{' '}
          Profile
        </h1>

        <div className='hidden lg:flex'>
        <BrowseJobs />
        </div>
      </div>

        {/* IMAGE */}

          <img
            aria-label='image'
            className=' lg:hidden
              w-[90px] top-[40px] right-5
              z-20 relative
              md:w-[130px]
              md:absolute
              md:top-[7.5rem]
              md:right-[10rem]
              '
            src={image}
            alt='profile picture'
          />

        <div  className=' 
            w-[130px] 
            z-10
            md:absolute
            md:top-[6rem]
            md:right-[10rem]
            lg:right-[17.1rem]
            xl:top-[4rem]
            xl:right-[29rem]
            2xl:right-[60rem]
            '>
        <img
          aria-label='image'
          // className=' 
          //   w-[130px] 
          //   z-10
          //   md:absolute
          //   md:top-[6rem]
          //   md:right-[10rem]
          //   lg:right-[17.1rem]
          //   xl:top-[4rem]
          //   xl:right-[29rem]
          //   2xl:right-[60rem]
          //   '
          src={avatar ? avatar : image} 
          alt='profile picture'
        />

        <span>
          <input 
            // style = {{display:'none'}}  
            type="file" 
            name="avatar" 
            id="file_upload" 
            onChange={handleChangeFile} />
          <AiFillEdit />
          <p>Change</p>
        </span>

        </div>
        
      </div>

      {/* FORM */}
      <div
        aria-label='main-form-ctn'
        className='
        w-[90%] md:w-[70%] xl:w-[48%]
        pt-[3rem]
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
              w-[80%] h-fit
              flex flex-col items-start xl:items-stretch justify-between 
              '
        >

          {/* IMAGE LG - In form */}
          <div className='flex flex-row items-center gap-8 '>
          {/* INPUTS CONTAINER */}
          <div
            aria-label='inputs-ctn'
            className='w-full
              lg:w-full
              relative 
              flex flex-col items-center'
          >
            {/* USERNAME */}
            <label
              aria-label='username'
              htmlFor='username'
              className='
                  hidden md:inline-block
                  self-start
                  text-gray font-semibold 
                  sm:text-[1.1rem] 
                  lg:self-start'
            ></label>
            <input
              className='
                  w-full mb-2 py-[5px] px-3
                  box-border border border-lightGray rounded-[15rem] 
                  text-sm font-bold border-opacity-[50%]
                  min-[425px]:py-[10px]   
                  sm:text-[1.1rem]
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
                  text-gray font-semibold 
                  sm:text-[1.1rem] 
                  lg:self-start'
            ></label>
            <input
              className='
                  w-full mb-2 py-[5px] px-3
                  box-border border border-lightGray
                  border-opacity-[50%] rounded-[15rem] 
                  text-sm font-medium text-gray
                  min-[425px]:py-[10px]   
                  sm:text-[1.1rem]
                  focus:outline-lightGreen'
              placeholder='Profession'
              type='text'
              name='Profession'
              value={profession}
              onChange={(e) => setProffesion(e.target.value)}
              // test 
            />

            {/* PHONE */}
            <label
              area-label='phone'
              htmlFor='phone'
              className='
                  hidden md:inline-block
                  self-start 
                  font-semibold text-gray  
                  sm:text-[1.1rem] 
                  lg:self-start'
            ></label>
            <input
              className='
                  w-full mb-2
                  py-[5px] px-3
                  box-border border border-lightGray
                  rounded-[15rem] focus:outline-lightGreen 
                  sm:text-[1.1rem] border-opacity-[50%]
                  text-sm font-medium text-gray
                  min-[425px]:py-[10px]'
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
                  font-semibold text-gray  
                  sm:text-[1.1rem] 
                  lg:self-start'
            ></label>
            <input
              className='
                  w-full mb-2
                  py-[5px] px-3
                  box-border border border-lightGray
                  rounded-[15rem] focus:outline-lightGreen
                  sm:text-[1.1rem] border-opacity-[50%]
                  text-sm font-medium text-gray
                  min-[425px]:py-[10px]'
              placeholder='City'
              type='text'
              name='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

          </div>
          {/* IMAGE LG*/}
          <img
            aria-label='image'
            className=' hidden lg:flex
              w-[210px] h-[160px]
              '
            src={image}
            alt='profile picture'
          />
          </div>

            {/* DESCRIPTION */}
            <label
              htmlFor='description'
              className='
                self-start 
                font-semibold  text-gray  
                sm:text-[1.1rem] 
                lg:self-start'
            ></label>
            <textarea
              area-label='description'
              name='description'
              rows={7}
              placeholder='Description'
              className='
                w-full mb-2
                py-[11px] px-3
                box-border border border-lightGray rounded-[1rem] 
                text-sm font-medium text-gray
                min-[425px]:py-[10px] 
                focus:outline-lightGreen 
                sm:text-[1.1rem] border-opacity-[50%]'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

          {/* ERRORS */}
          {errors &&
              errors.map((error) => (
                <p key={error} 
                className='mt-1 
                text-red-600  
                w-[100%] 
                text-center'>
                  {error}
                </p>
              ))}

          {/* SAVE CHANGES BUTTON */}
          <UniButton
            text={fetching ? <Spinner /> : 'Save Changes'}
            className='
                mt-2
                w-full
                flex flex-wrap justify-center
                text-lg'
            style={{ padding: '10px' }}
          />

          {/* DELETE-ACCOUNT */}
          <p className='my-4 w-full text-center text-lightGray underline text-[14px] lg:text-center'>
            <Link to='/delete-account'>Delete account</Link>
          </p>

        </form>
      </div>
      <ToastContainer position='top-right' />
    </div>
  )
}

export default EditAccount
