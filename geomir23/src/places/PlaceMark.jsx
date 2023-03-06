import React from 'react'
import { Link } from "react-router-dom";

const PlaceMark = ({mark,handleDeleteMark}) => {
    console.log(mark)
    return (
        <>
            <td>{mark.name}</td>
            <td>{mark.description}</td>
            <td><Link to={mark.ruta}>VEURE</Link></td>
            <br></br>
            <td><button onClick={(e) => {handleDeleteMark(mark.id)}}>ESBORRAR</button></td>
        </>
    )
}

export default PlaceMark