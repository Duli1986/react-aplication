import axios from "axios";

const PEOPLE_BASE_URL_API = "http://localhost:8080/api/v1";

class PeopleService  {

	getPeople (){
		return axios.get(PEOPLE_BASE_URL_API + '/peoples');
	}

}

export default PeopleService;
