import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../Components/Search'
import SearchRadio from '../Components/SearchRadio'
import useSearch from '../Hooks/useSearch'
import UniButton from './UniButton'

type Props = {
  page: string
}

const SearchContainer = (props: Props) => {
  const navigate = useNavigate()
  const { searchWord, setSearchWord, searchCategory, setSearchCategory } =
    useSearch()
  const [searchInput, setSearchInput] = useState<string>(searchWord)
  const [selectedCategory, setSelectedCategory] =
    useState<string>(searchCategory)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchWord(searchInput)
    setSearchCategory(selectedCategory)
    navigate('/adslist')
  }
  return (
    <form
      className='mt-6 flex items-center justify-center gap-3 sm:w-[450px] lg:pt-[0px] lg:self-start  lg:w-[50%]'
      style={{ flexDirection: props.page == 'Home' ? 'column' : 'row' }}
      onSubmit={handleSubmit}
    >
      {/* SEARCH */}
      <div>
        <SearchRadio
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>

      {/* BUTTON Browse Ads */}
      <UniButton text='Browse Ads' type='button' />
    </form>
  )
}

export default SearchContainer
