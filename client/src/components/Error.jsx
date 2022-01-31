import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h6>This Author does not exist in our database yet. Would you like to add?</h6>
            <p>
                <Link to="/" className="btn btn-warning">Return to Home Screen</Link>
                <Link to="/author/new" className="btn btn-success">Create New Author</Link>
            </p>
        </div>
    );
};

Error.propTypes = {};

export default Error;