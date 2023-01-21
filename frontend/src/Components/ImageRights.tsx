import { Link } from "react-router-dom"

function ImageRights() {

  const handleClick = () => {
    window.open('https://icons8.com/illustrations/style--3d-casual-life', "_blank")
  }

  return (
    <div aria-label='containerImageRights'
      className='flex flex-col justify-center items-center relative
        top-[400px] right-[30px] p-2 rounded-full gap-2 shadow-inner
        transition duration-500 hover:bg-white translate-y-8'>
      {/* FLAG */}
      <div aria-label='flag'
        className='hover:'>
        <div className='w-[30px] h-[15px] bg-blue-800 rounded-tl-full rounded-tr-full'></div>
        <div className='w-[30px] h-[15px] bg-yellow-400 rounded-bl-full rounded-br-full'></div>
        
        <div className="w-[30px] h-[95px] opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10
        flex justify-center items-top top-[-58px] left-[6px] text-opacity-20 text-center text-xs text-gray font-semibold">Support for ukraine</div>
      </div>
      {/* IMAGE-RIGHTS LINK */}
      <div>
        <button
        onClick={handleClick}
        className='text-gray text-opacity-50
        font-black bg-background flex justify-center items-center
        p-2 rounded-3xl w-[30px] h-[30px] cursor-pointer'
        >O!</button>
        <div className="w-[30px] h-[65px] opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10
        flex justify-center items-end top-[60px] left-[8px] text-opacity-20 text-center text-xs text-gray font-semibold">Illustration page</div>
        </div>
    </div>
  )
}

export default ImageRights