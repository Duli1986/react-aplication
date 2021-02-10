import axios from "axios";

const PEOPLE_BASE_URL_API = "http://localhost:8080/api/v1";


	export const getPeople = () => {
		return axios.get(PEOPLE_BASE_URL_API + '/peoples');
	}

