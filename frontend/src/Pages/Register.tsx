import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { RegisterInputs } from '../type'
import useUser from '../Hooks/useUser'

import UniButton from '../Components/UniButton'
import { BiUnderline } from 'react-icons/bi'
import { FaUnderline } from 'react-icons/fa'

type Props = {}

const Register = (props: Props) => {
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
  const [success, setSuccess] = useState(true)
  console.log(success)

  // if (success) {
  //   toast.success('Successfully logged in!', {
  //     position: toast.POSITION.TOP_CENTER,
  //   })
  // }

  useEffect(() => {
    if (user && !loading) {
      //? where to navigate? navigate('/') // adlist
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
      toast.success('Successfully logged in!', {
        position: toast.POSITION.TOP_CENTER,
        className: '',
      })
      navigate('/account')
    }
    if (response.status === 400) setErrors(response.errors)
    if (response.status === 500) setErrors(['Something went wrong!'])
    setInputs(initialValue)
    setFetching(false)
  }

  return (
    <>
      <ToastContainer autoClose={3000} />
      {fetching && <div>...Loading</div>}

        {/* SVG CONTAINER*/}
        <img className='h-4 w-4 m-[6rem] absolute right-[5rem] top-[16rem] bg-lightGreen' alt='image'/>

        {/* GREEN CIRCLE */}
        <div className='w-[100px] h-[100px] absolute right-[-50px] top-[12.7rem] bg-lightGreen rounded-full max-[767px]:hidden'></div>
        
        {/* GREEN LINE */}
        <div className='h-[.1em] min-[768px]:w-[100%] bg-lightGreen absolute top-[15.5rem] right-[-9rem]'></div>
        
        {/* FORM CONTAINER */}
        <div className='
          w-fit
          mt-[8rem] m-2 h-screen 
          flex flex-col content-center flex-nowrap
          min-[320px]:ml-[1.5rem]
          min-[375px]:ml-[3rem]
          min-[425px]:ml-[4.5rem]
          '>
          
          {/* HEADING */}
          <h1 className='w-[60%] mt-12 mb-4 text-[2em] leading-9 font-semibold'>Glad to help 
            <span className='text-lightGreen italic'> 
              You
            </span> 
          </h1>

          {/* FORM */}
          <form onSubmit={handleSubmit} className='max-w-[100%] flex flex-col'>
            <div className='mb-2 w-10'>
              <label htmlFor='name' className='font-extralight'>
                Username
                <input
                  className='h-10 px-[.7rem] border rounded-[15rem] text-sm'
                  type='text'
                  name='name'
                  placeholder='John Doe'
                  onChange={handleChange}
                  value={inputs.name}
                />
              </label>
            </div>
            <div className='mb-2 w-10'>
              <label htmlFor='email' className='font-extralight'>
                Email
                <input
                  className='h-10 px-[.7rem] border rounded-[15rem] text-sm'
                  type='email'
                  name='email'
                  placeholder='John@Doe.com'
                  onChange={handleChange}
                  value={inputs.email}
                />
              </label>
            </div>
            <div className='mb-2 w-10'>
              <label htmlFor='password' className='font-extralight'>
                Password
                <input
                  className='h-10 px-[.7rem] border rounded-[15rem] text-sm'
                  type='password'
                  name='password'
                  placeholder='JohnsSuperSavePassword123'
                  onChange={handleChange}
                  value={inputs.password}
                />
              </label>
            </div>

            {/* SIGN UP BUTTON */}
            <UniButton text='Sign Up' className='w-[100%] mt-4 ml-[2rem] text-lg min-[768px]:ml-0' />
            {errors &&
              errors.map((error) => (
                <p key={error} className='text-red-600'>
                  {error}
                </p>
              ))}
          </form>

          {/* Link To Login Page */}
          <Link to='/login' className='w-[100%] mt-2 ml-[4rem] underline '>Or log in here!</Link>
        </div>
    </>
  )
}

export default Register
