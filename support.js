var paramStack;
var formatStack;

exports.reset = function () {
    paramStack = [];
    formatStack = [];
}

exports.pushParam = function (s) {
    paramStack.push (s);
}

exports.pushFormat = function (s) {
    formatStack.push (s);
}
