//react
import React from 'react';
//component
import Mheader from 'component/m_header/mHeader';
import Mlist from 'component/m_list/mList';
//scss
import 'doc/list/list.scss';

let myData = {"results":[{"content":"我是内容1"},{"content":"我是内容2"},{"content":"我是内容3"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容123"},{"content":"我是内容10"},{"content":"我是内容11"},{"content":"我是内容12"},{"content":"我是内容13"}]};
let myArray = myData.results.map(function(v,i){
	// return v.content; default
	return {
		'content': v.content,
		'minor': 'im minor one'
	}
});

class ListCell extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		console.log('this.props.',this.props.data)
		return (
			<div className="doc-cell">
				<p>main:{this.props.data.value.content}</p>
				<p>minor：{this.props.data.value.minor}</p>
			</div>
		)
	}
}

class ListComponent extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		// 
		return (
			<div className="flex-l doc-list-view">
                <Mheader title="react-seed-doc" needBack="true"/>
				<Mlist data={myArray} hide={true} diyCell={ListCell}/>
			</div>
		)
	}
}

module.exports = ListComponent;