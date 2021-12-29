'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _expenses = require('./actions/expenses');

var _AppRouter = require('./routers/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _filters = require('./actions/filters');

var _expenses2 = require('./selectors/expenses');

var _expenses3 = _interopRequireDefault(_expenses2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// yarn add react-redux@5.0.5
//yarn add redux@3.7.2

var store = (0, _configureStore2.default)();

store.dispatch((0, _expenses.addExpense)({ description: 'water bill', amount: 500 }));
store.dispatch((0, _expenses.addExpense)({ description: 'gas bill', amount: 300 }));
store.dispatch((0, _filters.setTextFilter)('water'));

setTimeout(function () {
  store.dispatch((0, _filters.setTextFilter)('rent'));
}, 4000);

var state = store.getState();
var visibleExpenses = (0, _expenses3.default)(state.expenses, state.filters);
console.log(visibleExpenses);

var jsx = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_AppRouter2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));
