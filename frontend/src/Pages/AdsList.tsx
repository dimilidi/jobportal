import Ad from '../Components/Ad'

type Props = {}

const AdsList = (props: Props) => {
  return (
    <>
      <div className=' w-full h-[100%] bg-background ' >
        <div className='fixed top-28 right-0 w-3/5                                border-b-[3px] border-lightGreen '>
          <h2 className='text-5xl pr-40'>
            Be part of 
            <p>our
              <span className='capitalize text-lightGreen ' > mission</span>
            </p> 
           </h2>
        </div>
     
      
      <div className='fixed  right-[-3rem] top-40  w-24 h-24 rounded-full bg-lightGreen'></div>
      <div className='flex flex-wrap mt-[250px]'>
        <div className='w-2/5 h-[500px]  bg-blue-200'></div>
        <Ad />
      </div>
      
    </div>
    </>
  
  )
}

export default AdsList