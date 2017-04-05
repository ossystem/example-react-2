import React, { Component } from 'react';
import mix from '../mixins/weather_mixin'

class WItemComp extends Component {

	render() {
	//find icon by weather id
		let icon = mix.getIcon(this.props.w_id);
	//round max&min temperature
		let max_t = Math.floor(this.props.h);
		let min_t = Math.floor(this.props.l);
	//Get day of week
		let day = mix.getDay(this.props.date);
	//add "no_border" style to last border span
		let style = this.props.index<4?'right_border':'no_border';
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
}

WItemComp.propTypes = {
	date: React.PropTypes.number,
	h: React.PropTypes.number,
	l: React.PropTypes.number,
	index: React.PropTypes.number,
	w_id: React.PropTypes.number
}

export default WItemComp;
