import React from 'react'
import SpellsList from '../../components/spellsList';
import TopFold from '../../components/topfold';
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <TopFold />
        <SpellsList />
    </div>
  );
};

export default Home ;