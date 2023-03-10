import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PostMark from './PostMark';
// import postsMarksReducer from './postsMarksReducer';


// const initialState = [];

// const init = ()=> {

//     return JSON.parse(localStorage.getItem("marksPost")) || []
// }

const PostMarks = () => {

    // const [marks, dispatchPosts] = useReducer(postsMarksReducer, initialState,init);

    const { postMarks } = useSelector((state) => state.postMarks);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("marksPosts", JSON.stringify(postMarks));
      }, [postMarks]);

    // const handleDeleteMark = (id) => {
    //     console.log("AQui arribo " + id);
    //     dispatchPosts({
    //         type: "Del Mark",
    //         payload: id
    //     });
    //     console.log("Mark Eliminado")
    // };

    return (
        <>
        {postMarks.map((postMark) => (
            <>
            <th>Body</th>
            <th colSpan={2}>Actions</th>
            <tr>
                <PostMark key={postMark.id} postMark={postMark}/>
            </tr>
            </>
        ))}
        </>
    )
}

export default PostMarks
