//react
import React from 'react';
//component
import Mlist from 'component/m_list/mList';
//css
import 'app/m_statistical/FilterComponent.scss';
//config
import dataConfig from 'config/dataConfig';

class ItemCellComponent extends React.Component{
	constructor(props) {
		super(props);
		console.log(this.props.data.value)
		this.state = {
			selected: this.props.data.value.$isCheck
		}
	}
	clickStatusChange(){
		this.setState({
			selected: !this.state.selected
		});
		dataConfig.toggleCurItem(this.props.data.value);
	}
	render(){
		let divClass = this.state.selected?'item-cell selected':'item-cell';
		let iClass = this.state.selected?'iconfont icon-ok-sign':'';
		return (
			<div className={divClass} onClick={()=>this.clickStatusChange()}>
				<span className="item-status-box">
					<i className={iClass}></i>
				</span>
				<span className="league-name">{this.props.data.value.name}</span>
			</div>
		)
	}
}

class Title extends React.Component{
	render(){
		return (
			<div className="title-layer">{this.props.name}</div>
		)
	}
}

class FilterComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	clickHandle(index){
	}
	listCallBack(cell,operation,callBack){
		// let listObj = JSON.parse(JSON.stringify(this.state.data.results));
		console.log('o! call the ',operation);
	}
	render(){
		if (this.props.data.length>0) {
			return (
				<div className="filter-layer flex-l">
					<div className="filter-layer-in flex-1">
						<Title name="Filter your results"/>
						<div className="filter-contain">
							{/*可变内容*/}
							<Mlist listCallBack={(cell,operation,callBack)=>this.listCallBack(cell,operation,callBack)} opts={null} data={this.props.data} diyCell={ItemCellComponent}/>
						</div>
					</div>
					<div className="filter-cancel" onClick={()=>{this.props.clearData()}}>
						<span><i className="iconfont icon-close"></i></span>
					</div>
				</div>
			);
		}else{
			return null;
		}
	}
}

module.exports = FilterComponent;