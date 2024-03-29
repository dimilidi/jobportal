// Hooks
import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'
import { notify } from '../utils/toastNotification'

type AdHook = {
  ad: Ad | undefined | null
  isLoading: boolean
  error: string
  deleteAd: (adId: string) => void
  updateAd: (newAd: {}) => {}
  fetchAds: () => void
}

function useAd(): AdHook {
  const navigate = useNavigate()
  const params = useParams()
  const [ad, setAd] = useState<Ad | undefined | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchAds = useCallback(async () => {
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(`/ads/${params.id}`)
      const data = res.data
      setAd(data)
    } catch (error) {
      setError('Something went wrong!')
    }
    setIsLoading(false)
  }, [ad])

  // DELETE AD
  const deleteAd = async (adId: string) => {
    setIsLoading(true)
    try {
      await axiosInstance.delete(`/ads/${adId}`)

      setAd(null)
    } catch (error) {
      notify('Something went wrong')
    }
    setIsLoading(false)
  }

  // UPDATE AD
  const updateAd = async (newAd: {}) => {
    const response = await axiosInstance
      .put(`/ads/${ad?._id}`, newAd)
      .catch((e) => e.response)

    if (response.status === 200) {
      const id = response.data._id
      navigate('/ad/' + ad?._id)
    } else if (response.status === 400) {
      const error = response.data.message[0]
      const key = Object.keys(error)[0]
      const message = error[key]
      setError(message)
      notify(message)
      console.log(message)
    } else if (response.status === 401) {
      setError('You can edit only your ads.')
      notify(error)
    } else {
      setError('Something went wrong')
      notify(error)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchAds()
    }
    console.log(params.id);
    
  }, [params.id])
  

  

  return { ad, deleteAd, updateAd, error, isLoading, fetchAds }
}

export default useAd
