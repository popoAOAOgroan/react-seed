//react
import React from 'react';
//scss
import '../scss/mConfirm.scss';


export default class alertLayer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			buttonText : '确认',
			isShow: this.props.isShow === undefined?false:this.props.isShow
		}
	};

	componentWillReceiveProps(nextProps){
		this.setState({
			isShow : nextProps.isShow
		});
	}

	closeByOkButton(){
		// this.setState({
		// 	isShow : false
		// });
		if(typeof this.props.okCallBack === 'function'){
			this.props.okCallBack();
		}
	}

	render() {
		if (this.state.isShow) {
			return (
				<div className="m-dialog">
					<div className="pop-mask"></div>
					<div className="m-alert">
	                    <div className="contentHtml">{this.props.message}</div>
	                    <div className="alertButton"><button className="btn btn-lg" onClick={()=>this.closeByOkButton()}>{this.state.buttonText}</button></div>
	                </div>
	            </div>
			)
		}else{
			return null
		}
	}
};
