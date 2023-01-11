import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
//Types
import { RegisterInputs } from '../type'
// Component
import Spinner from '../Components/Spinner'
import UniButton from '../Components/UniButton'
// Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// Images
import RegisterCouple from '../assets/images/Register_couple.png'
// framer-motion
import { motion } from 'framer-motion'

const Register = () => {
  const navigate = useNavigate()
  const { user, loading, register } = useUser()
  const initialValue: RegisterInputs = {
    name: '',
    email: '',
    password: '',
  }
  const [inputs, setInputs] = useState(initialValue)
  const [fetching, setFetching] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[] | undefined[] | undefined>([])
  const [inputType, setInputType] = useState('password')

  useEffect(() => {
    if (user && !loading) {
      navigate('/edit-account')
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
    const response = await register(inputs)
    if (response.status === 201) {
      navigate('/account')
    }
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong!'])

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
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      className='pt-5 h-full min-h-[950px] flex flex-col items-center justify-center lg:flex-row'
    >
      {/* Line */}
      <div
        className='w-[47%] absolute
      z-10 min-w-[220px]
      right-0 top-[405px]
      border-b-[3px] border-lightGreen
      // sm:top-[385px] sm:right-0 sm:block
      lg:min-w-[68.5%] lg:top-[335px]
      // xl:w-[65%] xl:top-[340px]
      2xl:min-w-[60%] 2xl:top-[345px]'
      />

      {/* GREEN SEMICIRCLE */}
      <div className='w-[100px] h-[100px] hidden absolute right-[-50px] top-[18rem] z-10 bg-lightGreen rounded-full xl:block' />

      {/* IMAGE2 */}
      <img
        className='mb-[-80px] ml-[50px] w-[165px] z-10 xl:hidden lg:hidden'
        src={RegisterCouple}
        alt='illustration'
      />

      {/*HEADING && FORM */}
      <div
        className='py-[20px] h-[650px] w-[90%] max-w-[500px]
          flex flex-col justify-center
          relative border-radius rounded-[30px] shadow-standard bg-white
          lg:max-w-[1200px] lg:w-[60%] lg:h-[650px] lg:translate-x-[-5%] 
          xl:w-[70%] xl:translate-x-[-20%] 2xl:translate-x-[-20%]'
      >
        <div
          className='mx-auto w-[100%]
            flex flex-col items-center
            lg:items-end 2xl:items-end'
        >
          {/* HEADING */}
          <h1
            className='w-[250px] sm:pb-[40px]
          text-center text-[2.2rem] leading-none font-semibold sm:text-[2.5rem]
          lg:w-[400px] lg:text-[3rem] lg:text-left
          xl:w-[400px] xl:text-[3.5rem]
          2xl:w-[540px] '
          >
            Glad to <br /> help
            <span className=' text-lightGreen italic'> You</span>
          </h1>

          {/* LINE */}
          {/* <span className='pb-10 w-[46%] top-[180px] right-0 self-end z-10 border-t-[3px] border-lightGreen sm:top-[45%] md:top-[300px] lg:w-[59%] lg:top-[370px] xl:w-[30%] 2xl:w-[32%]'/> */}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className='w-[80%] flex flex-col items-center justify-between lg:w-[60%] xl:w-[45%] 2xl:w-[45%] lg:pr-[80px] 2xl:pr-[100px]'
          >
            {/* INPUTS CONTAINER */}
            <div className='mb-5 w-full relative flex flex-col items-center'>
              <label
                htmlFor='username'
                className='self-start text-gray font-extralight sm:font-light sm:text-[1.1rem] lg:self-start'
              >
                Username
              </label>
              <input
                className='py-[11px] px-5 mb-2 w-full box-border border border-lightGray rounded-[15rem] text-sm  focus:outline-lightGreen sm:text-[1.1rem]'
                type='text'
                name='name'
                value={inputs.name}
                onChange={handleChange}
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
                className='py-[11px] px-5 mb-1 w-full text-sm border border-lightGray rounded-[15rem] focus:outline-lightGreen sm:text-[1.1rem]'
                type={inputType}
                name='password'
                onChange={handleChange}
                value={inputs.password}
              />
              {inputType === 'text' ? (
                <AiOutlineEye
                  onClick={(e) => handlePassword(e)}
                  className='w-[20px] absolute bottom-[20px] right-5 text-gray text-opacity-50'
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={(e) => handlePassword(e)}
                  className='w-[20px] absolute bottom-[20px] right-5 text-gray text-opacity-50'
                />
              )}
            </div>

            {/* Sign Up BUTTON */}
            <UniButton
              text={fetching ? <Spinner /> : 'Sign Up'}
              className='mt-[1rem] text-lg sm:text-lg lg:self-end'
              style={{ padding: '10px' }}
            />

            <p className='mt-2 w-full text-center text-lightGray underline text-[14px] lg:text-center 2xl:text-right'>
              <Link to='/login'>or log in here</Link>
            </p>
            {/* ERRORS */}
            {errors &&
              errors.map((error) => (
                <p key={error} className='mt-1 text-red-600 self-start'>
                  {error}
                </p>
              ))}
          </form>
        </div>
      </div>
      {/* IMAGE 1 */}
      <img
        className='mb-[-45px] w-[180px] z-10 lg:w-[450px] lg:ml-[100px] xl:ml-[-30px] xl:w-[500px] 2xl:w-[500] hidden sm:hidden md:hidden lg:block'
        src={RegisterCouple}
        alt='illustration'
      />
    </motion.div>
  )
}

export default Register
