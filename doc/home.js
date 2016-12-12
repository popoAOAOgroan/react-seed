//react
import React from 'react';
//component
import {Link} from 'react-router';
import Mheader from 'component/m_header/mHeader';

class List extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return ( 
			<div>
                <Mheader title="名医主导doc版" needBack={false}/>

				<ul className="groups flex-1">
					<li className="cell"><Link to="/dialog">dialog</Link></li>
					<li className="cell"><Link to="/form">form</Link></li>
					<li className="cell"><Link to="/iscroll">iscroll</Link></li>
				</ul>
			</div>
		)
	}
}

module.exports = List;