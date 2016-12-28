//react
import React from 'react';
import input from 'component/m_form/js/input';
//css
import 'component/m_form/scss/mInput.scss';
//validation
import testValue from './validation';

export default class mInput extends input{

	render() {
		let inputClassName = this.props.className? 'm-input' + ' ' + this.props.className:'m-input' ;
		inputClassName += this.state.isInvaild?' invaild':'';
		inputClassName += this.state.invaildMsg.length!==0?' warning':'';

		return (
			<input onBlur={(e)=>this.isNeedVerification(e)} onChange={(e)=>this.isNeedVerification(e)} name={this.props.name} type={this.props.type} className={inputClassName} placeholder={this.props.placeholder} />
		);
	}
}