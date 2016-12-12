//react
import React from 'react';
//scss
import '../scss/mConfirm.scss';


export default class confirmLayer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			okButtonText : '确认',
			cancelButtonText: '取消',
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

	closeByCancelButton(){
		this.setState({
			isShow : false
		});
		if(typeof this.props.cancelCallBack === 'function'){
			this.props.cancelCallBack();
		}
	}

	render() {
		if (this.state.isShow) {
			return (
				<div className="m-dialog">
					<div className="pop-mask"></div>
					<div className="m-confirm">
	                    <div className="contentHtml">{this.props.message}</div>
	                    <div className="confirmButton">
	                        <div className="btn-group-level border-top">
	                            <div className="btn-left">
	                                <button type="button" className="btn btn-lg" onClick={()=>this.closeByOkButton()}>{this.state.okButtonText}</button>
	                            </div>
	                            <div className="btn-right">
	                                <button type="button" className="btn btn-lg border-right" onClick={()=>this.closeByCancelButton()}>{this.state.cancelButtonText}</button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
                </div>
			)
		}else{
			return null
		}
	}
};
