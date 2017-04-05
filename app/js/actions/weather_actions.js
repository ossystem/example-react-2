import constants from '../constants';
import weatherApi from '../api/weather_api';

const actionCreator = {
//Get forecast action
	getForecast(crd) {
		return (dispatch) => {
			dispatch({ type: constants.GET_FORECAST });
			weatherApi.getForecast(crd).then(
				(response) => dispatch({
					type: constants.RES_FORECAST,
					success: true,
					payload: response.data
				}),
				(error) => dispatch({
					type: constants.RES_FORECAST,
					success: false
				})
			);
		};
	}
};

export default actionCreator;