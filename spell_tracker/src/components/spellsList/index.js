import React from 'react'
import Card from './card'
import './spellsList.css'

const SpellsList = () => {
  const list=[
    {
      title: "Sacred Flame",
      description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
      logo: "logo here",
      addedAt: Date.now()
    },
    {
      title: "Sacred Flame",
      logo: "logo here",
      addedAt: Date.now()
    }
]
  return (
    <div> 
      {list.length?(
        list.map(item =>(
          <Card item={item}/>
        ))
      ):null}  
    </div>
  )
}

export default SpellsList