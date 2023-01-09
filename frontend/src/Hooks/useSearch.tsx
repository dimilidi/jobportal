import React, { createContext, useContext, useState } from 'react'

type SearchCtx = {
  searchWord: string | null
  setSearchWord: React.Dispatch<React.SetStateAction<string | null>>
  startSearch: boolean
  setStartSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchContext = createContext<SearchCtx>({
  searchWord: null,
  setSearchWord: () => null,
  startSearch: false,
  setStartSearch: () => false,
})

export const SearchProvider = (props: { children: React.ReactElement }) => {
  const [searchWord, setSearchWord] = useState<string | null>(null)
  const [startSearch, setStartSearch] = useState(false)

  console.log('search', searchWord)

  return (
    <SearchContext.Provider
      value={{ searchWord, setSearchWord, startSearch, setStartSearch }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  return useContext(SearchContext)
}

export default useSearch
