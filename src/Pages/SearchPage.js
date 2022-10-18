import React from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import ImageResults from '../Components/ImageResults'

function SearchPage() {
  return (
    <>
        <Navbar/>
        <Search/>
        <ImageResults/>
    </>
  )
}

export default SearchPage