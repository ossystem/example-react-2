import React, { Component } from 'react';
//usefull functions
import mix from '../mixins/weather_mixin';
import PropTypes from 'prop-types'; 

class InfoComp extends Component {

	render() {
		//find icon by weather id
		let icon = mix.getIcon(this.props.w_id);
		//Convert date data
		let date = mix.getDate(this.props.dt)
		return (
			<div className="info">
				<img src={icon}/>
				<div className="city">
					<h3>{this.props.city}</h3>
					<h4>{date}</h4>
				</div>
				<p className="temp">
					{this.props.temp}
				</p>
			</div>
		);
	}
}

InfoComp.propTypes = {
	city: PropTypes.string,
	w_id: PropTypes.number,
	dt: PropTypes.number,
	temp:PropTypes.number
}

export default InfoComp;
