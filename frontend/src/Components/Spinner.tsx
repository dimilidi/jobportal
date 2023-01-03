import { Oval } from 'react-loader-spinner'
import { ReactNode } from 'react'




// function Spinner() {
//   return (
//     <div className='w-full h-[70vh] flex justify-center items-center'>
//         <Oval color='black' height={60} width={60} />
//     </div>
//   )
// }

function Spinner() {
  return (
      <Oval color='white' secondaryColor="black" height={20} width={20} />
  )
}

export default Spinner