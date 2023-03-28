import { configureStore } from '@reduxjs/toolkit'
import placesMarksReducer from './slices/placeMarkSlice'
import todosReducer from './slices/todoSlice'
import postsMarksReducer from './slices/postMarkSlice'
import reviewSlice from './slices/reviews/reviewSlice'
import commentSlice from './slices/comments/commentSlice'
import placeSlice from './slices/places/placeSlice'
import postSlice from './slices/posts/postSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    placeMarks: placesMarksReducer,
    postMarks: postsMarksReducer,
    reviews: reviewSlice,
    comments: commentSlice,
    places: placeSlice,
    posts: postSlice,
    
  },
})