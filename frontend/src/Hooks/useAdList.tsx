// Hooks
import axios from 'axios'
import { useState, useEffect, useCallback, useRef } from 'react'
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
  hasMore: boolean
  lastAdRef: any
}

function useAdList(queries: string): AdHook {
  const [adList, setAdList] = useState<Ad[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

console.log(page);
useEffect(() => {
  setAdList([])
},[queries])


  const fetchAdList = async () => {
    let cancel
    setError('')
    setIsLoading(true)
    try {
      const res = await axiosInstance.get(`ads?${queries}`
      , {
        cancelToken: new axios.CancelToken(c => cancel = c)})
      const data = res.data
      setAdList(data)
  
    } catch (error) {
      if (axios.isCancel(error)) return
      setError('Something went wrong!')
    }
      setHasMore(adList.length > 0 )

    setIsLoading(false)
  }


  useEffect(() => {
    fetchAdList()
  }, [queries, adList.length])



  const observer = useRef<IntersectionObserver|null>(null)
  const lastAdRef = useCallback( (node: HTMLDivElement) => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(page => page + 1)
        console.log('ENTRIES',observer.current)
   
      }
    })
    if (node) observer.current.observe(node)

  }, [isLoading, hasMore])
 

  return { adList, error, isLoading, hasMore, lastAdRef, page, setPage}

}

export default useAdList
