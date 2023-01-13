import React from 'react'

type Props = {
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const SearchRadio = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectedCategory(e.target.value)
  }

  return (
    <div className='flex gap-3 w-[100%] mx-auto items-start pl-3 mb-1 mt-1 ml-6
    md:pl-8 
    lg:pl-5 '>
      <div>
        <input
          className='mr-1 accent-darkGreen '
          type='radio'
          id='all'
          name='category'
          value='all'
          checked={props.selectedCategory == 'all'}
          onChange={handleChange}
        />
        <label  htmlFor='all'>All</label>
      </div>
      <div >
        <input
          className='mr-1 accent-darkGreen'
          type='radio'
          id='offering'
          name='category'
          value='offering'
          checked={props.selectedCategory == 'offering'}
          onChange={handleChange}
        />
        <label htmlFor='offering'>Offering</label>
      </div>
      <div>
        <input
          className='mr-1  accent-darkGreen'
          type='radio'
          id='searching'
          name='category'
          value='searching'
          checked={props.selectedCategory == 'searching'}
          onChange={handleChange}
        />
        <label htmlFor='searching'>Searching</label>
      </div>
    </div>
  )
}

export default SearchRadio
