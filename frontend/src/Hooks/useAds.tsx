// Hooks
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'

type AdHook = {
  list: Ad[]
  ad: Ad | null
  isLoading: boolean
  error: string
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string) => void
}

function useAds(): AdHook {
  const params = useParams()

  const [list, setList] = useState<Ad[]>([])
  const [ad, setAd] = useState<Ad | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAds()
  }, [])

  const fetchAds = async () => {
    setIsLoading(true)
    try {
      const res = await axiosInstance.get('/ads')
      const data = res.data

      setList(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const getAdById = async () => {
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(`./ads/${params.id}`)
      const data = res.data
      setAd(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  // Bug ??
  useEffect(() => {
    if (params.id) {
      getAdById()
    }
  }, [params.id])

  return { list, ad, setIsLoading, setError, error, isLoading }
}

export default useAds
