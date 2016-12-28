//react
import React from 'react';
import input from 'component/m_form/js/input';
//css
import 'component/m_form/scss/mInput.scss';
//validation
import testValue from './validation';

export default class mTextarea extends input{

	render() {
		let inputClassName = 'm-textarea' + ' ' + this.props.className;
		inputClassName += this.state.isInvaild?' invaild':'';
		inputClassName += this.state.invaildMsg.length!==0?' warning':'';

		return (
			<textarea onBlur={(e)=>this.isNeedVerification(e)} onChange={(e)=>this.isNeedVerification(e)} maxLength={this.props.maxLength} name={this.props.name} className={inputClassName} placeholder={this.props.placeholder} rows={this.props.rows} cols={this.props.cols}></textarea>
		);
	}
}