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
    <div className='flex gap-2'>
      <div>
        <input
          className='mr-1'
          type='radio'
          id='all'
          name='category'
          value='all'
          checked={props.selectedCategory == 'all'}
          onChange={handleChange}
        />
        <label htmlFor='all'>All</label>
      </div>
      <div>
        <input
          className='mr-1'
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
          className='mr-1'
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
