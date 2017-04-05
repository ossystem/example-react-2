import axios from 'axios';

let weatherApi = {
//Send req '/forecast', crd - object with coordinates 
	getForecast(crd) {
		let params = crd;
		return axios.get('/forecast', {params:params})
	}

}

export default weatherApi;
