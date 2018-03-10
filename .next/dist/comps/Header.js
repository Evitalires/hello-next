"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement("div", null, _react2.default.createElement(_link2.default, { href: "https://evitalires.github.io/hello-next" }, _react2.default.createElement("a", { style: linkStyle }, "Home")), _react2.default.createElement(_link2.default, { href: "https://evitalires.github.io/hello-next/blog" }, _react2.default.createElement("a", { style: linkStyle }, "Blog")), _react2.default.createElement(_link2.default, { href: "https://evitalires.github.io/hello-next/markDown" }, _react2.default.createElement("a", { style: linkStyle }, "MarkDown")));
};

exports.default = Header;