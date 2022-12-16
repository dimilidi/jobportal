
type Props = {}

function Footer({}: Props) {
  return (
    <footer className='mx-auto w-full flex justify-center align-middle sm:fixed sm:bottom-0 '>
      <div className='w-full  p-4  bottom-0 sm:left-0 z-10 rounded-t-[40rem] opacity-90 bg-darkBeige  md:w-4/5  '>
        <p className="text-l text-center text-gray text-opacity-30 font-light"> &copy; 2022 All rigths reserved <span className='font-bold'> Jobsy.</span></p>
      </div>
    </footer>
   
  )
}

export default Footer