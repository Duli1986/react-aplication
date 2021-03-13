import { createAction } from 'redux-actions';
import { actionTypes } from './constants';
import axios from "axios";

const PEOPLE_BASE_URL_API = "http://localhost:8080/api/v1";

export const getPeoples = () => (dispatch) => {
	fetch(PEOPLE_BASE_URL_API + '/peoples'
			,{
				headers : {
					'Content-Type': 'application/json'
				}
			}
	)
	.then(response => response.json())
	.then((result) => {
		dispatch({type: actionTypes.UPDATE_PEOPLE_RESULTS, payload: result})
	})
	.catch((error) => {
		dispatch({
			type: actionTypes.UPDATE_PEOPLE_ERRORS,
		});
	});
}
