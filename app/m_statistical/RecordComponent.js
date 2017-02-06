//react
import React from 'react';
//component

//config
import dataConfig from 'config/dataConfig';
//css
import 'app/m_statistical/RecordComponent.scss';

class Title extends React.Component{
	render(){
		return (
			<div className="title-layer">{this.props.name}</div>
		)
	}
}

class TodaylegCellComponent extends React.Component{
	constructor(props) {
		super(props);
	}
	// clickHandle(name){
	// 	console.log('this.props.callBackFn',this.props.callBackFn);
	// 	this.props.callBackFn && this.props.callBackFn(name);
	// }
	render(){
		let iName = "league-icon " + this.props.data.l+'-icon';
		if (this.props.data.n.length==0) {
			return null;
		}
		return (
			<div className="record-cell">
				<p><i className={iName}></i></p>
				{
					this.props.data.n.map((v,i)=>{
						return(<p className="league-name" key={i}>{v}</p>);
					})
				}
			</div>
		)
	}
}

class RecordComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data: this.getTodayItems()
		}
	}
	getTodayItems() {
		let itemsObj = dataConfig.getTodayItem();
		let itemsArray = Object.keys(itemsObj).map((key)=>{
			return {l:key,n:itemsObj[key]}
		});
		return itemsArray;
	}
	render(){
		return(
			<div className="record-layer">
				<Title name="Today"/>
				<div className="record-list">
					{
						this.state.data.map((v,i)=>{
							return( <TodaylegCellComponent data={v} key={i}/>);
						})
					}
				</div>
			</div>
		)
	}
}

module.exports = RecordComponent;