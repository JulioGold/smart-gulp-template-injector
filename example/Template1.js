/*inject:libs*/

var smartSomeFunction = {
	someFunction: SomeFunction
};

module.exports = smartSomeFunction;

function SomeFunction() {
	console.log('All right.');
};

/*inject:function*/