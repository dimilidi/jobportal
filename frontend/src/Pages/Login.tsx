import React from 'react'
import { Link } from 'react-router-dom'

type Props = {


}

const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault()
  alert(`Submit Click`)
} 

const Login = (props: Props) => {
  return (
    <>
      <img className='iconName' />
      <div className='loginContent'>
        <h1>Glad to have you Back</h1>
        <form action="post">
          <input type="email" name='email' placeholder='enter email here'/>
          <input type="password" name='password' placeholder='enter password here'/>
          <Link to=''>Forgot your password?</Link>
          <button type='submit' className='loginBtn' onSubmit={handleSubmit}>Login</button>
          <Link to='/register'>Or sign up here!</Link>
        </form>
      </div>
    </>
  )
}

export default Login