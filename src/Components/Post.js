import React from "react";
import { useParams,useNavigate } from "react-router-dom";


export default function Post() {

    const params = useParams();
    const navigate = useNavigate();

    function goBack() {
        navigate("/posts", {
            replace:true
        });
       // navigate(-2);  //for 2 step back
    }

    return (
        <div>
            <h1>Post</h1>
            <p>Post id is {params.postIdx}</p>
            <button type="button" onClick={goBack} >Go BACK</button>
        </div>
    );
}