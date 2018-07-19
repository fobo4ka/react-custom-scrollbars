'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarWidth;

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var scrollDiv = document.createElement('div');
        (0, _domCss2.default)(scrollDiv, {
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        scrollDiv.className = 'react-custom-scrollbars-webkit-force-show-scrollbars';

        var div = document.createElement('div');
        (0, _domCss2.default)(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999
        });
        div.innerHTML += '<style>.react-custom-scrollbars-webkit-force-show-scrollbars::-webkit-scrollbar { visibility:visible; opacity:1; }</style>';
        div.appendChild(scrollDiv);

        document.body.appendChild(div);
        scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}