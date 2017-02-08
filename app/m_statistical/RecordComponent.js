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

class LegCellComponent extends React.Component{
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

class DayCellComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	getDayItems(dayObj) {
		console.log('dayObj',dayObj);
		let itemsArray = Object.keys(dayObj).map((key)=>{
			return {l:key,n:dayObj[key]}
		});
		console.log('itemsArray',itemsArray);
		return itemsArray;
	}
	render(){
		let dayArray = this.getDayItems(this.props.data.data);
		if (dayArray.length>0) {
			let dayDate = this.props.data.time!=''? new Date(this.props.data.time).toDateString():'Today';
			
			return(
				<div className="record-layer__last-day-cell">
					<Title name={dayDate}/>
					{
						dayArray.map((v,i)=>{
							return <LegCellComponent data={v} key={i}/>;
						})
					}
				</div>
			)
		}else{
			return null;
		}
	}
}

class RecordComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data: dataConfig.getTodayItem(),
			lastData: dataConfig.getAllItem()
		}
	}
	// getTodayItems() {
	// 	let itemsObj = dataConfig.getTodayItem();
	// 	let itemsArray = Object.keys(itemsObj).map((key)=>{
	// 		return {l:key,n:itemsObj[key]}
	// 	});
	// 	return itemsArray;
	// }
	// getLastItems() {
	// 	let itemsObj = dataConfig.getAllItem();
	// 	console.log('itemsObj',itemsObj);
	// 	return itemsObj;
	// }
	render(){
		let todayComponentData = {
			time: '',
			data: this.state.data
		}
		return(
			<div className="record-layer">
				<div className="record-list">
					<DayCellComponent data={todayComponentData} />
					{
						this.state.lastData.map((v,i)=>{
							return (<DayCellComponent data={v} key={i} />)
						})
					}
				</div>
			</div>
		)
	}
}

module.exports = RecordComponent;