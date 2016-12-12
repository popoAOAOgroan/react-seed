//react
import React from 'react';
//css
import 'component/m_form/scss/mInput.scss';
//validation
import validation from './validation';

export default class mTextarea extends React.Component{
	constructor(props) {
		super(props);
		let _testObj = props.test;
		let _isInvaild = false;
		if (_testObj !== undefined && _testObj.length !== 0) {
			_isInvaild = _testObj.some((v)=>{return v== 'isEmpty'});
		}
		if (props.minLength&&props.minLength>0) {
			_isInvaild = true;
		}
		this.state = {
			isInvaild : _isInvaild,
			invaildMsg: [],
			value: '',
			name: this.props.name||''
		}
	};
	checkForm(iObj){
		//检查父级表单情况
		if(this.props.checkFrom && typeof this.props.checkFrom === 'function'){
			this.props.checkFrom(this.state); 
		}
	}
	isNeedVerification(e){
		let invaildObj = {
			isInvaild : false,
			invaildMsg : [],
			value: e.target.value
		};
		if(this.props.test !== undefined && this.props.test.length !== 0){
			invaildObj = validation.testValue(e,this.props);
		}
		if(this.props.minLength){
			let _v = e.target.value;
			if (_v.length < this.props.minLength) {
				invaildObj.isInvaild = true;
				invaildObj.invaildMsg.push('内容字数未到规定长度');
			}
		}
		if(this.props.maxLength){
			let _v = e.target.value;
			if (_v.length > this.props.maxLength) {
				invaildObj.isInvaild = true;
				invaildObj.invaildMsg.push('内容字数超过规定长度');
			}
		}
		this.setState(invaildObj,this.checkForm);
	}

	render() {
		let inputClassName = 'm-textarea' + ' ' + this.props.className;
		inputClassName += this.state.isInvaild?' invaild':'';
		inputClassName += this.state.invaildMsg.length!==0?' warning':'';

		return (
			<textarea onBlur={(e)=>this.isNeedVerification(e)} onChange={(e)=>this.isNeedVerification(e)} maxLength={this.props.maxLength} name={this.props.name} className={inputClassName} placeholder={this.props.placeholder} rows={this.props.rows} cols={this.props.cols}></textarea>
		);
	}
}