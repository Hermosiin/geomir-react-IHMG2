import React from 'react'
import { Link } from "react-router-dom";
import { delpostmark } from '../slices/postMarkSlice';

const PostMark = ({postMark}) => {
    console.log(postMark)
    return (
        <>
            <td>{postMark.body}</td>
            <td><Link to={postMark.ruta}>VEURE</Link></td>
            <br></br>
            <td><button onClick={(e) => {dispatch(delpostmark(postMark.id))}}>ESBORRAR</button></td>
        </>
    )
}

export default PostMark