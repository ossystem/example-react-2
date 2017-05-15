import React, { Component } from 'react';
import mix from '../mixins/weather_mixin'
import PropTypes from 'prop-types'; 



const WItemComp = ({...props}) => {
		//find icon by weather id
		let icon = mix.getIcon(props.w_id);
	//round max&min temperature
		let max_t = Math.floor(props.h);
		let min_t = Math.floor(props.l);
	//Get day of week
		let day = mix.getDay(props.date);
	//add "no_border" style to last border span
		let style = props.index<4?'right_border':'no_border';

		return (
			<div className="w_item">
				<span className="top_border"></span>
				<span className={style}></span>
				<h3>{day}</h3>
				<img src={icon}/>
				<h4>{max_t}</h4>
				<h4 className="night_temp">{min_t}</h4>
			</div>
		);
}

export default WItemComp;
