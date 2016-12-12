//react
import React from 'react';
//scss
import '../scss/mToast.scss';


class toastLayer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			time: parseInt(this.props.time),
			isShow: this.props.isShow || false
		};
		
	};
	componentWillReceiveProps(nextProps) {
		this.setState({
			isShow: nextProps.isShow
		});
		if (this.state.time > 0 && nextProps.isShow) {
			setTimeout(()=>{
				this.setState({
					isShow: false
				});
			}, this.state.time);
		}
	}

	render() {
		if (this.state.isShow) {
			return (
				<div className="m-toast">
		            <p className="message">{this.props.message||''}</p>
		        </div>
			)
		}else{
			return null
		}
	}
};

module.exports = toastLayer;