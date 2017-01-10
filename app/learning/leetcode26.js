const leetCodeLink = 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/';

var sortFun = function(a,b){
	return a-b;
}

var reSortArray = function(arr){
	return arr.sort(sortFun);
}

const leetcode26 = {
	removeDuplicates : function(arr){
		console.log(arr,typeof arr);
		let _array = reSortArray(arr);
		console.log('old_array and length',_array,_array.length);
		let _newArray = [];
		_array.map((v,i)=>{
			if (_newArray[_newArray.length-1]!==v) {
				_newArray.push(v);
			}
		});
		console.log('new_array and length',_newArray,_newArray.length);
		return _newArray.length;
	}
}
module.exports = leetcode26;