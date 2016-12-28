//react
import React from 'react';
//component
import dog from 'doc/test/dog';
import Mheader from 'component/m_header/mHeader';

class testComponent extends React.Component{

	render() {
		let newDog = new dog('uu');
		let dogName = newDog.name;
		return (
			<div>
                dog: {dogName}
			</div>
		)
	}
}

module.exports = testComponent;