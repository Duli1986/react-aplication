import { enableBatching } from 'redux-batched-actions';
import { dummyReducer } from 'redux-cond-reducer';
import { combineReducers } from 'redux';
//import { authorizationReducer } from '../features/authorization/reducers';
import searchSuccessReducer from '../searchPeople/reducers';

const rootReducer = combineReducers({
	urls: dummyReducer,
	peopleResult: searchSuccessReducer,
});

export default enableBatching(rootReducer);
