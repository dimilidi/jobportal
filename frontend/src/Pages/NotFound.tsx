import { useNavigate } from 'react-router-dom'

import UniButton from '../Components/UniButton'

type Props = {}

const NotFound = (props: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className='pt-[100px] h-[570px] flex flex-col justify-center items-center gap-2'>
      <h2 className='text-[6rem]'>404</h2>
      <p>Page not found</p>
      <UniButton
        text='Back'
        onClick={handleClick}
        width='133px'
        height='34px'
      />
    </div>
  )
}

export default NotFound
