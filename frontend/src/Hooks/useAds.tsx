// Hooks
import { useState, useEffect, useCallback } from 'react'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'

type AdHook = {
  adList: Ad[] | []
  ad: Ad | undefined | null
  isLoading: boolean
  error: string
}

function useAds(url: string): AdHook {
  const [adList, setAdList] = useState<Ad[] | []>([])
  const [ad, setAd] = useState<Ad | undefined | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchAds = async (url: string) => {
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(url)
      const data = res.data

      // if returning value is object, set it to Ad, if Array, set it to AdList
      if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
        setAd(data)
      } else {
        setAdList(data)
      }
    } catch (error) {
      setError('Something went wrong!')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (url) {
      fetchAds(url)
    }
  }, [url])

  return { adList, ad, error, isLoading }
}

export default useAds
