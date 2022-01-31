import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";


const EditAuthorForm = (props) => { //change function name for each project

    let [authorObj, setAuthorObj] = useState({
        firstName: "",
        lastName: ""
    });

    const {id} = useParams();
    const history = useHistory();

    let [formErrors, setFormErrors] = useState({});
        
    

    const changeHandler = (e) => {
        setAuthorObj({
            ...authorObj,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("logging res of single author: ",res)
                if (res.data.message) {
                    console.log("firstName===undefined")
                    history.push("/error")
                }
                else {

                    setAuthorObj(res.data.results)
                }
                // console.log(res)
            })
            .catch(err=>console.log("Error when trying to get all authors: ",err))
    },[])

    const updateAuthorForm= (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/edit/${id}`, authorObj)
            .then(res=>{
                console.log("Logging response after submitting update form: ",res)
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                else {
                    history.push("/")
                }
            })
            .catch(err=>console.log("There was an error when trying to edit a Author: ",err))
    };

return (
    <div>
        <form action="" onSubmit={updateAuthorForm}>
            <p className="text-danger">{formErrors.message?.message}</p>
            <div className="form-group">
                <label htmlFor="">Author First Name: </label> {/* change labels and inputs for each project*/ }
                <input type="text" name="firstName" value={authorObj.firstName} className="form-control" onChange={changeHandler}/>
                <p className="text-danger">{formErrors.firstName?.message}</p>
            </div>

            <div className="form-group">
                <label htmlFor="">Author Last Name: </label> {/* change labels and inputs for each project*/ }
                <input type="text" value={authorObj.lastName} name="lastName" className="form-control" onChange={changeHandler}/>
                <p className="text-danger">{formErrors.lastName?.message}</p>
            </div>

            <hr />
            <p>
            <input type="submit" value="Submit Changes" className="btn btn-info" />
            <Link to="/" className="btn btn-warning">Cancel</Link>
            </p>
            
        </form>
    </div>
);
}


export default EditAuthorForm; 