//react
import React from 'react';
//scss
import '../scss/mSpinner.scss';


class spinnerLayer extends React.Component{
	constructor(props) {
		super(props);
	};

	render() {
		if (this.props.isShow) {
			return (
				<div className="spinner-body">
					<div className="logo-box">
	                    <div className="logo animate">
	                        <div className="line1"></div>
	                        <div className="line2"></div>
	                        <div className="dot"></div>
	                    </div>
		            </div>
		            <div className="spinner-tip">加载中...</div>
	            </div>
			)
		}else{
			return null
		}
	}
};

module.exports = spinnerLayer;