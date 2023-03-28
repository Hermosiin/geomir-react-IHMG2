import { startLoadingPlaces, setError, setPlaces, setPlace, setFavorites, setFavorited } from "./placeSlice";
import { useNavigate } from "react-router-dom";

export const getPlaces = (page = 0, authToken, usuari="") => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPlaces());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "https://backend.insjoaquimmir.cat/api/places"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setPlaces(resposta.data));
        } else {
            dispatch(setError(resposta.message));
        }
    };
}

export const addPlace = (formulari, authToken) => {
    return async (dispatch, getState) => {

    let { name, description, upload, latitude, longitude, visibility } = formulari;
    const formData = new FormData();
        
    formData.append("name", name);
    formData.append("description", description);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);

    const data = await fetch(
      "https://backend.insjoaquimmir.cat/api/places/",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Place Creat");
    } else {
        setError(resposta.message);
    }
  };
}

export const getPlace = (id, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPlaces());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "https://backend.insjoaquimmir.cat/api/places/" + id

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setPlace(resposta.data));
            dispatch(setFavorites(resposta.data.favorites_count));
            dispatch(testFavourites(id, authToken));

        } else {
            dispatch(setError(resposta.message));
        }
    };
}

export const editPlace = (formulari, authToken, place) => {
    return async (dispatch, getState) => {

    let { name, description, upload, latitude, longitude, visibility } = formulari;
    const formData = new FormData();
        
    formData.append("name", name);
    formData.append("description", description);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);

    const data = await fetch(
      "https://backend.insjoaquimmir.cat/api/places/" + place.id,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Place Editat");
    } else {
        setError(resposta.message);
    }
  };
}

export const delPlace = (place, authToken) => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPlaces());

        const data = await fetch(
            "https://backend.insjoaquimmir.cat/api/places/" + place.id,
            {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            }
        );
        const resposta = await data.json();
        console.log(resposta);

        if (resposta.success == true) {
            dispatch (getPlaces(0, authToken))
        }
    };
};

export const testFavourites = (id, authToken) => {
    return async (dispatch, getState) => {
        
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setFavorited(false));
            console.log('Favorited False')
            const headers = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            };
            const url = "https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites"
    
            const data = await fetch(url,  headers  );
            const resposta = await data.json();

        } else {
            dispatch(setFavorited(true));
            console.log("Favorited");
        }
    };
}

export const favourite = (id, authToken, favorites) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setFavorited(true));
            dispatch(setFavorites(favorites + 1));
        } else {
            dispatch(setFavorited(false));
        }
        
    };
}

export const unfavourite = (id, authToken, favorites) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "DELETE",
        };
        const url = "https://backend.insjoaquimmir.cat/api/places/" + id + "/favorites"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setFavorited(false));
            dispatch(setFavorites(favorites - 1));
        }
    };
}