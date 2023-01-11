// Hooks
import { useState, useEffect } from 'react'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'

type AdHook = {
  adList: Ad[] | []
  isLoading: boolean
  error: string
}

function useAdList(queries: string): AdHook {
  const [adList, setAdList] = useState<Ad[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchAds = async () => {
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
    fetchAds()
  }, [queries, adList.length])

  return { adList, error, isLoading }
}

export default useAdList
