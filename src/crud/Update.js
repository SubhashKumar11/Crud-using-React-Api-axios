import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
const Update = () => {
    const [id,setId] = useState(0)
    const [name,setname] = useState(" ")
     const [email,setEmail] = useState(" ")
     useEffect(() => {
        setId(localStorage.getItem("id"))
        setname(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        
     }, [])
     const handleUpdate = (e)=>{
        e.preventDefault();
        console.log("id..",id)
     }
    axios.put(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube ${id}`,{
        mame:name,
        email : email
    }).then(()=>{Navigate('/read')})
     return (
    <>
    <h2>Update operation</h2>
    <form action="">
        <div className="mb-3">
            <label htmlFor="">Name</label>
            <input type="text" value={name} 
            onChange={(e)=>setname(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Name</label>
            <input type="email" value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary mx-2'
        onClick={handleUpdate}>
          UpdateKaro
        </button>
        <Link to='/read'>
        <button className="btn btn-secondary mx-2">BackJao</button>
        </Link>

    </form>
    </>
  )
}

export default Update