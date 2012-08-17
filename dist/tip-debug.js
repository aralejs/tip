define("#tip/0.9.0/tip-debug", ["undefined-debug", "#popup/0.9.6/popup-debug", "$-debug", "#overlay/0.9.9/overlay-debug", "#iframe-shim/0.9.3/iframe-shim-debug", "#position/0.9.2/position-debug", "#widget/0.9.16/widget-debug", "#base/0.9.16/base-debug", "#events/0.9.1/events-debug", "#class/0.9.2/class-debug"], function(require, exports, module) {

    var $ = require('undefined-debug'),
        Popup = require('#popup/0.9.6/popup-debug');

    // 通用提示组件
    // 兼容站内各类样式
    var Tip = Popup.extend({
        
        attrs: {
            // 提示内容节点
            contentElement: '',

            // 提示内容
            content: '',

            // 提示框在目标的位置方向 [up|down|left|right]
            direction: 'up',

            // 提示框离目标距离(px)
            distance: 8,

            // 箭头偏移位置(px)，负数表示箭头在靠右或靠下位置
            arrowShift: 24

        },

        _setAlign: function() {
            var alignObject = { baseElement: this.get('trigger')[0] },
                arrowShift = this.get('arrowShift'),
                distance = this.get('distance'),
                direction = this.get('direction');

            if (arrowShift < 0) {
                arrowShift = '100%' + arrowShift;
            }

            if (direction === 'up') {
                alignObject.baseXY = ['50%', 0];
                alignObject.selfXY = [arrowShift, '100%+' + distance];
            }
            else if (direction === 'down') {
                alignObject.baseXY = ['50%', '100%+' + distance];
                alignObject.selfXY = [arrowShift, 0];
            }
            else if (direction === 'left') {
                alignObject.baseXY = [0, '50%'];
                alignObject.selfXY = ['100%+' + distance, arrowShift];
            }
            else if (direction === 'right') {
                alignObject.baseXY = ['100%+' + distance, '50%'];
                alignObject.selfXY = [0, arrowShift];
            }

            this.set('align', alignObject);
        },

        setup: function() {
            Tip.superclass.setup.call(this); 
            this._setAlign();
        },

        // 用于 set 属性后的界面更新

        _onRenderContent: function(val) {
            var ctn = this.get('contentElement');
            if (typeof val !== 'string') { 
                val = val.call(this);
            }
            ctn && this.$(ctn).html(val);
        }

    });

    module.exports = Tip;

});
