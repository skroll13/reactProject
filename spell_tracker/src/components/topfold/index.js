import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchSpell } from '../../redux/actions/spells';
import './topfold.css'

const TopFold = () => {
  const [query, setQuery]= useState("");
  const dispatch = useDispatch();
  const handleQuery=(e)=>{
    setQuery(e.target.value)
    dispatch(searchSpell(e.target.value))
  }
  return ( 
    <div className='topfold'>
      {window.location.pathname === '/' ? <div className='home-topfold'>
        <div className='search-bar'>
          {/* the search icon isn't showing up. work on this if there's time  */}
          {/* <a href="https://www.vecteezy.com/vector-art/4846677-magnifying-glass-icon-vector-search-loupe-lens-glass-magnifier-find-zoom-sign-icon-free-vector"></a> */}
          <input
          value={query}
          placeholder='Search for Spells' 
          onChange={(e)=>handleQuery(e)} 
          />
        </div>
       <Link to='/add-spell'>
        <div className='add-button'>
            <label>Add</label>
        </div>
       </Link>
      </div>:(
        <div className='add-topfold'>
          <div className='add-topfold-button'>
            <label>Back</label>
          </div>
          <div className='add-topfold-button'>
            <label>Cancel</label>
          </div>
      </div>
        )}
      
    </div>
  )
}

export default TopFold