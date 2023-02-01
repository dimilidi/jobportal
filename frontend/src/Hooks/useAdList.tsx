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
  filteredAds: any
  setFilteredAds: (filteredAds: any) => void
}

function useAdList(queries: string): AdHook {
  const [adList, setAdList] = useState<Ad[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const [filteredAds, setFilteredAds] = useState([])



  const fetchAdList = async () => {
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(`ads?${queries}`)
      const data = res.data
      setAdList(data.ads)
      filteredAds.length > 0 && setAdList(filteredAds)
      setPageCount(Math.ceil(data.pagination.pageCount))
      
    } catch (error) {
      setError('Something went wrong!')
    }
    setIsLoading(false)
  }


  useEffect(() => {
    fetchAdList()
  }, [queries, adList?.length])

  return { adList, error, isLoading, pageCount, page, setPage, filteredAds, setFilteredAds}

}

export default useAdList
