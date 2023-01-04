// Hooks
import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
// Types
import { LoginInputs } from '../type'
// Component
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
// Images
import image from '../assets/images/Account_profilDefault.png'
// Toaster
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


type Props = {}

const EditAccount = (props: Props) => {
  // const navigate = useNavigate()
  // const { user, loading, login } = useUser()
  // const initialInputs: EditAccountInputs = {
  //   email: '',
  //   password: '',
  // }

  // const [inputs, setInputs] = useState(initialInputs)
  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])
  // const [inputType, setInputType] = useState('password')

  // useEffect(() => {
  //   if (user && !loading) {
  //     navigate('/adslist')
  //   }
  // }, [user])

  // // Error toast notification
  // useEffect(() => {
  //   errors?.map((error) => notify(error))
  // }, [errors])

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   setFetching(true)
  //   setErrors([])
  //   const response = await login(inputs)

  //   if (response.status === 200) navigate('/adslist')
  //   if (response.status === 401)
  //     setErrors(['You are not authorized to login! Please check your input'])
  //   if (response.status === 400) setErrors(response.errors)
  //   if (response.status === 500) setErrors(['Something went wrong!'])
  //   setInputs(initialInputs)
  //   setFetching(false)
  // }

  // const handlePassword = (e: React.SyntheticEvent) => {
  //   if (inputType === 'password') {
  //     setInputType('text')
  //   } else {
  //     setInputType('password')
  //   }
  // }

  return (
    <div className='
      h-full min-h-[950px] 
      mt-[4rem] pt-[2rem]
      flex flex-col items-center
      md:h-full'
    >

      {/* GREEN SEMICIRCLE */}
      <div className='
        hidden 
        w-[100px] h-[100px]  
        absolute right-[-50px] top-[20.4rem] z-10 
        rounded-full 
        bg-lightGreen 
        xl:block' 
      />

      {/* IMAGE */}
      <img
        className=' 
          w-[180px] 
          z-10
          md:absolute
          md:top-[4rem]
          md:right-[7rem]
          '
        src={image}
        alt='profile picture'
      />

      {/* HEADING && FORM */}
      <div className='
        w-full max-w-[500px] h-full
        pt-[1rem]    
        flex flex-col justify-center 
        relative 
        border-radius rounded-[30px] shadow-standard  
        bg-white 
        md:mt-[4rem]
        md:mb-[10rem]
        md:pb-[22rem]
        // lg:translate-x-[22%] 
        // xl:translate-x-[25%]'
      >
        <div className=' mx-auto w-[100%] flex flex-col items-center lg:mx-20  lg:items-start'>

          {/* HEADING */}
          <h1 className='
            w-full mb-[1rem]
            text-center text-[2.2rem] font-semibold 
            sm:text-[2.5rem]
            md:mb-[4rem] 
            md:ml-[5rem]
            md:text-start 
            '>
            Edit
            <span className=' text-lightGreen italic'> Profile</span>
          </h1>

          {/* LINE */}
          <span className='
            hidden
            w-[50%] pb-10  
            top-[180px] right-0 z-10 self-end
            border-t-[3px] border-lightGreen 
            sm:top-[45%] 
            md:top-[300px] 
            lg:w-[87%] 
            lg:top-[370px] 
            xl:w-[87%]' />

          {/* FORM */}
          <form
            // onSubmit={handleSubmit}
            className='
              w-[80%] h-[270px]
              flex flex-col items-center justify-between 
              lg:w-[50%]'
          >
            {/* INPUTS CONTAINER */}
            <div className='
              mb-5 w-full 
              relative flex flex-col items-center'>

              <label
                htmlFor='username'
                className='self-start text-gray font-extralight sm:font-light sm:text-[1.1rem] lg:self-start'
              >
                Username
              </label>
              <input
                className='py-[11px] px-5 mb-2 w-full box-border border border-lightGray rounded-[15rem] text-sm  focus:outline-lightGreen sm:text-[1.1rem]'
                type='text'
                name='username'
                // value={{user.user?.name}}
                // onChange={handleChange}
              />

              <label
                htmlFor='email'
                className='self-start text-gray font-extralight sm:font-light sm:text-[1.1rem] lg:self-start'
              >
                Email
              </label>
              <input
                className='py-[11px] px-5 mb-2 w-full box-border border border-lightGray rounded-[15rem] text-sm  focus:outline-lightGreen sm:text-[1.1rem]'
                type='email'
                name='email'
                // value={inputs.email}
                // onChange={handleChange}
              />

              <label
                htmlFor='phone'
                className='
                  self-start 
                  font-extralight text-gray  
                  sm:font-light 
                  sm:text-[1.1rem] 
                  lg:self-start'
              >
                Phone
              </label>
              <input
                className='
                  w-full mb-2
                  py-[11px] px-5
                  box-border border border-lightGray rounded-[15rem] text-sm  focus:outline-lightGreen sm:text-[1.1rem]'
                type='text'
                name='phone'
                // value={{user.user?.name}}
                // onChange={handleChange}
              />

              <label
                htmlFor='city'
                className='
                  self-start 
                  font-extralight text-gray  
                  sm:font-light 
                  sm:text-[1.1rem] 
                  lg:self-start'
              >
                City
              </label>
              <input
                className='
                  w-full mb-2
                  py-[11px] px-5
                  box-border border border-lightGray rounded-[15rem] text-sm  focus:outline-lightGreen sm:text-[1.1rem]'
                type='text'
                name='city'
                // value={{user.user?.name}}
                // onChange={handleChange}
              />

              <label
                htmlFor='description'
                className='
                  self-start 
                  font-extralight text-gray  
                  sm:font-light 
                  sm:text-[1.1rem] 
                  lg:self-start'
              >
                Description
              </label>
              <textarea
                name='description'
                rows='7'
                className='
                  w-full mb-2
                  py-[11px] px-5
                  box-border border border-lightGray rounded-[1rem] 
                  text-sm 
                  focus:outline-lightGreen 
                  sm:text-[1.1rem]'
                
                
                // value={{user.user?.name}}
                // onChange={handleChange}
              ></textarea>

            </div>

            {/* LOGIN BUTTON */}
            <UniButton
              text={fetching ? <Spinner /> : 'Save Changes'}
              className='
                w-full
                flex flex-wrap justify-center
                text-lg'
              style={{ padding: '10px' }}
            />

            {/* ERRORS */}
            {errors &&
              errors.map((error) => (
                <p key={error} className='
                  mt-1 
                  self-start 
                  text-red-600'
                >
                  {error}
                </p>
              ))}
          </form>
        </div>
      </div>
      <ToastContainer position='top-right' />
    </div>
  )
}

export default EditAccount
