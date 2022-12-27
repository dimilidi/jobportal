import React, { useState, useEffect } from 'react'
import { MdSettingsInputSvideo } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import useUser from '../Hooks/useUser'
import { LoginInputs } from '../type'
import UniButton from '../Components/UniButton'

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
    <>
      {fetching && <div>...Loading</div>}

      {/* GREEN CIRCLE */}
      <div className='
      w-[100px] h-[100px] 
      hidden
      bg-lightGreen 
      rounded-full 
      md:absolute right-[-50px] top-[18.8rem] 
      '>
      </div>
        
      {/* GREEN LINE */}
      <div className='
      md:w-[242.5px] h-[.1em] 
      sm:fixed top-[21.5rem] right-0
    bg-lightGreen'
     >
      </div>

      {/* ************** */}
      {/* FORM CONTAINER */}
      <div className=' 
      py-[14rem] 
      flex flex-col self-center
      md:mr-10'
      >
      
        {/* SVG */}
        <img className='
        w-[260px]
        self-center
        bg-lightGreen 
        sm:w-[313px]
        sm:absolute top-[12rem]
        md:w-[230px]
        md:top-[23.4rem]
        md:left-[10%]' 
        alt='image'/>
      
        {/* HEADING */}
        <h1 className='
          mt-12 mb-7
          flex flex-col
          text-center text-[2rem] leading-9 font-semibold 
          md:self-end
          sm:lg-text
          sm:text-[2.2rem]
          md:mr-0'
          >Glad to have you  
          <span className='text-lightGreen italic'> 
            &nbsp;Back
          </span> 
        </h1>

        {/* FORM INSIDE CONTAINER */}
        <form onSubmit={handleSubmit} className='
        flex flex-col self-center 
        md:self-end
        sm:w-[313.42px]'
        >
          
          <label htmlFor='email' className='self-center font-extralight'>
            Email
            <input
              className='
              h-10 px-3 mb-2
              block 
              border rounded-[15rem] text-sm 
              sm:text-[1rem]'
              type='email'
              name='email'
              placeholder='Enter email here'
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
        
          <label htmlFor='password' className='self-center font-extralight'>
            Password
            <input
              className='
              h-10 px-3 mb-4
              block 
              text-sm
              border rounded-[15rem]  
              sm:text-[1rem]'
              type='password'
              name='password'
              placeholder='JohnsSuperSavePassword123'
              onChange={handleChange}
              value={inputs.password}
            />
          </label>
        
          <Link to='/edit-userdata' 
          className='
          w-full 
          flex justify-center 
          text-sm underline 
          sm:text-sm'>Forgot your password?</Link>

          {/* LOGIN BUTTON */}
          <UniButton text='Login' className='self-center mt-[1rem] text-lg'/>
          {errors &&
            errors.map((error) => (
              <p key={error} className='text-red-600'>
                {error}
              </p>
            ))}
        </form>
      </div>
    </>
  )
}

export default Login
