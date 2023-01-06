

function Footer() {
  return (
    <footer className='
      w-full mx-auto
      absolute bottom-0
      flex justify-center'>
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
          <span className='font-bold'> Jobsy.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
