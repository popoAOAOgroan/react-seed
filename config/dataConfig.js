// import storage from 'app/m_statistical/statistical_storage/localStorage';
//config
import storage from 'framework/js/provider/storage/storage';

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(storage);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['storage'], factory);
    } else {
        // Global Variables
        factory(storage);
    }
}(this, function (storage) {
    'use strict';

    let ALL_ITEM_STORAGE = storage.localStorage('all_item_storage');
    let TODAY_ITEM_STORAGE = storage.localStorage('today_item_storage');
    
    let defaultItemInfo = {
		yc : [],
		xj : [],
		yj : [],
		fj : [],
		dj : []
	}

    let allItem = ALL_ITEM_STORAGE.getItem('data')?ALL_ITEM_STORAGE.getItem('data'):[];
	let curItem = {
		name: '',
		items: []
	};
	let itemInfo = TODAY_ITEM_STORAGE.getItem('data')?TODAY_ITEM_STORAGE.getItem('data'):defaultItemInfo;

	var _setTodayItem = function(_itemInfo){
		TODAY_ITEM_STORAGE.putItem('time',new Date().getTime());
		TODAY_ITEM_STORAGE.putItem('data',itemInfo);
	};

	var _checkItemTimeOver = function(){
		let lastTime = new Date(TODAY_ITEM_STORAGE.getItem('time')).toDateString();
		let curTime = new Date().toDateString();

		console.log('lastTime',lastTime,'curTime',curTime,lastTime<curTime);
		if (lastTime<curTime) {
			allItem = allItem.concat({
				time: new Date().getTime(),
				data: itemInfo
			});
			ALL_ITEM_STORAGE.putItem('data',allItem);
			itemInfo = defaultItemInfo;
			_setTodayItem(itemInfo);
		}
	};
	_checkItemTimeOver();

	const itemFn = {
		getTodayItem : function(){
			return itemInfo;
		},
		getItemWithName: function(name){
			return itemInfo[name];
		},
		setCurItemToData : function(){
			itemInfo[curItem.name] = curItem.items;
			_setTodayItem(itemInfo);
			curItem = {
				name: '',
				items: []
			};
		},
		toggleCurItem : function(item){
			if (!curItem.items.some((v,i)=>{
				if (v==item.name) {
					curItem.items.splice(i, 1);
					return true;
				}
			})) {
				curItem.items = curItem.items.concat(item.name);
			}
		},
		addCurItemName : function(name){
			curItem.name = name;
			curItem.items = itemInfo[name];
		}
	}
	return itemFn; 
}));

// (function () {
// 	let curItem = {
// 		name: '',
// 		items: []
// 	};
// 	let itemInfo = {
// 		yc : [],
// 		xj : [],
// 		yj : [],
// 		fj : [],
// 		dj : []
// 	};
// 	const itemFn = {
// 		getAllItem : function(){
// 			return itemInfo;
// 		},
// 		setCurItemToData : function(){
// 			itemInfo[curItem.name] = curItem.items;
// 		},
// 		toggleCurItem : function(item){
// 			curItem.items = curItem.items.concat(item);
// 		},
// 		addCurItemName : function(name){
// 			curItem.name = name;
// 		}
// 	}
// 	return itemFn; 
// })();