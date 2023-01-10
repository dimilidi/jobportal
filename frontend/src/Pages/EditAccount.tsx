// Hooks
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
// Types
// Component
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
// Images
import image from '../assets/images/Account_profilDefault.png'
// Toaster
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'

type Props = {}

const EditAccount = (props: Props) => {
  const navigate = useNavigate()
  const user = useUser()

  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])

  //STATES EDITABLE BY THE USER
  const [name, setName] = useState(user.user?.name)
  const [city, setCity] = useState(user.user?.city)
  const [phone, setPhone] = useState(user.user?.phone)
  const [description, setDescription] = useState(user.user?.description)

  // useEffect(() => {
  //   if (newUser.user) {
  //     setName(newUser.user?.name)
  //     setCity(newUser.user?.city)
  //     setPhone(newUser.user?.phone)
  //     setDescription(newUser.user?.description)
  //   }
  // }, [newUser.user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFetching(true)
    setErrors([])
    const newUser = { name, phone, city, description }
    const response = await user.editAccount(newUser)

    console.log('response', response)

    if (response.status === 200) navigate('/account')
    if (response.status === 401) setErrors(['Unathorized.'])
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong!'])
    setFetching(false)
  }


  return (
    // CONTAINER WHOLE PAGE CONTENT
    <div
      area-label='main-container'
      className='
      h-full
      pt-[100px]
      flex flex-col items-center
      md:pt-[6rem]
      xl:pt-[4rem]'
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
      <div aria-label='headline' className='flex justify-start items-center'>
        <h1
          className='
          w-[80%] mb-[1rem]
          text-left text-[2.5rem] font-semibold 
          sm:text-[2.5rem]
          md:w-[80%] 
        
          md:pr-[17rem]
          md:text-left
          md:leading-[3rem]
          lg:w-[80%]
          '
        >
          <span
            className='text-lightGreen italic
          '
          >
            Edit
          </span>{' '}
          <br></br>
          Profile
        </h1>

        {/* IMAGE */}
        <img
          aria-label='image'
          className=' 
            w-[130px] 
            z-10
            md:absolute
            md:top-[6rem]
            md:right-[10rem]
            lg:right-[17.1rem]
            xl:top-[4rem]
            xl:right-[29rem]
            2xl:right-[60rem]
            '
          src={image}
          alt='profile picture'
        />
      </div>

      {/* FORM */}
      <div
        aria-label='main-form-ctn'
        className='
        w-full max-w-[500px]
        pt-[1rem]    
        mb-36
        flex flex-col items-center justify-center 
        relative rounded-[30px] shadow-standard bg-white
        md:mt-[1rem]
        '
      >
        {/* LINE */}
        <span
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
        />

        {/* FORM */}
        <form
          aria-label='form'
          onSubmit={handleSubmit}
          className='
              w-[80%] h-fit
              mb-[6rem]
              flex flex-col items-center justify-between 
              '
        >
          {/* INPUTS CONTAINER */}
          <div
            aria-label='inputs-ctn'
            className='
              w-full mb-6
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
                  text-sm
                  min-[425px]:py-[10px]   
                  sm:text-[1.1rem]
                  focus:outline-lightGreen'
              placeholder='Username'
              type='text'
              name='username'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                  box-border border border-lightGray rounded-[15rem] focus:outline-lightGreen 
                  sm:text-[1.1rem]
                  text-sm
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
                  box-border border border-lightGray rounded-[15rem] focus:outline-lightGreen sm:text-[1.1rem]
                  text-sm
                  min-[425px]:py-[10px]'
              placeholder='City'
              type='text'
              name='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

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
                  text-sm
                  min-[425px]:py-[10px] 
                  focus:outline-lightGreen 
                  sm:text-[1.1rem]'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* ERRORS */}
          {errors &&
              errors.map((error) => (
                <p key={error} 
                className='mt-1 text-red-600  self-start w-[100%] text-center'>
                  {error}
                </p>
              ))}

          {/* SAVE CHANGES BUTTON */}
          <UniButton
            text={fetching ? <Spinner /> : 'Save Changes'}
            className='
                w-full
                pt-[.5rem]
                flex flex-wrap justify-center
                text-lg'
            style={{ padding: '10px' }}
          />

          {/* DELETE-ACCOUNT */}
          <p className='mt-2 w-full text-center text-lightGray underline text-[14px] lg:text-center'>
            <Link to='/delete-account'>Delete account</Link>
          </p>

        </form>
      </div>
      <ToastContainer position='top-right' />
    </div>
  )
}

export default EditAccount
