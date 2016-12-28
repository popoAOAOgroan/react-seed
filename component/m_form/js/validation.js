import validation from 'config/validation';

let testValue = function(event,propsObj){

	let _value = event.target.value;
	let _testObj = propsObj.test;
	let _isInvaild = false;
	let _invaildMsg = [];
	//检验input test
	_testObj.map((t,i)=>{
    	if (t == 'isEmpty') {//不得为空
    		const emptyCode = validation.emptyCode;
    		_value = _value.replace(emptyCode,'');
	        if (_value === '') {
	            _invaildMsg.push('不得为空');
	            _isInvaild = true;
	        }
    	}
    	if (t == 'isNum') {
    		if(isNaN(_value)){ //不是数字
	            _invaildMsg.push('只能为数字');
	            _isInvaild = true;
    		}
    	}
    	if (t == 'isTel'){
    		const phoneno = validation.phone; 
				if(!_value.match(phoneno)&&_value !== ''){//不是电话
	            _invaildMsg.push('必须是手机号');
	            _isInvaild = true;
				}
    	}
    	if (t == 'isPhone'){
    		const reg0 = validation.tel; //验证固定电话
				if (!_value.match(reg0)&&_value !== ''){
	            _invaildMsg.push('必须是固定电话');
	            _isInvaild = true;
				} 
    	}
    	if (t == 'isId'){
    		const idcard = validation.id;   //身份证
				if (!_value.match(idcard)){
	            _invaildMsg.push('必须是身份证号');
	            _isInvaild = true;
				} 
    	}
    	if (t == 'isCh'){ 
    		const chCode = validation.ch;  //中文字符
				if (!_value.match(chCode)){
	            _invaildMsg.push('必须是中文字符');
	            _isInvaild = true;
				} 
    	}
    	if (t == 'isEn'){ 
    		const enCode = validation.en;  //英文字符
				if (!_value.match(enCode)){
	            _invaildMsg.push('必须是英文字符');
	            _isInvaild = true;
				} 
    	}
    	if (t == 'isPost'){ 
    		const postcode = validation.post;  //邮编
				if (!_value.match(postcode)){
	            _invaildMsg.push('必须是邮政编码');
	            _isInvaild = true;
				} 
    	}
	});

	return {
		isInvaild: _isInvaild,
		invaildMsg: _invaildMsg,
		value: _value
	};
}

module.exports = testValue;