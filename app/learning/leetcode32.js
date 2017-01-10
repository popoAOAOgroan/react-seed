const leetCodeLink = 'https://leetcode.com/articles/longest-valid-parentheses/';
let _array = [];
let _s = [];
let _max = 0;

function _checkArray(o){
    let _b = _array.some(function(v ,i){
        return v == o;
    });
    return _b;
}

function _loopArray(i){
    let _j = i-1;
    let _f = _checkArray(_j);
    if(_f){
        return _loopArray(_j);
    }
    if (_s[_j]=='(') {
        _array.push(_j);
        return _j;
    }else{
        return false;
    }
}

function _checkArrayMini(i){
    let _j = i-1;
    let _f = _checkArray(_j);
    if (_f) {
        return _checkArrayMini(_j);
    }else{
        return i;
    }

}

const leetcode32 = {

    handleChange: function(s) {
        _s = Array.from(s);
        // console.log('_s',_s);

        _s.forEach((v,i)=>{
            if(v == ')'){
                let _j = _loopArray(i);
                if (_j!==false) {
                    _array.push(i);
                    let _m = _checkArrayMini(_j);
                    _max = Math.max((i - _m),_max);
                    // _max = (i - _m) > _max ? (i-_m): _max;
                }
            }
        });
        // console.log('_array',_array);
        // console.log('_max',_max+1);
        return _max+1;
    }
}

module.exports = leetcode32; 