import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PeopleList from "./PeopleList";
import initPeople from "../actions/initPeople";

const PeopleFormProvider = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initPeople);
	}, [dispatch]);

	return (
			<div>
				<PeopleList />
			</div>
	);
};

export default PeopleFormProvider;
