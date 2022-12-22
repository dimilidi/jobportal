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
      <img className='iconName' />
      <div className='loginContent h-[90vh] pt-[400px]'>
        <h1>Glad to have you Back</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='enter email here'
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='enter password here'
            value={inputs.password}
            onChange={handleChange}
          />
          <UniButton text='Login' />
          {errors &&
            errors.map((error) => (
              <p key={error} className='text-red-600'>
                {error}
              </p>
            ))}
        </form>
        <Link to=''>Forgot your password?</Link>
        <button>Login</button>
        <Link to='/register'>Or sign up here!</Link>
      </div>
    </>
  )
}

export default Login
