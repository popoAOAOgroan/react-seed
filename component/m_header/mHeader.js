import React from 'react'
//css
import 'component/m_header/mHeader.scss';
//component
import {browserHistory} from 'react-router';

class Mheader extends React.Component{
	constructor(props){
		super(props);
		//needBack
		//backCall
	}
	
	render() {
		let backBtn;
		if (this.props.needBack) {
			backBtn = (<button className="back-btn" onClick={browserHistory.goBack}>back</button>);
		}
		return(
			<header className="m-header">
				<div className="left-box">{backBtn}</div>
				<div className="center-box">{this.props.title}</div>
				<div className="right-box"></div>
			</header>
		);
	}
}

module.exports = Mheader;