import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import InfoComp from '../app/js/components/info_comp';

describe('<InfoComp/>', () => {

	it('renders an ".city"', () => {
		const wrapper = shallow(<InfoComp/>);

		expect(wrapper.find('.city')).to.have.length(1);
	});

	it('renders the ".temp"', () => {
		const wrapper = render(<InfoComp city={'London'}
																			temp={25}
																			w_id={800}
																			dt={1491491491490}/>);

		expect(wrapper.find('.temp').html()).to.equal('25');
	});

	it('has prop "city"', () => {
		const wrapper = shallow(<InfoComp city={'London'}
																			temp={25}
																			w_id={800}
																			dt={1491491491490}/>);
		expect(wrapper.instance().props.city).to.equal('London');
	});
});