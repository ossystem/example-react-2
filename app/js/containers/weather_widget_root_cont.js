import React, { Component } from 'react';
import WWRootComp from '../components/weather_widget_root_comp';

import { connect } from 'react-redux';
import store from '../store/store';
import actionCreator from '../actions/weather_actions';


const mapStateToProps = (state) => {
	return {
		loading_forecast: state.loading_forecast,
		forecast: state.forecast
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getForecast: (crd) => dispatch(actionCreator.getForecast(crd))
	}
}

const WeatherCont = connect(mapStateToProps, mapDispatchToProps)(WWRootComp);


export default WeatherCont;
