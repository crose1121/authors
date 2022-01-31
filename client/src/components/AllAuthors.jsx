import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";


const AllAuthors = (props) => {


    const [allAuthors,setAllAuthors] = useState([])
    const [isDeleted,setIsDeleted] = useState(false);

    const {id} = useParams();
    
    const history = useHistory();


    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                console.log("Logging result from getting all authors: ",res)
                setAllAuthors(res.data.results)
            })
            .catch(err=>{
                console.log("Error when trying to get all authors: ",err)
            })
    },[isDeleted, props.newAuthorAdded])


    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res=>{
                console.log("Successfully deleted Author: ",res)
                setIsDeleted(!isDeleted)
                history.push("/")
            })
            .catch(err=>console.log("Error when trying to delete a product: ",err))
    }


    return (
        <div>
            <h5>All Authors are listed here</h5>

            {
                allAuthors.map((item,i)=>{
                    return (
                        <div style={{border: "1px solid black"}} key={i}>
                            <p>{item.firstName} {item.lastName}</p>
                            <Link to={`/author/edit/${item._id}`} className="btn btn-warning">Edit Author</Link>
                            <button onClick={()=>deleteAuthor(item._id)} className="btn btn-danger">Delete Author</button>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllAuthors;