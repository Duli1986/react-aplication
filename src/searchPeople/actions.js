import { createAction } from 'redux-actions';
import { actionTypes } from './constants';
import axios from "axios";

const PEOPLE_BASE_URL_API = "http://localhost:8080/api/v1";

export const getPeoples = () => (dispatch) => {
	return axios.get(PEOPLE_BASE_URL_API + '/peoples')
	.then((result) => {
		dispatch({type: actionTypes.UPDATE_PEOPLE_RESULTS, payload: result.data})
	})
	.catch((error) => {
		dispatch({
			type: actionTypes.UPDATE_PEOPLE_ERRORS,
		});
	});
}
