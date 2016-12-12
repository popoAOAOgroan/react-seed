//react
import React from 'react';
//component
import Form from 'component/m_form/mForm'

class formComponent extends React.Component{
	constructor(props) {
		super(props);
	}
	getRadioValue(value){
		console.log('radioValue: '+value);
	}
	checkFormValue(){
		console.log('state',this.state);
	}
	checkFrom(iObj){
		console.log('iObj',iObj);
		this.setState({
			[`${iObj.name}`]: iObj.value,
		},this.checkFormValue);
	}
	render() {
		let MRadio = Form.mRadio;
		let MInput = Form.mInput;
		let MTextarea = Form.mTextarea;
		let radioData = [
			{
				name: 'female',
				text: '女',
				value: 1,
			},
			{
				name: 'male',
				text: '男',
				value: 2,
				checked: true
			}
		];
		return (
			<div>
				<ul className="groups">
					<li className="cell align-item">
						<label className="cell-label">Radio</label>
						<MRadio name="userGender" data = {radioData} getRadioValue={(value)=>this.getRadioValue(value)}/>
					</li>
					<li className="cell align-item">
						<label className="cell-label">input</label>
						<MInput checkFrom={(iObj)=>this.checkFrom(iObj)} name="normal" type="text" placeholder="普通" maxLength="4" minLength="2"/>
					</li>
					<li className="cell align-item">
						<label className="cell-label">input</label>
						<MInput test={['isEmpty']} checkFrom={(iObj)=>this.checkFrom(iObj)} name="name" className="" type="text" placeholder="填写姓名（不得为空）"/>
					</li>
					<li className="cell align-item">
						<label className="cell-label">input</label>
						<MInput test={['isEmpty','isNum']} checkFrom={(iObj)=>this.checkFrom(iObj)} name="age" className="" type="text" placeholder="填写年龄（为数字）"/>
					</li>
					<li className="cell align-item">
						<label className="cell-label">input</label>
						<MInput test={['isEmpty','isTel']} checkFrom={(iObj)=>this.checkFrom(iObj)} name="tel" className="" type="text" placeholder="填写电话（为电话）"/>
					</li>
					<li className="cell align-item">
						<label className="cell-label">input</label>
						<MInput test={['isPhone']} checkFrom={(iObj)=>this.checkFrom(iObj)} name="phone" className="" type="text" placeholder="填写电话（为固话）"/>
					</li>
					<li className="cell align-item">
						<label className="cell-label">textarea</label>
					</li>
					<li className="cell align-item no-cell-height">
						<MTextarea maxLength="100" checkFrom={(iObj)=>this.checkFrom(iObj)} test={['isEmpty']} name="detail" className="textarea" rows="3" cols="20" placeholder="请填写已有的医生诊断的信息（不得为空）" />
					</li>
				</ul>
			</div>
		)
	}
}

module.exports = formComponent;