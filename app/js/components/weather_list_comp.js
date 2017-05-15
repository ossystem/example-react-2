import React, { Component } from 'react';
import WItemComp from './weather_item_comp';
import PropTypes from 'prop-types'; 

class WListComp extends Component {

	render() {
		let items = this.props.list.map((item, index)=>{
				return <WItemComp 	key={index}
									index = {index}
									h={item.temp.max}
									l={item.temp.min}
									w_id={item.weather[0].id}
									date={item.dt}/>
			});
		return (
			<div className="w_list">
				{items}
			</div>
		);
	}
}

WListComp.propTypes = {
	list: PropTypes.array
}

export default WListComp;
