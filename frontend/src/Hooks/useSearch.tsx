import React, { createContext, useContext, useState } from 'react'

type SearchCtx = {
  searchWord: string
  setSearchWord: React.Dispatch<React.SetStateAction<string>>
  startSearch: boolean
  setStartSearch: React.Dispatch<React.SetStateAction<boolean>>
  searchCategory: string
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<SearchCtx>({
  searchWord: '',
  setSearchWord: () => '',
  startSearch: false,
  setStartSearch: () => false,
  searchCategory: 'all',
  setSearchCategory: () => 'all',
})

export const SearchProvider = (props: { children: React.ReactElement }) => {
  const [searchWord, setSearchWord] = useState<string>('')
  const [startSearch, setStartSearch] = useState(false)
  const [searchCategory, setSearchCategory] = useState('all')

  const ctx = {
    searchWord,
    setSearchWord,
    startSearch,
    setStartSearch,
    searchCategory,
    setSearchCategory,
  }

  return (
    <SearchContext.Provider value={ctx}>
      {props.children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  return useContext(SearchContext)
}

export default useSearch
