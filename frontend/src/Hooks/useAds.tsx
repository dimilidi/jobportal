import React, { useState,  useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../api/axiosInstance'
import { useParams } from 'react-router-dom'
import useUser from './useUser'



type Ad = {
    _id: string
    title: string
    category: string
    description: string
    location:string
    wage: number
    contactVia: string
    createdAt: Date 
    user: {
        name:string
        email:string
        phone: string
       
    }
}

type AdHook= {
    list: Ad[]
    ad: Ad | null
    isLoading:boolean
    error:string
    setIsLoading: (isLoading:boolean) => void
    setError: (error:string) => void
}



function useAds():AdHook{
 
    const params = useParams()

    const [list, setList] = useState<Ad[]>([])
    const [ad, setAd] = useState<Ad | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        fetchAds()
    }, [])

 
    const fetchAds = async() => {
       
        try { 
            setIsLoading(true)
            const res = await axiosInstance.get('/ads');
            const data = res.data;
            console.table("data /ads" + data);
            setList(data);
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }


    const getAdById = async() => {
        try {
            setIsLoading(true)
            const res = await axiosInstance.get(`./ads/${params.id}`)
            const data = res.data
            // console.log(`data/ads/${params.id}`, data)
            setAd(data)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(true)
    }

    useEffect(() => {
        getAdById()
    },[params.id])



  return ({list,ad, setIsLoading, setError, error, isLoading})
}

export default useAds