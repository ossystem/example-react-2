import constants from "../constants";
//if geolocation not work in your browser or you dont have inet connection
//or if you request the openweathermap service too frequently
//app will use this default data
import data from '../data';

const initialState = {
	loading_forecast: true,
	forecast:{}
}

const weatherReducer = (state = initialState, action) => {
	//console.log(action);
	switch (action.type) {

		//initial get forecast
		//req
		case constants.GET_FORECAST:
			return {...state, loading_forecast: true }

			//initial get forecast
			//res
		case constants.RES_FORECAST:
			if (action.success) {
				console.log(action.payload);
				if (action.payload.error){
					//if openweathermap response with error
					//app use default data
					return {...state, loading_forecast: false, forecast: data};
				};
				return {...state, loading_forecast: false, forecast: action.payload};
			} else {
				alert('error getting posts');
				return {...state, loading_forecast: false };
			}


		default:
			return state;
	}
}

export default weatherReducer;
