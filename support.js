var paramStack;
var formatStack;

exports.reset = function () {
    paramStack = [];
    formatStack = [];
}

exports.pushParam = function (s) {
    paramStack.push (s);
    return "";
}

exports.pushRHS = function (s) {
    formatStack.push (s);
    return "";
}

exports.listFormals = function () {
    let result = "";
    paramStack.forEach (name => {
	result = result + " " + name;
    });
    return result;
}
exports.listRHS = function () {
    let result = "";
    formatStack.forEach (name => {
	result = result + " ${" + name + "}";
    });
    return result;
}

exports.trace = function (s) {
    console.error (s);
}
