import { useNavigate } from 'react-router-dom'

import UniButton from '../Components/UniButton'

type Props = {}

const NotFound = (props: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div>
      <p>Oops, we couldn't find the page!</p>
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
