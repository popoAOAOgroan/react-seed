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

    let all_item_storage = storage.localStorage('all_item_storage');
    let today_item_storage = storage.localStorage('today_item_storage');
    
	return {
		ALL_ITEM_STORAGE : all_item_storage,
		ALL_ITEM_STORAGE : today_item_storage
	}; 
}));