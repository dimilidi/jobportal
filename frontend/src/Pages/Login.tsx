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
      absolute right-[-50px] z-[10]
      hidden
      bg-lightGreen 
      rounded-full 
      xl:block 
      xl:top-[19.7rem]
      '
      >
      </div>
        
      {/* GREEN LINE */}
      <div className='
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
      >
      </div>

      {/* ************** */}
      {/* SVG, HEADING, FORM CONTAINER */}
      <div className=' 
      flex flex-col self-center
      mx-4 mb-[9rem] mt-[15rem]
      border rounded-xl shadow-standard pb-10
      bg-background
      md:mx-10
      lg:w-[33rem]
      lg:h-[33rem]
      lg:mt-[10rem]
      lg:relative right-[-8rem]
      lg:items-start
      lg:float-right
      lg:pl-[3rem]
      lg:py-10
      xl:w-[700px]
      xl:h-[600px]
      '
      >
      
        {/* SVG */}
        <img className='
        w-[250px] h-[200px]
        self-center left-0 top-[25rem]
        bg-lightGreen
        lg:absolute
        lg:ml-[2rem]
        lg:h-[29rem]
        lg:w-[25rem]
        lg:top-[2rem]
        lg:left-[-30rem]
        xl:left-[-40rem]
        ' 
        alt='image'/>

        <div className='flex flex-col'>
        {/* HEADING */}
        <h1 className='
          mb-1
          flex flex-col
          text-center text-[2rem] leading-9 font-semibold 
          sm:mb-[1.1rem]
          sm:lg-text
          sm:text-[2.5rem]
          sm:leading-10
          lg:text-left
          lg:text-[2.8rem]
          lg:leading-[3.3rem]
          '
          >Glad to have you  
          <span className='text-lightGreen italic'> 
            Back
          </span> 
        </h1>

        {/* FORM INSIDE CONTAINER */}
        <form onSubmit={handleSubmit} className='
        flex flex-col self-center 
        min-[1020px]:w-[410px]'
        >
          
          <label htmlFor='email' className='
          self-center 
          font-extralight
          sm:font-light
          sm:text-[1.1rem]
          lg:self-start'
          >
            Email
            <input
              className='
              h-10 px-3 mb-2
              block 
              border rounded-[15rem] text-sm 
              sm:text-[1.1rem]'
              type='email'
              name='email'
              placeholder='Enter email here'
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
        
          <label htmlFor='password' className='
          self-center 
          font-extralight
          sm:font-light
          sm:text-[1.1rem]
          lg:self-start'
          >
            Password
            <input
              className='
              h-10 px-3 mb-4
              block 
              text-sm
              border rounded-[15rem]
              sm:text-[1.1rem]'
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
          flex
          text-sm underline 
          sm:text-sm
          sm:justify-center
          lg:justify-start'
          >Forgot your password?
          </Link>

          {/* LOGIN BUTTON */}
          <UniButton text='Login' 
          className='
          mt-[1rem]
          self-center  
          sm:text-xl
          lg:self-start
          '
          />
          {errors &&
            errors.map((error) => (
              <p key={error} className='text-red-600'>
                {error}
              </p>
            ))}
        </form>
        </div>
        
      </div>
    </>
  )
}

export default Login
