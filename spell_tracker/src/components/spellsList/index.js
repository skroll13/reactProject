import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import './spellsList.css'

const SpellsList = () => {
  const {spellsList: list, query} = useSelector((state) => state.spells)
  const filteredList = list.filter((item)=> item.title.includes(query));
  console.log("test text - SpellsList ***")
  return ( 
    <div className='spells-list'>
      {filteredList.length ? (
        filteredList.map((item) => <Card item = {item} />)) : (
        <div className='empty-state'>
          <img src='https://image.shutterstock.com/image-illustration/empty-old-magic-book-your-600w-68828275.jpg' alt='open book, nothing on the pages' className='empty-image' />
          <label>Your Spell List is Empty</label>
        </div>)} 
    </div>
  )
}

export default SpellsList


//keeping this just in case I need it later:
// const list=[
//   {
//     title: "Sacred Flame",
//     description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
//     logo: "logo here",
//     addedAt: Date.now()
//   },
//   {
//     title: "Sacred Flame",
//     logo: "logo here",
//     addedAt: Date.now()
//   }
// ]

// {list.length?(
//   list.map(item =>(
//     <Card item={item}/>
//   ))
// ):null} 