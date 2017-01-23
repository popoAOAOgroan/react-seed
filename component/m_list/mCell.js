import React from 'react'
// import Mlist from 'component/m_list/mList';

//css
// import 'component/m_list/mList.scss';
//component
import {browserHistory} from 'react-router';

let touchStartX,touchCurX,touchEndX;
let touchStartY,touchCurY,touchEndY;
let maxScrollWidth = -(screen.width * 0.2);
let screeningHeightValue = 10;
				
{/*默认cell*/}
class MDefaultCell extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(this.props.data);
		return(
			<div className="m-cell-inner">
				{this.props.data.index}
				。
				{this.props.data.value}
			</div>
		);
	}
}

class Mcell extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			delCell: false,
			liDefaultClassName: 'm-cell',
			liDelClassName: 'delCell',
			curXposition: 0
		}
	}

	componentDidMount(){
	}

	componentDidUpdate(){
		if (this.state.delCell) {
			setTimeout(()=>{
				let cell = this.props.data;
				this.props.callParent(cell,'refresh');
			}, 500);
		}
	}

	componentWillUnmount(){
		
	}

	handleTouchStart(e){
	    // e.preventDefault();
	    // e.stopPropagation();
		// if (this.state.curXposition > 0) {
		// 	this.setState({
		// 		curXposition: 0
		// 	});
		// }
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	}

	handleTouchMove(e){
		// e.preventDefault();

		touchCurY = e.touches[0].clientY;
		let distHeight = touchStartY - touchCurY;
		if (Math.abs(distHeight) > screeningHeightValue) {
			return true;
		}

		touchCurX = e.touches[0].clientX;
		let dist = touchStartX - touchCurX;
		if (dist>0) {
			this.setState({
				curXposition: -dist
			});
		}else{
			// console.log('==>',dist);
		}
	}

	handleTouchEnd(e){
		// e.preventDefault();

		if (this.state.curXposition < 0) {
			if (this.state.curXposition > maxScrollWidth) {
				this.setCurPositionBack()
			}else{
				this.setState({
					curXposition: maxScrollWidth
				});
				this.props.callParent('','registerCell',()=>this.setCurPositionBack());
			}
		}
	}

	// onTouchStart={(e)=>this.handleTouchStart(e)} onTouchEnd={(e)=>this.handleTouchEnd(e)}
	setCurPositionBack(){
		this.setState({
			curXposition: 0
		});
	}

	clickHandle(e){
		if (this.state.curXposition < 0) {
			this.setCurPositionBack()
			return false;
		}
	}

	delCell(e){
	    // e.preventDefault();
	    // e.stopPropagation();
		let cell = this.props.data;
		this.props.callParent(cell,'del',()=>this.callBackFun());
	}

	callBackFun(){
		this.setState({
			delCell: true
		})
	}

	render() {
		let InnerCell = this.props.diyCell == 'default'? MDefaultCell : this.props.diyCell;
		if (this.props.hide) {
			return(
				<li className={this.state.delCell?this.state.liDefaultClassName+' '+this.state.liDelClassName:this.state.liDefaultClassName}>
					<div className="m-cell-content" style={{transform:'translateX('+this.state.curXposition + 'px)'}} onTouchStart={(e)=>this.handleTouchStart(e)} onTouchMove={(e)=>this.handleTouchMove(e)} onTouchEnd={(e)=>this.handleTouchEnd(e)}>
						<InnerCell data={this.props.data}/>
					</div>
					<ul onClick={(e)=>this.clickHandle(e)} style={this.state.curXposition == maxScrollWidth? {zIndex:'1'}: {zIndex:'-1'}} className="m-hide-layer flex-v">
						<li><button className="btn" onClick={(e)=>this.delCell(e)}>删除</button></li>
					</ul>
				</li>
			);
		}else{
			return(
				<li className={this.state.delCell?this.state.liDefaultClassName+' '+this.state.liDelClassName:this.state.liDefaultClassName}>
					<div className="m-cell-content">
						<InnerCell data={this.props.data}/>
					</div>
				</li>
			);
		}
	}
}

module.exports = Mcell;