// Hooks
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'

type AdHook = {
  ad: Ad | undefined | null
  isLoading: boolean
  error: string
}

function useAds(url: string): AdHook {
  const params = useParams()
  const [ad, setAd] = useState<Ad | undefined | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchAds = (async = () => {
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(url)
      const data = res.data
      setAd(data)
    } catch (error) {
      setError('Something went wrong!')
    }
    setIsLoading(false)
  })

  useEffect(() => {
    if (url) {
      fetchAds(url)
    }
  }, [url])

  return { ad, error, isLoading }
}

export default useAds
