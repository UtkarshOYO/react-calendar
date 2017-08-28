'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dates = require('../shared/dates');

var _propTypes3 = require('../shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'react-calendar__century-view__decades__decade';

var Decade = function Decade(_ref) {
  var active = _ref.active,
      date = _ref.date,
      decade = _ref.decade,
      hasActive = _ref.hasActive,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      onChange = _ref.onChange;
  return _react2.default.createElement(
    'button',
    {
      className: [className, active ? 'react-calendar__tile--active' : '', hasActive ? 'react-calendar__tile--hasActive' : '', 'react-calendar__tile'].join(' '),
      disabled: minDate && (0, _dates.getBeginOfDecade)(minDate) > date || maxDate && (0, _dates.getEndOfDecade)(maxDate) < date,
      onClick: onChange && function () {
        return onChange(date);
      }
    },
    _react2.default.createElement(
      'time',
      null,
      (0, _dates.getDecadeLabel)(decade)
    )
  );
};

Decade.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  date: _propTypes2.default.instanceOf(Date).isRequired,
  decade: _propTypes2.default.number.isRequired,
  hasActive: _propTypes2.default.bool.isRequired,
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  onChange: _propTypes2.default.func
};

exports.default = Decade;