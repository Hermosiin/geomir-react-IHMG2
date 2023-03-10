import { configureStore } from '@reduxjs/toolkit'
import placesMarksReducer from './slices/placeMarkSlice'
import todosReducer from './slices/todoSlice'
import postsMarksReducer from './slices/postMarkSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    placeMarks: placesMarksReducer,
    postMarks: postsMarksReducer
  },
})