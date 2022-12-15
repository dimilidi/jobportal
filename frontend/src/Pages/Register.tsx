import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { RegisterInputs } from '../type'
import useUser from '../Hooks/useUser'

import UniButton from '../Components/UniButton'

type Props = {}

const Register = (props: Props) => {
  const { user } = useUser()
  const [inputs, setInputs] = useState<RegisterInputs>({
    name: '',
    email: '',
    password: '',
  })

  console.log(inputs)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('clicked')
  }
  return (
    <>
      <img className='iconName' />
      <div className='signupContent'>
        <h1>Glad to help You</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Username
            <input
              type='text'
              name='name'
              placeholder='enter username here'
              onChange={handleChange}
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              placeholder='enter email here'
              onChange={handleChange}
            />
          </label>
          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              placeholder='enter password here'
              onChange={handleChange}
            />
          </label>
          <UniButton text='Sign Up' />
        </form>
        <button>Login</button>
        <Link to='/login'>Or log in here!</Link>
      </div>
    </>
  )
}

export default Register
