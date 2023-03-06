import React, { useEffect, useReducer } from 'react'
import PlaceMark from './PlaceMark';
import placesMarksReducer from './placesMarksReducer';

const initialState = [];

const init = ()=> {

    return JSON.parse(localStorage.getItem("marksPlaces")) || []
}

const PlaceMarks = () => {

    const [marks, dispatchPlaces] = useReducer(placesMarksReducer, initialState,init);

    useEffect(() => {
        localStorage.setItem("marksPlaces", JSON.stringify(marks));
      }, [marks]);

    const handleDeleteMark = (id) => {
        console.log("AQui arribo " + id);
        dispatchPlaces({
            type: "Del Mark",
            payload: id
        });
        console.log("Mark Eliminado")
    };

    return (
        <>
        {marks.map((mark) => (
            <>
            <th>Name</th>
            <th>Description</th>
            <th colSpan={2}>Actions</th>
            <tr>
                <PlaceMark key={mark.id} mark={mark} handleDeleteMark={handleDeleteMark}/>
            </tr>
            </>
        ))}
        </>
    )
}

export default PlaceMarks
