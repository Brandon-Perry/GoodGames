import {useSelector} from 'react-redux'

const ADD_LIBRARY = 'library/addLibrary';
const LOAD_ALL_LIBRARIES = 'library/loadAllLibraries'

// const userId = useSelector(state => state.session.user.id);

export const grabAllLibraries = (userId) => async(dispatch) => {

    const res = await fetch(`/api/users/${userId}/libraries`);
    const data = await res.json();
    if (res.ok) {
        dispatch(loadAllLibraries(data.allLibraries))
        return data.allLibraries
    }
}



const addLibrary = (name) => {
    return {
        type: ADD_LIBRARY,
        payload: name
    }
}

const loadAllLibraries = (libraries) => {
    return {
        type: LOAD_ALL_LIBRARIES,
        payload: libraries
    }
}

const initialState = {
    libraries: null,
    current_library_games: null
}
const libraryReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case ADD_LIBRARY: 
            newState = Object.assign({},state);
            newState.libraries = [...state.libraries, action.payload];
            return newState
        case LOAD_ALL_LIBRARIES:
            newState = Object.assign({},state);
            newState.libraries = [...action.payload];
            return newState
        default:
            return state
    }
}


export default libraryReducer