import React, { useState,  useEffect } from 'react'
import axios from 'axios'


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
        axios.get('/ads')
            .then((res) => {console.log(res.data);
             })
            .catch(() => console.log('Error'))
    }, [])


  return (
    <div><>{list}</></div>
  )
}

export default useAds