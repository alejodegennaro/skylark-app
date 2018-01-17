import * as actionTypes from '../actions/index';

function setHasErrored(state, action) {
    return {...state, hasErrored: action.hasErrored}
}

function setIsLoading(state, action) {
    return {...state, isLoading: action.isLoading}
}

function iconsLoaded(state, action) {
    return {...state, isLoadingIcons: false, imagesLoaded:true }
}

function iconsIsLoading(state, action) {
    return {...state, isLoadingIcons: action.isLoading}
}


function setsRequestSuccess(state, action) {
    let result = {...state, 
        sets: action.sets[0].objects,
        isReady:true
    };
    return result;
}


function getIcon(state, action) {
    let url = action.response.url.split("?");
    let item =  {...state.sets[action.index], imageUrl: url ? url[0] : "", iconIsReady:true} ;
   return {...state, 
            sets: [
                    ...state.sets.slice(0,action.index),
                    item,
                    ...state.sets.slice(parseInt(action.index)+1)
                    ]
    };
}


const initialState = {
    sets: [],
    hasErrored: false,
    isLoading: false,
    isLoadingIcons: false,
    imagesLoaded: false,
    isReady: false
};

const ACTION_HANDLERS = {
    [actionTypes.SET_REQUEST_ERROR] : (state, action) => setHasErrored(state,action),
    [actionTypes.SET_IS_LOADING]: (state, action) => setIsLoading(state,action),
    [actionTypes.SET_REQUEST_SUCCESS] : (state, action) => setsRequestSuccess(state,action),
    [actionTypes.ICON_REQUEST_SUCCESS] : (state, action) => getIcon(state,action),
    [actionTypes.ICON_IS_LOADING] : (state, action) => iconsIsLoading(state,action),
    [actionTypes.ICON_LOADED] : (state, action) => iconsLoaded(state,action),
};

export default function setsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    const resultState = handler ? handler(state, action) : state
    return resultState
};
