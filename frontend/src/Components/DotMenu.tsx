import { BsThreeDots } from 'react-icons/bs'

type Props = {
    isOpen: boolean
    setIsOpen: (open:boolean) => void
}

function DotMenu({ setIsOpen, isOpen }: Props) {

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div className='w-full h-[40px] flex justify-center cursor-pointer md:justify-start md:w-[150%] xl:w-[100%]'>
    <BsThreeDots
      onClick={handleToggle}
      style={{ height: '20px', width: '70%', alignSelf: 'center' }
   }
    />
  </div>
  )
}

export default DotMenu