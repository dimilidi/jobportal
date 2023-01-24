import React, { useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import useAd from '../Hooks/useAd'
import useAdList from '../Hooks/useAdList'
import useSearch from '../Hooks/useSearch'
import Ad from '../Components/Ad'



const Search = () => {
  const {adList, setFilteredAds, filteredAds} = useAdList(``)
  
  const { searchWord, setSearchWord} = useSearch()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)  

    const filteredAdsByUserName = adList.filter(
      (ad) => ad.user.name?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAds(filteredAdsByUserName)
    console.log(filteredAds);
    
  }

  const handleClick = (e: React.FormEvent) => {
    setSearchWord('')
  }



  return (
    <div 
    aria-label='search-home'
    className='flex items-center justify-center w-[20rem]
     sm:w-full

     '>

      <label className='relative  w-full  '>
        <GoSearch className='w-[20px] absolute top-4 left-4 text-gray text-opacity-50' />
        <IoMdClose
        className='absolute top-3 right-4 text-gray text-opacity-30 cursor-pointer hover:text-gray' size={24}
        onClick={handleClick} 
        />
        <input
          type='text'
          className='w-full items-start py-[12px] px-16
          box-border placeholder:text-center rounded-full bg-darkBeige shadow-inner placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
          placeholder='Search'
          value={searchWord}
          onChange={(e) => handleChange(e)}
        />
      </label>

      {/* {filteredAds.length >0 && filteredAds.map((a:any) =><div><Ad ad={a} /></div> )} */}
                  
  
    </div>
  )
}

export default Search
