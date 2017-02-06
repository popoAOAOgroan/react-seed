//react
import React from 'react';
//component
import Form from 'component/m_form/mForm';
import Mheader from 'component/m_header/mHeader';
import TodayComponent from 'app/m_statistical/TodayComponent';
import RecordComponent from 'app/m_statistical/RecordComponent';
import FilterComponent from 'app/m_statistical/FilterComponent';
//css
import 'app/m_statistical/HomeComponent.scss';
//config
import dataConfig from 'config/dataConfig';

class Nav extends React.Component{
	componentWillMount(){
		this.setState({
			'activeIndex': 0
		});
	}
	clickHandle(index){
		this.setState({
			activeIndex: index
		});
		this.props.callParentsFun(index);
	}
	render(){
		let navArray = this.props.data;
		return (
			<div className="m-nav">
				<ul className="flex-v">
					{
						navArray.map((v,i)=>{
							return (<li onClick={()=>this.clickHandle(i)} className={this.state.activeIndex==i?'flex-1 active':'flex-1'} key={i}>{v.text}</li>);
						})
					}
				</ul>
			</div>
		);
	}
}

class HomeComponent extends React.Component{
	constructor(props) {
		super(props);
		// this.state = {
		// 	curContetnIndex: 0
		// }
	}
	static defaultProps = {
		dataArray: [
			{
				content:'英超',
				name:'yc',
				iconName:'yc-icon',
				items:['阿森纳','切尔西','曼联','曼城','热刺','埃弗顿','利物浦','西布罗姆维奇','斯旺西','西汉姆联','莱斯特城','水晶宫','斯托克城','南安普顿','桑德兰','伯恩茅斯','沃特福德']
			},
			{
				content:'西甲',
				name:'xj',
				iconName:'xj-icon',
				items:['皇家马德里','巴塞罗那','瓦伦西亚','拉科鲁尼亚','马德里竞技','皇家社会','毕尔巴鄂竞技','皇家贝蒂斯','比利亚雷亚尔','塞维利亚','马拉加','拉斯帕尔马斯','埃瓦尔','塞尔塔','西班牙人','阿拉维斯','赫塔菲','格拉纳达','巴列卡诺','希洪','雷加利斯']
			},
			{
				content:'意甲',
				name:'yj',
				iconName:'yj-icon',
				items:['尤文图斯','那不勒斯','罗马','国际米兰','佛罗伦萨','萨索洛','AC米兰','拉齐奥','切沃','恩波利','热那亚','都灵','亚特兰大','博洛尼亚','桑普多利亚','巴勒莫','乌迪内斯','卡尔皮','弗罗西诺内','维罗纳']
			},
			{
				content:'法甲',
				name:'fj',
				iconName:'fj-icon',
				items:['巴黎圣日耳曼','里昂','摩纳哥','尼斯','里尔','圣埃蒂安','卡昂','雷恩','昂热','巴斯蒂亚','波尔多','蒙彼利埃','马赛','南特','洛里昂','甘冈','图卢兹','兰斯','加泽莱','特鲁瓦']
			},
			{
				content:'德甲',
				name:'dj',
				iconName:'dj-icon',
				items:['拜仁慕尼黑','多特蒙德','勒沃库森','门兴','沙尔克04','美因茨','柏林赫塔','沃尔夫斯堡','科隆','汉堡','因戈尔施塔特','奥格斯堡','云达不莱梅','达姆施塔特','霍芬海姆','法兰克福','斯图加特','汉诺威96']
			}
		],
		navArray: [
			{text:'TODAY',content:TodayComponent},
			{text:'RECORD',content:RecordComponent},
		]
	}
	state = {
		curContetnIndex: 0,
		curContentItems: []
	}
	toggleContent(curIndex){
		this.setState({
			curContetnIndex: curIndex
		})
		return true;
	}
	callBackHandle(content){
		console.log('content',content);
		let todayItems,curItems=[];
		let curLegInfoArray = this.props.dataArray.filter((v,i)=>{
			if(v.content == content){
				dataConfig.addCurItemName(v.name);
				todayItems = dataConfig.getItemWithName(v.name);
				return true;
			}
		});
		console.log(todayItems,curLegInfoArray[0].items)
		curItems = curLegInfoArray[0].items.map(v => {
			return {name:v,$isCheck:todayItems.includes(v)}
		});
		this.setState({
			curContentItems : curItems
		});
	}
	clearCurItems(){
		dataConfig.setCurItemToData();
		this.setState({
			curContentItems: []
		});
	}
	render(){
		// let navArray = [
		// 	{text:'TODAY',content:TodayComponent},
		// 	{text:'RECORD',content:RecordComponent},
		// ];
		// let myArray = [{content:'英超',iconName:'yc-icon',items:['阿森纳','切尔西','曼联','曼城','热刺','埃弗顿','利物浦','西布罗姆维奇','斯旺西','西汉姆联','莱斯特城','水晶宫','斯托克城','南安普顿','桑德兰','伯恩茅斯','沃特福德']},{content:'西甲',iconName:'xj-icon'},{content:'意甲',iconName:'yj-icon'},{content:'法甲',iconName:'fj-icon'},{content:'德甲',iconName:'dj-icon'}];
				// 
		//

		let curIndex = this.state.curContetnIndex;
		let CurContent = this.props.navArray[curIndex].content;
		let contentClass;
		if(this.state.curContentItems.length > 0){
			contentClass = 'home-mian-content flex-l blurme';
			// FilterComponentNode = FilterComponent;
		}else{
			contentClass = 'home-mian-content flex-l';
			// FilterComponentNode = null;
		}
		return(
			<div className="home-layer">
				<div className={contentClass}> 
					<Mheader title="Win & Loss" needBack={false}/>
					<div className="m-contnet flex-1">
						<CurContent data={this.props.dataArray} callBack={(content)=>this.callBackHandle(content)} />
					</div>
					<Nav data={this.props.navArray} callParentsFun={(curIndex)=>this.toggleContent(curIndex)}/>
				</div>
				<FilterComponent data={this.state.curContentItems} clearData={()=>this.clearCurItems()} />
			</div>
		)
	}
}

module.exports = HomeComponent;