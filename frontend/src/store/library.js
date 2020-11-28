import {useSelector} from 'react-redux'

const ADD_LIBRARY = 'library/addLibrary';
const LOAD_ALL_LIBRARIES = 'library/loadAllLibraries'
const LOAD_LIBRARY_GAMES = 'library/loadLibraryGames'

// const userId = useSelector(state => state.session.user.id);

export const grabAllLibraries = (userId) => async(dispatch) => {

    const res = await fetch(`/api/users/${userId}/libraries`);
    const data = await res.json();
    if (res.ok) {
        dispatch(loadAllLibraries(data.allLibraries))
        return data.allLibraries
    }
}

export const loadSelectedLibrary = (libraryId, userId) => async(dispatch) => {
    if (libraryId === []) return;
    // console.log(libraryId)
    const res = await fetch(`/api/users/${userId}/library_games/${libraryId}`);
    const data = await res.json();
    console.log('loadSelectedLibrary ran')
    // console.log(data)
    let newData = []
    
    data.user_games.forEach((el,i) => {
        let newObj = {...data.user_games[i], ...data.game_info[i]}
        newData.push(newObj)
    })
    // console.log(newData)

        
        
    if (res.ok) {
        dispatch(LoadLibraryGames(newData))
        return data
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

const LoadLibraryGames = (games) => {
    return {
        type: LOAD_LIBRARY_GAMES,
        payload: games
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
        case LOAD_LIBRARY_GAMES: 
            newState = Object.assign({}, state);
            newState.current_library_games = [...action.payload];
            return newState
        default:
            return state
    }
}


export default libraryReducer