import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    places: [],
    place: {
        file: { filepath:""},
        author: { name:""},
        title: "",
        description: "",
        visibility: "",
        latitude: 0,
        longitude: 0,
    },
    page: 0,
    isLoading: false,
    favorites: 0,
    favorited: false,
    error: "",
}

export const placeSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        startLoadingPlaces: (state) => {
            state.isLoading = true;
        },

        setPlaces: (state, action ) => {
            state.places = action.payload
            state.isLoading = false
        },

        setPlace: (state, action ) => {
            state.place = action.payload
            state.isLoading = false
        },

        setFavorites: (state, action ) => {
            state.favorites = action.payload
        },

        setFavorited: (state, action ) => {
            state.favorited = action.payload
        },

        setError: (state,action) => {
            state.error = action.payload
        },
    }
});

export const { startLoadingPlaces, setPlaces, setPlace, setFavorites, setFavorited, setError } = placeSlice.actions;
export default placeSlice.reducer