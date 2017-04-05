import React from 'react';
import { render } from 'react-dom';


import { Provider } from 'react-redux';
import store from './store/store';

import WeatherCont from './containers/weather_widget_root_cont';





render(
	<Provider store={store}>
		<WeatherCont/>
	</Provider>,
	document.getElementById('root')
);
