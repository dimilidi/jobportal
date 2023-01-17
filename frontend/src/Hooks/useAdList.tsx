// Hooks
import { useState, useEffect} from 'react'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'

type AdHook = {
  adList: Ad[] | []
  isLoading: boolean
  error: string
  pageCount: number
  page: number
  setPage: (page:number) => void
}

function useAdList(queries: string): AdHook {
  const [adList, setAdList] = useState<Ad[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)



  const fetchAdList = async () => {
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(`ads?${queries}`)
      const data = res.data
      setAdList(data.ads)
      setPageCount(Math.ceil(data.pagination.pageCount))
      
    } catch (error) {
      setError('Something went wrong!')
    }
    setIsLoading(false)
  }


  useEffect(() => {
    fetchAdList()
  }, [queries, adList.length])

  return { adList, error, isLoading, pageCount, page, setPage}

}

export default useAdList
