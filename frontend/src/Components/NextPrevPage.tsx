import React, { ReactNode } from 'react'
import {useState} from 'react'
import {GrPrevious, GrNext} from 'react-icons/gr'


function NextPrevPage() {
    type Props= {
        page: Number | ReactNode
    }

  const [page, setPage] = useState(0)

  return (
    <div>
        <button 
            disabled={page === 0}
            onClick={()=> setPage(page - 1)}
            >
            <GrPrevious />
          </button>
          <button onClick={()=> setPage(page + 1)}>
          <GrNext />

          </button>
    </div>
  )
}

export default NextPrevPage