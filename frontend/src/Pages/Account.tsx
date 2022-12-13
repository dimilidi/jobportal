import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  

}

const handleClick = async (e:React.FormEvent) => {
  e.preventDefault()
  alert(`Click`)
} 

const Account = (props: Props) => {
  return (
    <>
      <div className='profileCard'>
        <img src="" alt="User Avatar" />
        <h1>Viktoria Schulz</h1>
        <h2 className='professionSubtitle'>Web-Developer</h2>
        <h3 className='descriptionTitle'>Description</h3>
        <p className='userDescription'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum omnis sapiente eum illo ratione sunt dignissimos dolorem animi delectus sit voluptatem aperiam maxime provident natus, totam consequuntur pariatur suscipit?
        </p>
        <div className='userContactData'>
          <div className='userEmail'>email@email.com</div>
          <div className='userPhone'>1234567890</div>
          <div className='zipAndCity'>79111 Freiburg</div>
        </div>
        <button className='editProfileBtn' />
      </div>

      <div className='postAndBrowseButton'>
        <button className='postAdBtn' onClick={handleClick}></button>
        <button className='browseJobsBtn' onClick={handleClick}></button>
      </div>

      <div className='userAdsList'>
        <ul>
          <li><Link to='/ads/:id'>Ad Component Instanz</Link></li>
          <li><Link to='/ads/:id'>Ad Component Instanz</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Account