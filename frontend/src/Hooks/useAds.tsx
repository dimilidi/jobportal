import React, { useState,  useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../api/axiosInstance'


type Ad = {
    _id: string
    title: string
    category: string
    description: string
    wage: number
    contactVia: string
    createdAt: string
}

type AdHook= {
    // list: Ad[]
    // min: number
    // max: number
    // band: string
    // setMin: (min: number) => void 
    // setMax: (max:number) => void
    // setBand: (band: string) => void
}



function useAds():AdHook{
    const [list, setList]   = useState<Ad[]>([])

    useEffect(() => {
        fetchAds()
    }, [])
    
    const fetchAds = async() => {
        try {
            const res = await axiosInstance.get('/ads');
            const data = res.data;
            console.table("data /ads" + data);
            setList(data);
        } catch (error) {
            console.log(error)
        }
        //.then((res) => {console.log(res.data);
        // })
        //.catch(() => console.log('Error'))
    }

  return (
    list
  )
}

export default useAds