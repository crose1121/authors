import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";


const NewAuthorForm = (props) => { //change function name for each project

    let [authorObj, setAuthorObj] = useState({
        firstName: "",
        lastName: ""
    });

    // we need formErrors

    let [formErrors, setFormErrors] = useState({});
    
    const history = useHistory();    
    
    

    const changeHandler = (e) => {
        setAuthorObj({
            ...authorObj,
            [e.target.name]: e.target.value
        })
    }

    const submitNewAuthor = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", authorObj)
            .then(res=>{
                console.log("Logging from the front end when trying to create new author: ",res)
                if (res.data.errors) {
                    console.log("Logging res.data.errors: ---> ",res.data.errors)
                    setFormErrors(res.data.errors)
                    console.log("Logging formErrors: ", formErrors)
                }
                else {
                    props.setNewAuthorAdded(!props.newAuthorAdded)
                    history.push("/")
                }
                
            })
            .catch(err=>console.log("Error from front end when trying to create new author: ",err))
    }

    return (
        <div>
            <form action="" onSubmit={submitNewAuthor}>

                <div className="form-group">
                    <label htmlFor="">Author First Name: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" name="firstName" className="form-control" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Author Last Name: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" name="lastName" className="form-control" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.lastName?.message}</p>
                </div>

                <hr />
                <p>
                    <input type="submit" value="Submit New Author" className="btn btn-info" />
                    <Link to="/" className="btn btn-warning">Cancel</Link>
                </p>
            </form>
        </div>
    );
};



export default NewAuthorForm; //change this for each project