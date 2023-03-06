import React, { useEffect, useReducer } from 'react'
import PostMark from './PostMark';
import postsMarksReducer from './postsMarksReducer';

const initialState = [];

const init = ()=> {

    return JSON.parse(localStorage.getItem("marksPost")) || []
}

const PostMarks = () => {

    const [marks, dispatchPosts] = useReducer(postsMarksReducer, initialState,init);

    useEffect(() => {
        localStorage.setItem("marks", JSON.stringify(marks));
      }, [marks]);

    const handleDeleteMark = (id) => {
        console.log("AQui arribo " + id);
        dispatchPosts({
            type: "Del Mark",
            payload: id
        });
        console.log("Mark Eliminado")
    };

    return (
        <>
        {marks.map((mark) => (
            <>
            <th>Body</th>
            <th colSpan={2}>Actions</th>
            <tr>
                <PostMark key={mark.id} mark={mark} handleDeleteMark={handleDeleteMark}/>
            </tr>
            </>
        ))}
        </>
    )
}

export default PostMarks
