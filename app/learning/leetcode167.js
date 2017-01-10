const leetCodeLink = 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/';

const loopArr = function(i, j, t, v){ //v=10 [1,3,10]
	console.log(i, j, t);
	// console.log(v,_arr[j],_tar);s
	if ((v+_arr[j])>_tar) {
		if ((j-i)===1) {
			// return loopArr(i, i, i, v);
			if ((v+_arr[i])===_tar) {
				return i;
			}else{
				return false;
			}
		}else if((j-i)===0){
			return false;
		}else{
			let _j = i + Math.ceil((j-i)/2);
			return loopArr(i, _j, j, v);
		}
	}
	else if ((v+_arr[j])<_tar) {
		if ((t-j)===1) {
			// return loopArr(t, t, t, v);
			if ((v+_arr[t])===_tar) {
				return t;
			}else{
				return false;
			}
		}else if((t-j)===0){
			return false;
		}else{
			let _j = j + Math.ceil((t-j)/2);
			return loopArr(j, _j, t, v);
		}
	}
	else{
		return j;
	}
}

let _arr = [];
let _tar = 0;

const handleFun = {
	twoSum : function(numArr, target){
		_arr = numArr;
		_tar = target;
		let _result = false;
		let _resultArray = [];
		_arr.some((v,i)=>{
			_result = loopArr(0,Math.ceil((_arr.length-1)/2),(_arr.length-1),v);
			// console.log('--result',i,_result);
			_resultArray = [i,_result];
			if (_result) return true;
		});
		// console.log('result',_result);
		return _resultArray;
	}
}

module.exports = handleFun;