export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_REQUEST_SUCCESS = 'SET_REQUEST_SUCCESS';
export const SET_REQUEST_ERROR = 'SET_REQUEST_ERROR';

export const ICON_REQUEST_SUCCESS = 'ICON_REQUEST_SUCCESS';
export const ICON_IS_LOADING = 'ICON_IS_LOADING';
export const ICON_LOADED = 'ICON_LOADED';

export function itemsHasErrored(bool) {
    return {
        type: SET_REQUEST_ERROR,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: SET_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(sets) {
    return {
        type: SET_REQUEST_SUCCESS,
        sets
    };
}


export function iconsIsLoading(bool) {
    return {
        type: ICON_IS_LOADING,
        isLoading: bool
    };
}

export function iconsLoaded() {
    return {
        type: ICON_LOADED
    };
}


export function imageUrlSuccess(index,response) {
    return {
        type: ICON_REQUEST_SUCCESS,
        index,
        response
    };
}

export function getSets(url) {

    //I got a CORS problem trying to fetch from the API, even after setting the proper headers in the requests,
    //so I copied the response and set it in a mock server just to get the general idea of the approach.
    let endpoint = 'http:///5a5e0d03d748830012334f24.mockapi.io/ost';
    // var params = { method: 'GET',
    //            headers: {  'Accept': 'application/json','Content-Type': 'application/json',
    //                  'Access-Control-Allow-Origin':'*' }
    //        };
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


export function getIconUrl(item) {

    //should be the proper url from the item, but I'm hardcoding it to get an example
    let endpoint = 'http:///5a5e0d03d748830012334f24.mockapi.io/ost/1';
   
    return fetch(endpoint)
}
