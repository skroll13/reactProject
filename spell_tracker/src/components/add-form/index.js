import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { categories } from '../../constants/addSpell'
import { addSpell } from '../../redux/actions/spells'
import './add-form.css'

const AddForm = () => {
    const categories = categories
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle]= useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleDescription=(e) => {
        setDescription(e.target.value)
    }
    const handleCategory =(category)=> {setCategory(category), setCategory(false)}
    const handleSubmit=()=>{
        console.log("add button clicked")
        if(title==='' || description==='' || !category){
            console.log("not an option")
            return
        }
    }
    const data ={
        title,
        description,
        category,
        createdAt: new Date()
    }
    dispatch(addSpell(data))
  return (
    <div className='add-form'>
        <div className='form-item'>
            <label>Title</label>
            <input placeholder='name the spell' value={title} onChange={(e)=>handleTitle(e)} />
        </div>
        <div className='form-item'>
            <label>description</label>
            <input value={description} placeholder="enter description" className="description-input" onChange={(e)=>handleDescription(e)} ></input>
        </div>
        <div className='category-container-parent'>
            <div className='category'>
                <div className='category-dropdown' onClick={()=>setCategory(!categoryOpen)}>
                    <div>
                        <label>{category?category.title:'Category'}</label>
                    </div>
                    {categoryOpen && <div className='category-container'>
                        {categories.map(category=>(
                            <div 
                            className='cateogry-item' 
                            style={{borderRight:`5px solid ${category.color}`}} 
                            key={category.id} 
                            onClick={()=>handleCategory(category)}
                            >
                            <label> {category.title} </label>
                            <img src={category.icon.default} alt={category.title}/>
                            ))}
                            </div>}
                    </div>
             </div>
            </div>
        </div>
        <div className='form-add-button'>
            <div onClick={handleSubmit}>
                <label>Add</label>
            </div>
        </div>
    </div>
    )
}

export default AddForm