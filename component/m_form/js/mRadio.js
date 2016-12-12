//react
import React from 'react';
import 'component/m_form/scss/mRadios.scss'

class mRadio extends React.Component{
	constructor(props) {
		super(props);
		const radiosData = this.props.data;
		let curSelected;
		radiosData.map(
			(radio, i) => {
				if (radio.checked) {
					curSelected = i;
				}
			}
		);
		this.state = {
    		radioSelected: curSelected===undefined? 1:curSelected
    	};
	};

    selected(_selectedValue,_selectedIndex){
    	this.setState({
    		radioSelected: _selectedIndex
    	})
    	this.props.getRadioValue(_selectedValue);
    }

	render() {
		const radiosArray = this.props.data;
		let radioClass = 'm-radio';
		radioClass += this.props.className?' '+this.props.className : '';
		if (radiosArray === undefined || radiosArray.length === 0) {
			return (<span>no data</span>)
		}
		return (
			<div className={radioClass}>
				{
				radiosArray.map(
					(radios, i) => {
						return (
							<div className="radio-box" key={i}>
				                <input type="radio" value={radios.value} id={radios.name} name={this.props.name} />
				                <label htmlFor={radios.name} onClick={(selectedValue,selectedIndex)=>this.selected(radios.value,i)}>
				                    <span className="check">
				                    	<i className={this.state.radioSelected==i?'circle-check':'circle-check uncheck'}></i>
				                    </span>
				                    <span className="text">{radios.text}</span>
				                </label>
							</div>
						)
					}
				)
				}
			</div>
		);
	}
}

module.exports = mRadio;