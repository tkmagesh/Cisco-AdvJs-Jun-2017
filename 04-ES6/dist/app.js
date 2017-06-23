(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = exports.Employee = function () {
	function Employee(id, name) {
		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
	}

	_createClass(Employee, [{
		key: "display",
		value: function display() {
			console.log("id = " + this.id + ", name=" + this.name);
		}
	}]);

	return Employee;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _Employee2 = require('./Employee');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var add = function add(x, y) {
	return x + y;
};
console.log(add(100, 200));

var FullTimeEmployee = function (_Employee) {
	_inherits(FullTimeEmployee, _Employee);

	function FullTimeEmployee(id, name) {
		var benefits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Good Food!";

		_classCallCheck(this, FullTimeEmployee);

		var _this = _possibleConstructorReturn(this, (FullTimeEmployee.__proto__ || Object.getPrototypeOf(FullTimeEmployee)).call(this, id, name));

		_this.benefits = benefits;
		return _this;
	}

	return FullTimeEmployee;
}(_Employee2.Employee);

var fte = new FullTimeEmployee(100, 'Magesh');
fte.display();

},{"./Employee":1}]},{},[2]);
