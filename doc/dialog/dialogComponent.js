//react
import React from 'react';
//component
import mDialog from 'component/m_dialog/mDialog';

class dialogComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			dialog: ''
		}
	}
	openDialog(value){
		this.setState({
			dialog : value
		});
	}
	confirmCancelFn(){
		console.log('im cancel');
		this.setState({
			dialog: ''
		})
	}
	confirmOkFn(){
		console.log('im ok');
		this.setState({
			dialog: ''
		})
	}
	render() {
		let dialogs;
		console.log('state',this.state.dialog);
		const MToast = mDialog.mToast;
		const MConfirm = mDialog.mConfirm;
		const MAlert = mDialog.mAlert;
		const MSpinner = mDialog.mSpinner;
		return (
			<div>
				<ul className="groups">
					<li className="cell align-item">
						<button className="btn" onClick={(value)=>this.openDialog('toast')}>open toast</button>
					</li>
					<li className="cell align-item">
						<button className="btn" onClick={(value)=>this.openDialog('confirm')}>open confirm</button>
					</li>
					<li className="cell align-item">
						<button className="btn" onClick={(value)=>this.openDialog('alert')}>open alert</button>
					</li>
					<li className="cell align-item">
						<button className="btn" onClick={(value)=>this.openDialog('spinner')}>open spinner</button>
					</li>
				</ul>
				<MSpinner isShow={this.state.dialog == 'spinner'} />
				<MAlert okCallBack={()=>this.confirmOkFn()} isShow={this.state.dialog == 'alert'} message="hi im an alert dialog!"/>
				<MConfirm okCallBack={()=>this.confirmOkFn()} cancelCallBack={()=>this.confirmCancelFn()} message="hi im a confirm dialog!" isShow={this.state.dialog == 'confirm'} />
				<MToast isShow={this.state.dialog == 'toast'} message="我是2000毫秒的toast！" time="2000" />
			</div>
		)
	}
}

module.exports = dialogComponent;