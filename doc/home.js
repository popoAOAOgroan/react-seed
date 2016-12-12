//react
import React from 'react';
//component
import Mheader from 'component/m_header/mHeader';
import FormComponent from 'doc/form/formComponent';
import DialogComponent from 'doc/dialog/dialogComponent';
import ScrollComponent from 'doc/scroll/scrollComponent';

class List extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return ( 
			<ul className="groups flex-1">
				<li onClick={(cv)=>this.props.listCallBack('dialog')} className="cell">Dialog</li>
				<li onClick={(cv)=>this.props.listCallBack('form')} className="cell">Form</li>
				<li onClick={(cv)=>this.props.listCallBack('iscroll')} className="cell">iScroll</li>
			</ul>
		)
	}
}

class homeComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			curView : 'list'
		};
	};

	changeState(cv){
		this.setState({
			curView: cv
		});
	}

	restore(){
		this.setState({
			curView: 'list'
		});
	}

	render() {
		let container;
		if (this.state.curView == 'list') {
			container = (<List listCallBack={(cv)=>this.changeState(cv)} />);
		}
		else if(this.state.curView == 'dialog'){
			container = (<DialogComponent />);
		}
		else if(this.state.curView == 'form'){
			container = (<FormComponent />);
		}
		else if(this.state.curView == 'iscroll'){
			container = (<ScrollComponent />);
		}else{
			container = (<p>no data</p>);
		}
		return (
			<div className="content">
				<Mheader backCall={()=>this.restore()} needBack={this.state.curView=='list'?false:true} title="名医主导doc版" />
				{container}
				
			</div>
		);
	}
};

module.exports = homeComponent;