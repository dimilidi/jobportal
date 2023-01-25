

function Footer() {

  const handleClick = () => {
    window.open('https://icons8.com/illustrations/style--3d-casual-life', "_blank")
  }

  return (
    <footer className='
      w-full mx-auto
      absolute bottom-0
      flex justify-center flex-row items-center'>
      <div className='
        w-full 
        p-4 
        z-10 
        rounded-t-[40rem] 
        opacity-90 
        bg-darkBeige 
        md:w-4/5'>
        <p className='
          text-l text-center text-gray text-opacity-30 font-light'>
          {' '}
          &copy; 2022 All rights reserved{' '}
          <span className='font-bold mr-2 hidden md:inline'> Jobsy.</span>

          <div className=" hidden md:inline">
          <span>Image credits to</span>
          </div>
          <span className="inline relative left-2 mr-4 bg-gray bg-opacity-30 text-background font-black rounded-full p-1 text-xs cursor-pointer" onClick={handleClick}>O!</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
