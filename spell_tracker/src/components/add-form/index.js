import React from 'react'
import './add-form.css'

const AddForm = () => {
    const [title, setTitle]= useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
  return (
    <div className='add-form'>
        <div className='form-item'>
            <label>Title</label>
            <input placeholder='name the spell' value='' onChange={()=>console.log("hello")} />
        </div>
        <div className='form-item'>amount</div>
        <div className='category-container-parent'>

        </div>
    </div>
  )
}

export default AddForm