import log from 'loglevel';
import {getPeoples} from "../searchPeople/actions";

export default async (dispatch) => {
	log.info('Initializing Search product');
	try {
		dispatch({ type: '@@INIT' });
		await dispatch(getPeoples());
	} catch (e) {
		log.error({ message: 'Initialization failed', e });
	}
};
