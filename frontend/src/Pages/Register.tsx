import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { RegisterInputs } from '../type'
import useUser from '../Hooks/useUser'

import UniButton from '../Components/UniButton'
import { BiUnderline } from 'react-icons/bi'
import { FaUnderline } from 'react-icons/fa'

import RegisterCouple from '../assets/images/Register_couple.png'

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

  useEffect(() => {
    if (user && !loading) {
      navigate('/adlist')
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


        {/* GREEN CIRCLE */}
        <div className='
          w-[100px] h-[100px] 
          absolute right-[-50px] top-[12.7rem] 
          bg-lightGreen 
          rounded-full 

          max-[1024px]:hidden
          lg:top-[15.2rem]

          xl:w-[200px] xl:h-[200px]
          xl:right-[-100px]
          xl:top-[14rem]

          2xl:w-[200px] 2xl:h-[200px]
          2xl:top-[13.6rem] 2xl:right-[-100px]
          '>
        </div>
        
        {/* GREEN LINE */}
        <div className='
          h-[.1em] 
          absolute top-[15.5rem] right-[-9rem] 
          bg-lightGreen

          min-[768px]:w-[100%]
          max-[1024px]:hidden
          lg:top-[17.9rem] lg:right-[-4rem]
          xl:top-[19.5rem] xl:right-[-5rem]
          
          2xl:top-[19rem]
          '>
        </div>
        
        {/* FORM CONTAINER */}
        <div className=' 
          w-auto
          mt-[19rem] mb-[10rem] mx-[1.5rem] p-[1rem] pt-[8rem] pb-10
          flex flex-col items-center
          border rounded-xl shadow-standard 
         
          md:text-[1.2rem]
          lg:mt-[9rem]
          lg:absolute left-[-3rem]
          lg:pl-[5rem] lg:p-[5rem] lg:py-[3rem]
          lg:items-start

          xl:w-[35rem]
          xl:py-[4rem] xl:pr-[4rem] xl:pl-[6rem]

          2xl:w-[40rem]
          2xl:py-[2rem]
          '>

          {/* IMG CONTAINER*/}
          <img
            src={RegisterCouple} 
            alt='image' 
            className='
              absolute top-[9.3rem] right-[2rem]
              max-[375px]:right-[-1rem]
              min-[375px]:right-[1rem]
              min-[425px]:right-[2rem]
              lg:w-[25rem]
              lg:top-[4rem] lg:right-[-33rem]
              
              xl:top-[1rem]
              xl:right-[-42rem]
              xl:w-[32rem]

              2xl:right-[-47rem]
             
            ' 
          />
        
          {/* HEADING */}
          <h1 className='
            mb-4 flex flex-col
            text-[2.5em] leading-[2.8rem] font-semibold
            lg:mb-[1.5rem]
            xl:self-center
            lg:w-full
            xl:leading-[3.2rem]
            2xl:text-[3.8rem]
            2xl:leading-[4rem]
            '
            >Glad to help 
            <span className='text-lightGreen italic'> 
              You
            </span> 
          </h1>

          {/* FORM */}
          <form onSubmit={handleSubmit} 
            className='
              w-full
              flex flex-col
              2xl:w-full
              '
            >
            
            <label 
              htmlFor='name' 
              className='
                flex flex-col self-center 
                font-extralight
                xl:w-full
                '
            >
              Username
              <br />
              <input
                className='
                  h-10 mb-[.5rem] px-[.7rem] 
                  border rounded-[15rem] 
                  max-[375px]:w-[250px]
                  md:h-12'
                type='text'
                name='name'
                placeholder='John Doe'
                onChange={handleChange}
                value={inputs.name}
              />
            </label>
          
            <label 
              htmlFor='email' 
                className='
                flex flex-col self-center 
                font-extralight 
                xl:w-full
                '
            >
              Email
              <br />
              <input
                className='
                  h-10 mb-[.5rem] px-[.7rem] 
                  border rounded-[15rem] 
                  max-[375px]:w-[250px]
                  md:h-12'
                type='email'
                name='email'
                placeholder='John@Doe.com'
                onChange={handleChange}
                value={inputs.email}
              />
            </label>
          
            <label htmlFor='password' 
              className='
                flex flex-col 
                self-center 
                font-extralight 
                xl:w-full
                '
            >
              Password
              <br />
              <input
                className='
                  h-10 mb-[1rem] px-[.7rem] 
                  border rounded-[15rem] 
                  max-[375px]:w-[250px]
                  md:h-12
                  '
                type='password'
                name='password'
                placeholder='...'
                onChange={handleChange}
                value={inputs.password}
              />
            </label>
        

            {/* SIGN UP BUTTON */}
            <UniButton 
            text='Sign Up' 
            className='
              w-full mt-4 text-lg
              flex justify-center
              text-[1.2rem]
              md:h-12
              
              '
            />
            {errors &&
              errors.map((error) => (
                <p key={error} className='text-red-600'>
                  {error}
                </p>
              ))}
          </form>

          {/* Link To Login Page */}
          <Link to='/login' className='flex flex-col mt-2 self-center underline'>Or log in here!</Link>
        </div>
    </>
  )
}

export default Register
