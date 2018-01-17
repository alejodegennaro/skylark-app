import { combineReducers } from 'redux';
import setsReducer from '../pages/sets/reducers';
import episodeReducer from '../pages/episode/reducers';

export default combineReducers({
	setsReducer,
	episodeReducer
});
