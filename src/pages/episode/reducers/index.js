import * as actionTypes from '../actions/index';

function episodeHasErrored(state, action) {
    return {...state, hasErrored: action.hasErrored}
}

function episodeIsLoading(state, action) {
    return {...state, isLoading: action.isLoading}
}


function episodeRequestSuccess(state, action) {
    let result = {...state, 
        episode: action.episode[0],
        isReady:true
    };
    return result;
}

function episodeResetStore(state, action) {
    let result = {...state, 
        episode: {},
        isReady:false
    };
    return result;
}



const initialState = {
    episode: {},
    hasErrored: false,
    isLoading: false,
    isReady: false
};

const ACTION_HANDLERS = {
    [actionTypes.EPISODE_IS_LOADING]: (state, action) => episodeIsLoading(state,action),
    [actionTypes.EPISODE_REQUEST_SUCCESS] : (state, action) => episodeRequestSuccess(state,action),
    [actionTypes.EPISODE_REQUEST_ERROR] : (state, action) => episodeHasErrored(state,action),
    [actionTypes.EPISODE_RESET_STORE] : (state, action) => episodeResetStore(state,action),
    
};

export default function setsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    const resultState = handler ? handler(state, action) : state
    return resultState
};
