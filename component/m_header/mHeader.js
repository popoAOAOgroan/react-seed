import React from 'react'
//css
import 'component/m_header/mHeader.scss';

class Mheader extends React.Component{
	constructor(props){
		super(props);
		//needBack
		//backCall
	}

	goBack(){
		if (this.props.backCall !== undefined && typeof this.props.backCall === 'function') {
			this.props.backCall();
		}else{
			console.log('no callback fn');
		}
	}

	render() {
		let backBtn;
		if (this.props.needBack) {
			backBtn = (<button className="back-btn" onClick={()=>this.goBack()}>back</button>);
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