// Hooks
import { useState, useEffect, useCallback } from 'react'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'

type AdHook = {
  adList: Ad[] | []
  isLoading: boolean
  error: string
  page: number
  setPage: ( page:number ) => void
}

function useAdList(queries: string): AdHook {
  const [adList, setAdList] = useState<Ad[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)


  const fetchAdList = async () => {
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(`ads?${queries}`)
      const data = res.data
      setAdList(data)
    } catch (error) {
      setError('Something went wrong!')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAdList()
  }, [queries, adList.length, page])

  return { adList, error, isLoading, page, setPage }
}

export default useAdList
