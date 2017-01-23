import React from 'react';
import IScroll from 'iscroll';
//css
import 'component/m_list/mList.scss';
//component
import {browserHistory} from 'react-router';
import Mcell from 'component/m_list/mCell';

let myScroll,activeCellCallBack;
class Mlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'curDelIndex': false
		}
	}
	componentDidMount(){
		myScroll = new IScroll('#m-wrapper', { mouseWheel: true, click: true });
		myScroll.on ('scrollStart', this.onScrolling);
	}
	componentDidUpdate(){
		// console.log('im did update');
	}
	componentWillUnmount(){
		myScroll = null;
	}
	scrollNeedRefresh(){
		// console.log('call me to refresh?');
		myScroll.refresh();
	}
	cellCallBack(cell,operation,callBack){
		// let listObj = JSON.parse(JSON.stringify(this.state.data.results));
		if (operation == 'del') {
			callBack && callBack();
		}
		if (operation == 'refresh') {
			this.scrollNeedRefresh();
		}
		if (operation == 'registerCell') {
			activeCellCallBack = callBack;
		}
	}
	onScrolling(){
		// console.log('scrolling');
		if (activeCellCallBack) {
			activeCellCallBack && activeCellCallBack();
		}
	}
	render() {
		let dataList = this.props.data;
		let diyCell = this.props.diyCell?this.props.diyCell:'default';
		return(
			<div className="m-list flex-1">
				<div id="m-wrapper">
					<div id="m-scroller">
						<ul>
							{
								dataList.map((v,i)=>{
									let cellContent = {'value':v,'index':i};
									return <Mcell diyCell={diyCell} data={cellContent} hide={this.props.hide} key={i} callParent={(cell,operation,callBack)=>this.cellCallBack(cell,operation,callBack)}/>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Mlist;