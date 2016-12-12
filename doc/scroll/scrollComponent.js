//react
import React from 'react';
//component
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
//css
import './docScroll.scss';

export default class scrollComponent extends React.Component{
	constructor(props) {
		super(props);
	}
	static defaultProps = {
		options: {
			mouseWheel: true,
			scrollbars: true
		}
    }
	onScrollStart(){
		console.log('on start');
	}
	render() {
		return (
			<div className="flex-1 doc-scroll-component">
				<ReactIScroll iScroll={iScroll} options={this.props.options} onScrollStart={()=>this.onScrollStart()}>
					<ul className="groups">
						<li className="cell">test1</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test5</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test10</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test15</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test</li>
						<li className="cell">test20</li>
					</ul>
				</ReactIScroll>
			</div>
		)
	}
}
