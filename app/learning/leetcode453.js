const leetCodeLink = 'https://leetcode.com/articles/minimum-moves-to-equal-array-elements/';

let _count = 0;

function sortAscending(a,b){
    return a - b;
}

function checkEqual(_array){
    //排序数组
    let _sortArray = _array.sort(sortAscending);
    //检查数组值是否相等
    //优化前
    // let isEqual = _sortArray.every(function(v,i){
    //     let nextIndex = i+1 == _sortArray.length? i:i+1;
    //     return (v - _sortArray[nextIndex]) === 0;
    // });
    //优化后
    let isEqual = (_sortArray[0] - _sortArray[_sortArray.length-1]) === 0
    console.log('isEqual',isEqual);
    if (!isEqual) {
        //若不想等，记录一次技术，并再循环一次
        let _newArray = _sortArray.map(function(v,i){
            if (i !== (_sortArray.length-1)) {
                v++;
            };
            return v;
        })
        _count++;
        console.log('_newArray',_newArray);
        checkEqual(_newArray);
    }
}

const leetcode453 = {
    mackArrayEqual: function(_array){
        checkEqual(_array);
        console.log('_count',_count);
        return _count;
    }
}

module.exports = leetcode453; 