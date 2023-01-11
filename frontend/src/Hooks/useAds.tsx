// Hooks
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
// Axios
import axiosInstance from '../api/axiosInstance'
// type
import { Ad } from '../type'
import { notify } from '../utils/toastNotification'

type AdHook = {
  adList: Ad[] | []
  ad: Ad | undefined | null
  isLoading: boolean
  error: string
  deleteAd: () => void
  updateAd: (newAd:{}) => {}
}

function useAds(url: string): AdHook {
  const navigate = useNavigate()

  const [adList, setAdList] = useState<Ad[] | []>([])
  const [ad, setAd] = useState<Ad | undefined | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  console.log('listBEVORE ->',adList);
  // console.log('AD',ad);
  
  // FETCH ADS
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


  // DELETE AD
  const deleteAd = async () => {
    setIsLoading(true)
    try {
      await axiosInstance.delete(`/ads/${ad?._id}`)
      setAd (null)
      setAdList(adList.filter((item) => item._id !== ad?._id))
      // fetchAds(url)
      console.log('listAFTER ->',adList);
  console.log('AD',ad);
  
      console.log('adLIST length',adList.length);
    } catch (error) {
      notify('Something went wrong');
    }
    setIsLoading(false)

  }


  // UPDATE AD
  const updateAd = async (newAd:{}) => {
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


  return { adList, ad, deleteAd, updateAd,  error, isLoading }
}

export default useAds
