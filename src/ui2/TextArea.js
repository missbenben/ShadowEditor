import Control from './Control';

/**
 * 文本域
 * @param {*} options 
 */
function TextArea(options) {
    Control.call(this, options);
    options = options || {};
    this.value = options.value || '';
};

TextArea.prototype = Object.create(Control.prototype);
TextArea.prototype.constructor = TextArea;

TextArea.prototype.render = function () {
    this.dom = document.createElement('textarea');
    this.dom.className = 'TextArea';
    this.dom.style.padding = '2px';
    this.dom.spellcheck = false;

    var _this = this;
    this.dom.addEventListener('keydown', function (event) {
        event.stopPropagation();

        if (event.keyCode === 9) {
            event.preventDefault();

            var cursor = _this.dom.selectionStart;
            _this.dom.value = _this.dom.value.substring(0, cursor) + '\t' + _this.dom.value.substring(cursor);
            _this.dom.selectionStart = cursor + 1;
            _this.dom.selectionEnd = _this.dom.selectionStart;
        }

    }, false);

    this.parent.appendChild(this.dom);

    this.setValue(this.value);
};

TextArea.prototype.getValue = function () {
    return this.dom.value;
};

TextArea.prototype.setValue = function (value) {
    this.dom.value = value;
    return this;
};

export default TextArea;