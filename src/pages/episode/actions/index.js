export const EPISODE_IS_LOADING = 'EPISODE_IS_LOADING';
export const EPISODE_REQUEST_SUCCESS = 'EPISODE_REQUEST_SUCCESS';
export const EPISODE_REQUEST_ERROR = 'EPISODE_REQUEST_ERROR';
export const EPISODE_RESET_STORE = 'EPISODE_RESET_STORE';


export function episodeResetStore() {
    return {
        type: EPISODE_RESET_STORE
    };
}

export function episodeHasErrored(bool) {
    return {
        type: EPISODE_REQUEST_ERROR,
        hasErrored: bool
    };
}

export function episodeIsLoading(bool) {
    return {
        type: EPISODE_IS_LOADING,
        isLoading: bool
    };
}

export function episodeFetchDataSuccess(episode) {
    return {
        type: EPISODE_REQUEST_SUCCESS,
        episode
    };
}



export function getEpisodes(url) {

    //I got a CORS problem trying to fetch from the API, even after setting the proper headers in the requests,
    //so I copied the response and set it in a mock server just to get the general idea of the approach.

    //Here would be the proper url obtained in the sets JSON
    let endpoint = 'http:///5a5e0d03d748830012334f24.mockapi.io/episode';
    // var params = { method: 'GET',
    //            headers: {  'Accept': 'application/json','Content-Type': 'application/json',
    //                  'Access-Control-Allow-Origin':'*' }
    //        };
    return (dispatch) => {
        dispatch(episodeIsLoading(true));

        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(episodeIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(episodeFetchDataSuccess(items)))
            .catch(() => dispatch(episodeHasErrored(true)));
    };
}
