import axios from "axios";
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";

const Create = ()=>{
   const [names,setName] = useState("")
   const [email,setEmail] = useState("")
   const history = useNavigate()
   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('clicked for create')
    axios.post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube",{
        names: names,
        email: email

    }).then(()=>{
        history("/read")
    })
   }

return(
    <>
    <div className="d-flex" justify-content-between m-2>
        <h2>Create</h2>
        <Link to="/read">
        <button className="btn" btn-primary>show data</button>
        </Link>

    </div>
    <form action="">
        <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control"
            onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"
      onChange = {(e)=>setEmail(e.target.value)}  />
        </div>
        <button type= "submit" className="btn btn-primary" onClick={handleSubmit}>
            submit
        </button>

    </form>
    </>
)
}
export default Create
