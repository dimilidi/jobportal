// Hooks
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import useDecorationLine from '../Hooks/useDecorationLine'
// Types
import { LoginInputs } from '../type'
// Component
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
// Images
import image from '../assets/images/Login_surf.png'
// Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// framer-motion
import {motion} from 'framer-motion'

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate()
  const { user, loading, login } = useUser()
  const initialInputs: LoginInputs = {
    email: '',
    password: '',
  }

  //DECORATION LINE
  const backText = useDecorationLine({orientation : 'right'})

  const [inputs, setInputs] = useState(initialInputs)
  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])
  const [inputType, setInputType] = useState('password')

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

    if (response.status === 200) navigate('/adslist')
    if (response.status === 401)
      setErrors(['You are not authorized to login! Please check your input'])
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong!'])
    // setInputs(initialInputs)
    setFetching(false)
  }

  const handlePassword = (e: React.SyntheticEvent) => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <motion.div
      initial={{ width: '100%'}}
      animate={ {width: '100%'}}
      exit={{x:window.innerWidth}} 
      className='pt-5 h-full min-h-[950px] flex flex-col items-center justify-center lg:flex-row '>
        
      {/* GREEN SEMICIRCLE */}
      <div className='w-[50px] h-[100px] hidden absolute right-[0] top-[21rem] z-10 bg-lightGreen rounded-tl-full rounded-bl-full xl:block' />

      {/* IMAGE */}
      <img
        className='mb-[-45px] w-[180px] z-10 lg:w-[450px] lg:mr-[-50px] xl:w-[550px]
        xl:ml-44'
        src={image}
        alt='illustration of a girl surfing in internet'
      />

      {/*HEADING && FORM */}
      <div className='py-[20px] h-[600px] w-[90%] max-w-[500px]  
      flex flex-col justify-center border-radius  shadow-standard  
      bg-white rounded-[30px]
      lg:max-w-[1000px] lg:w-[50%] lg:h-[650px] lg:ml-[16rem] lg:rounded-l-[30px] lg:rounded-r-none
      xl:ml-[20rem]'>

        <div className='mx-auto w-[100%] lg:w-[80%] xl:w-[70%] flex flex-col items-center lg:mx-20  lg:items-start'>

          <h1 className='w-[250px] text-center text-[2.2rem] leading-none  font-semibold pb-12
          sm:text-[2.5rem] 
          lg:w-[300px] lg:text-[2.8rem] 
          lg:text-left xl:w-[400px] 
          xl:text-[3.5rem]'>
            Glad to have you
            <span 
            ref={backText}
            className=' text-lightGreen italic'> Back</span>
          </h1>
          {/* HEADING */}


          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className='h-[270px] w-[80%] flex flex-col items-center justify-between 
            lg:w-[70%] xl:w-[60%]'
          >
            {/* INPUTS CONTAINER */}
            <div className='mb-5 w-full relative  flex flex-col items-center'>
              <label
                htmlFor='email'
                className='self-start text-gray font-extraLight sm:font-light sm:text-[1.1rem] lg:self-start'
              >
                Email
              </label>
              <input
                className='py-[11px] px-5 mb-2 w-full box-border border border-lightGray rounded-[15rem] text-sm  focus:outline-lightGreen sm:text-[1.1rem]'
                type='email'
                name='email'
                value={inputs.email}
                onChange={handleChange}
              />

              <label
                htmlFor='password'
                className='self-start text-gray font-extralight sm:font-light sm:text-[1.1rem] lg:self-start'
              >
                Password
              </label>
              <input
                className='py-[11px] px-5 mb-1 w-full  text-sm border border-lightGray rounded-[15rem] focus:outline-lightGreen sm:text-[1.1rem]'
                type={inputType}
                name='password'
                onChange={handleChange}
                value={inputs.password}
              />
              {inputType === 'text' ? (
                <AiOutlineEye
                  onClick={(e) => handlePassword(e)}
                  className='w-[20px] absolute bottom-[45px] right-5 text-gray text-opacity-50'
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={(e) => handlePassword(e)}
                  className='w-[20px] absolute bottom-[45px] right-5 text-gray text-opacity-50'
                />
              )}

              <p className='mt-1 w-full text-lightGray underline text-[14px] sm:justify-center lg:justify-start'>
                <Link to='/edit-userdata'>Forgot your password?</Link>
              </p>
            </div>

            {/* LOGIN BUTTON */}
            <UniButton
              text={fetching ? <Spinner /> : 'Login'}
              className='mt-[1rem] w-[250px] text-lg sm:text-lg lg:self-end flex justify-center'
              style={{ padding: '10px' }}
            />

            <p className='mt-2 w-full text-center text-lightGray underline text-[14px] lg:text-right'>
              <Link to='/register'>or sign up here</Link>
            </p>

            {/* ERRORS */}
            {errors &&
              errors.map((error) => (
                <p key={error} className='mt-1 text-red-600  self-start'>
                  {error}
                </p>
              ))}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Login
