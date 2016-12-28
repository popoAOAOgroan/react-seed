const validationCode = {
	emptyCode : /^\s+|\s+$/ig,
	phone : /^1[3-9][0-9]\d{8}$/,
	tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
	id: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	ch: /[^\u4e00-\u9fa5\s+]/ig,
	en: /^[a-zA-Z\s]+$/,
	post: /^[1-9][0-9]{5}$/
}
module.exports = validationCode;