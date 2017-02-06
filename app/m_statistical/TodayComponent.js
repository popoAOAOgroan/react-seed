//react
import React from 'react';
//http
import HttpRequest from 'framework/js/provider/httpRequest/httpRequest';
//component
import Form from 'component/m_form/mForm';
import mDialog from 'component/m_dialog/mDialog';
import Mlist from 'component/m_list/mList';
//css
import 'app/m_statistical/TodayComponent.scss';
//config
import dataConfig from 'config/dataConfig';

class TodayCellComponent extends React.Component{
	constructor(props) {
		super(props);
	}
	clickHandle(name){
		console.log('this.props.callBackFn',this.props.callBackFn);
		this.props.callBackFn && this.props.callBackFn(name);
//http://op.juhe.cn/onebox/basketball/nba?dtype=&=&key=af00932de576f6af3279fbb71b5c0db5
        // let _url = 'http://op.juhe.cn/onebox/football/league';
        // let _url = 'http://192.168.15.211:3000/api/assets/all';
        // this.setState({
        // 	isLoading: true
        // });?key=13264dcdaee8b7664f5100cc77c2472f&league=%E6%B3%95%E7%94%B2
        // let _params = {
        // 	key: '13264dcdaee8b7664f5100cc77c2472f',
        // 	league: name
        // }

  //       var request = new HttpRequest();
		// request.get(_url,_params,(result)=>{
		// 	// this.props.setBookingState(true);
		// 	console.log('result',result);
		// },(err)=>{
		// 	console.log('err',err);
		// })
	}
	render(){
		let iName = "league-icon " + this.props.data.iconName;
		return (
			<div className="today-cell" onClick={()=>this.clickHandle(this.props.data.content)}>
				<i className={iName}></i>
				<span className="league-name">{this.props.data.content}</span>
			</div>
		)
	}
}

class TodayComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			errMsg: ''
		}
	}

	render(){
		let MSpinner = mDialog.mSpinner;
		let MAlert = mDialog.mAlert;
		let MInput = Form.mInput;

		let myOpt = [];
		let ListCell = TodayCellComponent;
		// let myArray = [{content:'英超',iconName:'yc-icon',items:['阿森纳','切尔西','曼联','曼城','热刺','埃弗顿','利物浦','西布罗姆维奇','斯旺西','西汉姆联','莱斯特城','水晶宫','斯托克城','南安普顿','桑德兰','伯恩茅斯','沃特福德']},{content:'西甲',iconName:'xj-icon'},{content:'意甲',iconName:'yj-icon'},{content:'法甲',iconName:'fj-icon'},{content:'德甲',iconName:'dj-icon'}];
		return(
			<div className="today-layer flex-l">
				<div className="today-search">
					<i className="iconfont icon-search"></i>
					{/*<input x-webkit-speech name="search" type="text" placeholder="SEARCH"/>*/}
					<MInput name="search" type="text" placeholder="SEARCH"/>
				</div>
				<div className="today-list flex-1">
					{
						this.props.data.map((v,i)=>{
							return( <ListCell data={v} key={i} callBackFn={this.props.callBack}/>);
						})
					}
				</div>
				<MSpinner isShow={this.state.isLoading}/>
				<MAlert okCallBack={()=>{this.setState({errMsg: ''})}} isShow={this.state.errMsg!==''} message={this.state.errMsg} />
			</div>
		)
	}
}

module.exports = TodayComponent;