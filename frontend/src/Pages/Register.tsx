import React from 'react'

type Props = {


}

const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault()
  alert(`Submit Click`)
} 

const Register = (props: Props) => {
  return (
    <>
      <MobileHeader />
      <img className='iconName'/>
      <div className='signupContent'>
        <h1>Glad to help You</h1>

        <form action="post">
          <label htmlFor="userName">
            Username
            <input type="text" name='userName' placeholder='enter username here'/>
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name='email' placeholder='enter email here'/>
          </label>
          <label htmlFor="password">
            Password
            <input type="password" name='password' placeholder='enter password here'/>
          </label>
          <button type='submit' className='signupBtn' onSubmit={handleSubmit}>Login</button>
          <Link to='/login'>Or log in here!</Link>
        </form>

      </div>
    </>
  )
}

export default Register