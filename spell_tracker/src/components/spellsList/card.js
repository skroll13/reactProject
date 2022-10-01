import React from 'react'
import './card.css'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteSpell } from '../../redux/actions/spells';

const Card = ({ item }) => {
    console.log(item)
    const time=moment(item.createdAt).fromNow()
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteSpell(item));
    }
  return (
    <div className='card' style={{borderRight: `6px solid ${item.category.color}`}}>
        <div className='card-image-container'>
            <img 
            src={item.category.icon.default} 
            alt={item.category.title}
            className='card-image'
            />
        </div>
        <div className='card-info'>
            <label className='card-title'>{item.title}</label>
            <label className='card-time'>{time}</label>
        </div>
        <div className='card-right'>
            <div className='delete-icon' onClick={handleDelete}>
                {/* possible to add delete icon here */}
                <label>delete</label>
            </div>
        </div>
    </div>
  )
}

export default Card