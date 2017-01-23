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
                <Mheader title="components doc" needBack={false}/>

				<ul className="groups flex-1 doc-home-list">
					<li className="cell"><Link to="/doc/dialog">dialog</Link></li>
					<li className="cell"><Link to="/doc/form">form</Link></li>
					<li className="cell"><Link to="/doc/iscroll">iscroll</Link></li>
					<li className="cell"><Link to="/doc/test">test</Link></li>
					<li className="cell"><Link to="/doc/list">list</Link></li>
				</ul>
			</div>
		)
	}
}

module.exports = List;