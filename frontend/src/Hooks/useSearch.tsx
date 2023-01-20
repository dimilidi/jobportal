import React, { createContext, useContext, useState } from 'react'

type SearchCtx = {
  searchWord: string
  setSearchWord: React.Dispatch<React.SetStateAction<string>>
  searchCategory: string
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<SearchCtx>({
  searchWord: '',
  setSearchWord: () => '',
  searchCategory: 'all',
  setSearchCategory: () => 'all',
})

export const SearchProvider = (props: { children: React.ReactElement }) => {
  const [searchWord, setSearchWord] = useState<string>('')
  const [searchCategory, setSearchCategory] = useState('all')


  const ctx = {
    searchWord,
    setSearchWord,
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
