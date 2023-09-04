"use client"

import React from 'react'
import { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
    const [manufacturer, setManufacture] = useState('');

    const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacture}
            />
        </div>
    </form>
  )
}

export default SearchBar
