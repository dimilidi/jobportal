// Icons
import { GrPrevious, GrNext } from 'react-icons/gr'


type Props = {
    page: number
    setPage: (page:number) => void
    pageCount:number
}

function PaginationButtons({page, setPage, pageCount}: Props) {

  return (
    <div
      area-label='pages-counter'
      className=' mx-auto w-[60%] h-fit py-2 mt-2  flex items-center justify-center lg:justify-end self-end  lg:w-[70%] sm:mb'
    >
      <button
        className='w-[32px] h-[32px] flex justify-center items-center bg-darkBeige p-2 rounded-full border-darkBeige border-2 hover:bg-background'
        disabled={page === 0}
        onClick={() => setPage(page === 0 ? page : page - 1)}
      >
        <GrPrevious />
      </button>

      <span className='px-3 text-[16px] text-gray text-opacity-50'>{`${page + 1} / ${pageCount}`}</span>

      <button
        className='w-[32px] h-[32px] flex justify-center items-center bg-darkBeige p-2 rounded-full border-darkBeige border-2 hover:bg-background'
        disabled={page === pageCount - 1}
        onClick={() => setPage(page === pageCount ? page : page + 1)}
      >
        <GrNext />
      </button>
    </div>
  )
}

export default PaginationButtons
