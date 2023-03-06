import React from 'react'
import { Link } from "react-router-dom";

const PostMark = ({mark,handleDeleteMark}) => {
    console.log(mark)
    return (
        <>
            <td>{mark.body}</td>
            <td><Link to={mark.ruta}>VEURE</Link></td>
            <br></br>
            <td><button onClick={(e) => {handleDeleteMark(mark.id)}}>ESBORRAR</button></td>
        </>
    )
}

export default PostMark