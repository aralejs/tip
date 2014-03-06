define("arale/tip/1.2.2/tip-debug", [ "$-debug", "./basic-tip-debug", "arale/popup/1.1.6/popup-debug", "arale/overlay/1.1.4/overlay-debug", "arale/position/1.0.1/position-debug", "arale/iframe-shim/1.0.2/iframe-shim-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "./tip-debug.css", "./tip-debug.tpl" ], function(require, exports, module) {
    var $ = require("$-debug");
    var BasicTip = require("./basic-tip-debug");
    // 依赖样式 alice/poptip@1.1.1
    require("./tip-debug.css");
    // 气泡提示弹出组件
    // ---
    var Tip = BasicTip.extend({
        attrs: {
            template: require("./tip-debug.tpl"),
            // 提示内容
            content: "A TIP BOX",
            // 箭头位置
            // 按钟表点位置，目前支持1、2、5、7、10、11点位置
            // https://i.alipayobjects.com/e/201307/jBty06lQT.png
            arrowPosition: 7,
            align: {
                setter: function(val) {
                    // 用户初始化时主动设置了 align
                    // 且并非来自 arrowPosition 的设置
                    if (val && !val.comeFromArrowPosition) {
                        this._specifiedAlign = true;
                    }
                    return val;
                }
            },
            // 颜色 [yellow|blue|white]
            theme: "yellow",
            // 当弹出层显示在屏幕外时，是否自动转换浮层位置
            inViewport: false
        },
        setup: function() {
            BasicTip.superclass.setup.call(this);
            this._originArrowPosition = this.get("arrowPosition");
            this.after("show", function() {
                this._makesureInViewport();
            });
        },
        _makesureInViewport: function() {
            if (!this.get("inViewport")) {
                return;
            }
            var ap = this._originArrowPosition, scrollTop = $(window).scrollTop(), viewportHeight = $(window).outerHeight(), elemHeight = this.element.height() + this.get("distance"), triggerTop = this.get("trigger").offset().top, triggerHeight = this.get("trigger").height(), arrowMap = {
                "1": 5,
                "5": 1,
                "7": 11,
                "11": 7
            };
            if ((ap == 11 || ap == 1) && triggerTop + triggerHeight > scrollTop + viewportHeight - elemHeight) {
                // tip 溢出屏幕下方
                this.set("arrowPosition", arrowMap[ap]);
            } else if ((ap == 7 || ap == 5) && triggerTop < scrollTop + elemHeight) {
                // tip 溢出屏幕上方
                this.set("arrowPosition", arrowMap[ap]);
            } else {
                // 复原
                this.set("arrowPosition", this._originArrowPosition);
            }
        },
        // 用于 set 属性后的界面更新
        _onRenderArrowPosition: function(val, prev) {
            val = parseInt(val, 10);
            var arrow = this.$(".ui-poptip-arrow");
            arrow.removeClass("ui-poptip-arrow-" + prev).addClass("ui-poptip-arrow-" + val);
            // 用户设置了 align
            // 则直接使用 align 表示的位置信息，忽略 arrowPosition
            if (this._specifiedAlign) {
                return;
            }
            var direction = "", arrowShift = 0;
            if (val === 10) {
                direction = "right";
                arrowShift = 20;
            } else if (val === 11) {
                direction = "down";
                arrowShift = 22;
            } else if (val === 1) {
                direction = "down";
                arrowShift = -22;
            } else if (val === 2) {
                direction = "left";
                arrowShift = 20;
            } else if (val === 5) {
                direction = "up";
                arrowShift = -22;
            } else if (val === 7) {
                direction = "up";
                arrowShift = 22;
            }
            this.set("direction", direction);
            this.set("arrowShift", arrowShift);
            this._setAlign();
        },
        _onRenderWidth: function(val) {
            this.$('[data-role="content"]').css("width", val);
        },
        _onRenderHeight: function(val) {
            this.$('[data-role="content"]').css("height", val);
        },
        _onRenderTheme: function(val, prev) {
            this.element.removeClass("ui-poptip-" + prev);
            this.element.addClass("ui-poptip-" + val);
        }
    });
    module.exports = Tip;
    module.exports.outerBoxClass = "arale-tip-1_2_2";
});

define("arale/tip/1.2.2/basic-tip-debug", [ "arale/popup/1.1.6/popup-debug", "$-debug", "arale/overlay/1.1.4/overlay-debug", "arale/position/1.0.1/position-debug", "arale/iframe-shim/1.0.2/iframe-shim-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug" ], function(require, exports, module) {
    var Popup = require("arale/popup/1.1.6/popup-debug");
    // 通用提示组件
    // 兼容站内各类样式
    module.exports = Popup.extend({
        attrs: {
            // 提示内容
            content: null,
            // 提示框在目标的位置方向 [up|down|left|right]
            direction: "up",
            // 提示框离目标距离(px)
            distance: 8,
            // 箭头偏移位置(px)，负数表示箭头位置从最右边或最下边开始算
            arrowShift: 22,
            // 箭头指向 trigger 的水平或垂直的位置
            pointPos: "50%"
        },
        _setAlign: function() {
            var alignObject = {}, arrowShift = this.get("arrowShift"), distance = this.get("distance"), pointPos = this.get("pointPos"), direction = this.get("direction");
            if (arrowShift < 0) {
                arrowShift = "100%" + arrowShift;
            }
            if (direction === "up") {
                alignObject.baseXY = [ pointPos, 0 ];
                alignObject.selfXY = [ arrowShift, "100%+" + distance ];
            } else if (direction === "down") {
                alignObject.baseXY = [ pointPos, "100%+" + distance ];
                alignObject.selfXY = [ arrowShift, 0 ];
            } else if (direction === "left") {
                alignObject.baseXY = [ 0, pointPos ];
                alignObject.selfXY = [ "100%+" + distance, arrowShift ];
            } else if (direction === "right") {
                alignObject.baseXY = [ "100%+" + distance, pointPos ];
                alignObject.selfXY = [ 0, arrowShift ];
            }
            alignObject.comeFromArrowPosition = true;
            this.set("align", alignObject);
        },
        // 用于 set 属性后的界面更新
        _onRenderContent: function(val) {
            var ctn = this.$('[data-role="content"]');
            if (typeof val !== "string") {
                val = val.call(this);
            }
            ctn && ctn.html(val);
        }
    });
    module.exports.outerBoxClass = "arale-tip-1_2_2";
});

define("arale/tip/1.2.2/tip-debug.css", [], function() {
    seajs.importStyle(".arale-tip-1_2_2 .ui-poptip{color:#DB7C22;z-index:101;font-size:12px;line-height:1.5;zoom:1}.arale-tip-1_2_2 .ui-poptip-shadow{background-color:rgba(229,169,107,.15);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#26e5a96b, endColorstr=#26e5a96b);border-radius:2px;padding:2px;zoom:1;_display:inline}.arale-tip-1_2_2 .ui-poptip-container{position:relative;background-color:#FFFCEF;border:1px solid #ffbb76;border-radius:2px;padding:5px 15px;zoom:1;_display:inline}.arale-tip-1_2_2 .ui-poptip:after,.arale-tip-1_2_2 .ui-poptip-shadow:after,.arale-tip-1_2_2 .ui-poptip-container:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}.arale-tip-1_2_2 a.ui-poptip-close{position:absolute;right:3px;top:3px;border:1px solid #ffc891;text-decoration:none;border-radius:3px;width:12px;height:12px;font-family:tahoma;color:#dd7e00;line-height:10px;*line-height:12px;text-align:center;font-size:14px;background:#ffd7af;background:-webkit-gradient(linear,left top,left bottom,from(#FFF0E1),to(#FFE7CD));background:-moz-linear-gradient(top,#FFF0E1,#FFE7CD);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF0E1', endColorstr='#FFE7CD');background:-o-linear-gradient(top,#FFF0E1,#FFE7CD);background:linear-gradient(top,#FFF0E1,#FFE7CD);overflow:hidden}.arale-tip-1_2_2 a.ui-poptip-close:hover{border:1px solid #ffb24c;text-decoration:none;color:#dd7e00;background:#ffd7af;background:-webkit-gradient(linear,left top,left bottom,from(#FFE5CA),to(#FFCC98));background:-moz-linear-gradient(top,#FFE5CA,#FFCC98);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFE5CA', endColorstr='#FFCC98');background:-o-linear-gradient(top,#FFE5CA,#FFCC98);background:linear-gradient(top,#FFE5CA,#FFCC98)}.arale-tip-1_2_2 .ui-poptip-arrow{position:absolute;z-index:10;*zoom:1}.arale-tip-1_2_2 .ui-poptip-arrow em,.arale-tip-1_2_2 .ui-poptip-arrow span{position:absolute;*zoom:1;width:0;height:0;border-color:rgba(255,255,255,0);border-color:transparent\\0;*border-color:transparent;_border-color:tomato;_filter:chroma(color=tomato);border-style:solid;overflow:hidden;top:0;left:0}.arale-tip-1_2_2 .ui-poptip-arrow-10{left:-6px;top:10px}.arale-tip-1_2_2 .ui-poptip-arrow-10 em{top:0;left:-1px;border-right-color:#ffbb76;border-width:6px 6px 6px 0}.arale-tip-1_2_2 .ui-poptip-arrow-10 span{border-right-color:#FFFCEF;border-width:6px 6px 6px 0}.arale-tip-1_2_2 .ui-poptip-arrow-9{left:-6px;top:50%}.arale-tip-1_2_2 .ui-poptip-arrow-9 em{top:-6px;left:-1px;border-right-color:#ffbb76;border-width:6px 6px 6px 0}.arale-tip-1_2_2 .ui-poptip-arrow-9 span{top:-6px;border-right-color:#FFFCEF;border-width:6px 6px 6px 0}.arale-tip-1_2_2 .ui-poptip-arrow-2{top:10px;right:0}.arale-tip-1_2_2 .ui-poptip-arrow-2 em{top:0;left:1px;border-left-color:#ffbb76;border-width:6px 0 6px 6px}.arale-tip-1_2_2 .ui-poptip-arrow-2 span{border-left-color:#FFFCEF;border-width:6px 0 6px 6px}.arale-tip-1_2_2 .ui-poptip-arrow-3{top:50%;right:0}.arale-tip-1_2_2 .ui-poptip-arrow-3 em{top:-6px;left:1px;border-left-color:#ffbb76;border-width:6px 0 6px 6px}.arale-tip-1_2_2 .ui-poptip-arrow-3 span{top:-6px;border-left-color:#FFFCEF;border-width:6px 0 6px 6px}.arale-tip-1_2_2 .ui-poptip-arrow-11 em,.arale-tip-1_2_2 .ui-poptip-arrow-12 em,.arale-tip-1_2_2 .ui-poptip-arrow-1 em{border-width:0 6px 6px;border-bottom-color:#ffbb76;top:-1px;left:0}.arale-tip-1_2_2 .ui-poptip-arrow-11 span,.arale-tip-1_2_2 .ui-poptip-arrow-12 span,.arale-tip-1_2_2 .ui-poptip-arrow-1 span{border-width:0 6px 6px;border-bottom-color:#FFFCEF}.arale-tip-1_2_2 .ui-poptip-arrow-11{left:14px;top:-6px}.arale-tip-1_2_2 .ui-poptip-arrow-1{right:28px;top:-6px}.arale-tip-1_2_2 .ui-poptip-arrow-12{left:50%;top:-6px}.arale-tip-1_2_2 .ui-poptip-arrow-12 em,.arale-tip-1_2_2 .ui-poptip-arrow-12 span{left:-6px}.arale-tip-1_2_2 .ui-poptip-arrow-5 em,.arale-tip-1_2_2 .ui-poptip-arrow-6 em,.arale-tip-1_2_2 .ui-poptip-arrow-7 em{border-width:6px 6px 0;border-top-color:#ffbb76;top:1px;left:0}.arale-tip-1_2_2 .ui-poptip-arrow-5 span,.arale-tip-1_2_2 .ui-poptip-arrow-6 span,.arale-tip-1_2_2 .ui-poptip-arrow-7 span{border-width:6px 6px 0;border-top-color:#FFFCEF}.arale-tip-1_2_2 .ui-poptip-arrow-5{right:28px;bottom:0}.arale-tip-1_2_2 .ui-poptip-arrow-6{left:50%;bottom:0}.arale-tip-1_2_2 .ui-poptip-arrow-7{left:14px;bottom:0}.arale-tip-1_2_2 .ui-poptip-arrow-6 em,.arale-tip-1_2_2 .ui-poptip-arrow-6 span{left:-6px}:root .arale-tip-1_2_2 .ui-poptip-shadow{FILTER:none\\9}.arale-tip-1_2_2 .ui-poptip-blue{color:#4d4d4d}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-shadow{background-color:rgba(0,0,0,.05);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#0c000000, endColorstr=#0c000000)}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-container{background-color:#F8FCFF;border:1px solid #B9C8D3}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-10 em,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-9 em{border-right-color:#B9C8D3}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-11 em,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-12 em,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-1 em{border-bottom-color:#B9C8D3}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-2 em,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-3 em{border-left-color:#B9C8D3}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-5 em,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-6 em,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-7 em{border-top-color:#B9C8D3}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-10 span,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-9 span{border-right-color:#F8FCFF}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-11 span,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-12 span,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-1 span{border-bottom-color:#F8FCFF}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-2 span,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-3 span{border-left-color:#F8FCFF}.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-5 span,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-6 span,.arale-tip-1_2_2 .ui-poptip-blue .ui-poptip-arrow-7 span{border-top-color:#F8FCFF}.arale-tip-1_2_2 .ui-poptip-white{color:#333}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-shadow{background-color:rgba(0,0,0,.05);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#0c000000, endColorstr=#0c000000)}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-container{background-color:#fff;border:1px solid #b1b1b1}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-10 em,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-9 em{border-right-color:#b1b1b1}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-11 em,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-12 em,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-1 em{border-bottom-color:#b1b1b1}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-2 em,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-3 em{border-left-color:#b1b1b1}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-5 em,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-6 em,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-7 em{border-top-color:#b1b1b1}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-10 span,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-9 span{border-right-color:#fff}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-11 span,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-12 span,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-1 span{border-bottom-color:#fff}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-2 span,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-3 span{border-left-color:#fff}.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-5 span,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-6 span,.arale-tip-1_2_2 .ui-poptip-white .ui-poptip-arrow-7 span{border-top-color:#fff}.arale-tip-1_2_2 .ui-poptip{top:0;left:0}");
});

define("arale/tip/1.2.2/tip-debug.tpl", [], '<div class="ui-poptip">\n    <div class="ui-poptip-shadow">\n    <div class="ui-poptip-container">\n        <div class="ui-poptip-arrow">\n            <em></em>\n            <span></span>\n        </div>\n        <div class="ui-poptip-content" data-role="content">\n        </div>\n    </div>\n    </div>\n</div>\n');
