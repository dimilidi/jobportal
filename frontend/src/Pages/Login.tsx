import React, { useState, useEffect } from 'react'
import { MdSettingsInputSvideo } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import { LoginInputs } from '../type'
import UniButton from '../Components/UniButton'
import image from '../assets/images/Login_surf.png'

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate()
  const { user, loading, login } = useUser()
  const initialInputs: LoginInputs = {
    email: '',
    password: '',
  }
  const [inputs, setInputs] = useState(initialInputs)
  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])

  useEffect(() => {
    if (user && !loading) {
      navigate('/adslist')
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFetching(true)
    setErrors([])
    const response = await login(inputs)

    if (response.status === 200) navigate('/')
    if (response.status === 401)
      setErrors(['You are not authorized to login! Please check your input'])
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong!'])
    setInputs(initialInputs)
    setFetching(false)
  }
  return (
    <div className=' h-full min-h-[920px] flex flex-col items-center justify-center lg:flex-row  '>
      {fetching && <div>...Loading</div>}

      {/* GREEN CIRCLE */}
      <div
        className='
      w-[100px] h-[100px] 
      absolute right-[-50px] z-[10]
      hidden
      bg-lightGreen 
      rounded-full 
      xl:block 
      xl:top-[19.7rem]
      '
      ></div>

      {/* GREEN LINE */}
      <div
        className='
      h-[.1em] 
      hidden
      bg-lightGreen
      absolute right-0 z-[10]
      sm:block
      sm:top-[26.3rem]
      sm:w-[20.3rem]
      md:w-[431px]
      lg:top-[18.9rem]
      lg:w-[25.9rem]
      '
      ></div>

      {/* ************** */}

      {/* kommentar */}
      {/* SVG */}
      <img
        className='
        w-[180px] 
        mb-[-45px]
        z-10
        lg:w-[400px]
        lg:pl-10
        '
        src={image}
        alt='image'
      />
      {/* HEADING, FORM CONTAINER */}
      <div
        className=' 
      py-[20px]
      min-h-[600px]
      w-[90%]
      max-w-[500px]
      flex flex-col justify-center 
      border-radius rounded-xl shadow-standard 
      bg-white
  
      lg:translate-x-[17%]
      xl:translate-x-[30%]
      lg:max-w-[1000px]
      lg:w-[50%]


      
      
      '
      >
        <div className='mx-auto w-[80%] flex flex-col items-center lg:mx-20 lg:w-[60%] lg:items-start'>
          {/* HEADING */}
          <h1
            className='
          mb-1
          pb-10
          
          text-center text-[2rem] leading-9 font-semibold 
          lg:text-left
          w-full
          lg:w-[300px]
          



          sm:mb-[1.1rem]
          
          sm:text-[2.5rem]
          sm:leading-10
          lg:text-[2.8rem]
          lg:leading-[3.3rem]
          '
          >
            Glad to have you
            <span className='text-lightGreen italic'> Back</span>
          </h1>

          {/* FORM INSIDE CONTAINER */}
          <form
            onSubmit={handleSubmit}
            className='
        h-[270px] w-full
        flex flex-col items-center justify-between
        lg:w-[70%]
        '
          >
            <div className='mb-5 w-full flex flex-col items-center' >
              <label
                htmlFor='email'
                className='
                text-gray
                self-start
         
            font-extralight
            sm:font-light
            sm:text-[1.1rem]
            lg:self-start'
              >
                Email
              </label>
                <input
                  className='
                  py-[11px]
                px-5 mb-2
                w-full
                block 
                box-border
                border border-lightGray rounded-[15rem] text-sm 
                focus:outline-lightGreen
             
                sm:text-[1.1rem]'
                  type='email'
                  name='email'
                  value={inputs.email}
                  onChange={handleChange}
                />
             

              <label
                htmlFor='password'
                className='
                text-gray
                self-start
          
            font-extralight
            sm:font-light
            sm:text-[1.1rem]
            lg:self-start'
              >
                Password
              </label>
                <input
                  className='
                py-[11px] px-5 mb-1
                w-full
                block 
                text-sm
                border border-lightGray rounded-[15rem]
                focus:outline-lightGreen

                sm:text-[1.1rem]'
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={inputs.password}
                />
              

              <Link
                to='/edit-userdata'
                className='
            w-full 
            text-lightGray
            underline 
            text-[13px]
            sm:justify-center
            lg:justify-start'
              >
                Forgot your password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <UniButton
              text='Login'
              className='
          mt-[1rem]
          py-[10px]
          w-full
          text-[18px]
          sm:w-[250px]  
          sm:text-xl
          lg:self-start
          '
            />
            <p className='w-full text-center text-lightGray underline text-[13px] lg:text-left'>
              <Link to='/register'>
              or sign up here
              </Link>
            </p>
          
            {errors &&
              errors.map((error) => (
                <p key={error} className='text-red-600'>
                  {error}
                </p>
              ))}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
