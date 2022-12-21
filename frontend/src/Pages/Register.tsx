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

      {/* Heading + Form Container */}
      <div className='max-w-[22rem] mx-4 mt-[7rem] flex flex-col content-center relative max-[374px]:max-w-[14rem]'>
        <img className='h-4 w-4 absolute' alt='image'/>
        <h1 className='w-[60%] mt-12 mb-4 text-[2em] leading-9 font-semibold'>Glad to help 
          <span className='text-lightGreen italic underline underline-offset-8'> 
            You
          </span> 
          
        </h1>

        <form onSubmit={handleSubmit} className='max-w-[100%] flex flex-col'>
          <div className='mb-2'>
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
          <div className='mb-2'>
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
          <div className=''>
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
          <UniButton text='Sign Up' className='mt-4 self-center justify-center text-lg' />
          {errors &&
            errors.map((error) => (
              <p key={error} className='text-red-600'>
                {error}
              </p>
            ))}
        </form>
        <Link to='/login' className='mt-2 self-center underline'>Or log in here!</Link>
      </div>
    </>
  )
}

export default Register
