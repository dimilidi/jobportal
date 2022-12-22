import { Oval } from 'react-loader-spinner'


function Spinner() {
  return (
    <div className='w-full h-[70vh] flex justify-center items-center'>
        <Oval color='black' height={60} width={60} />
    </div>
  )
}

export default Spinner