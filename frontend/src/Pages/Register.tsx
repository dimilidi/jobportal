import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { RegisterInputs } from '../type'
import useUser from '../Hooks/useUser'

import UniButton from '../Components/UniButton'

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
      <div className='p-[120px]'>
        <ToastContainer autoClose={3000} />
        {fetching && <div>...Loading</div>}
        <img className='iconName' />
        <h1>Glad to help You</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Username
            <input
              type='text'
              name='name'
              placeholder='enter username here'
              onChange={handleChange}
              value={inputs.name}
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              placeholder='enter email here'
              onChange={handleChange}
              value={inputs.email}
            />
          </label>
          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              placeholder='enter password here'
              onChange={handleChange}
              value={inputs.password}
            />
          </label>
          <UniButton text='Sign Up' />
          {errors &&
            errors.map((error) => (
              <p key={error} className='text-red-600'>
                {error}
              </p>
            ))}
        </form>
        <button>Login</button>
        <Link to='/login'>Or log in here!</Link>
      </div>
    </>
  )
}

export default Register
