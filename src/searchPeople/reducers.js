import {actionTypes} from "./constants";

const initialState = {
	list: [],
};

/**
 * Nastaví state podle akce. Viz pocatecni stavy a konstanty pro akce.
 * @param state State.
 * @param action Akce.
 * @return {Object} Nový modifikovaý state nebo starý state.
 **/
export default function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.UPDATE_PEOPLE_RESULTS:
			return {
				...state,
					list: action.payload
			};
		default:
			return state;
	}
}
