
# Tip

基础提示框组件，用于带箭头的hover提示框显示和隐藏。

本组件不和具体dom结构和样式绑定，若想使用封装好的tip组件，可以试试[alipay.atip](http://arale2.alipay.im/alipay_atip/)。

---


## 模块依赖

 - seajs
 - jquery
 - popup


## 配置说明

* `contentElement` {element|string} 

    提示内容节点。

* `content` {string|function}

    提示内容。

* `direction` {string}

    提示框在目标的位置方向，可选`up|down|left|right`。

* `distance` {number}

    提示框离目标距离(px)，默认为8像素。


* `arrowShift` {number}

    箭头偏移位置(px)，负数表示箭头在靠右或靠下位置，默认为24像素。


其他配置请参考模块[popup](../popup/)的配置。

## 最佳实践

本组件推荐和[`alice.components.ui-poptip`](http://arale.alipay.im/projects/4ee06eabb5f7002877019198)或[`alice.components.ui-tiptext`](http://arale.alipay.im/projects/4ffbc0e6f137f3a16a23b1c9)等配合使用，用`direction`属性来控制提示框出现的位置，用`arrowShift`属性来调节箭头的偏移。

```
<p id="test">鼠标移上来试试</p>

<div class="ui-poptip fn-hide" id="poptip">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-7">
            <em>◆</em>
            <span>◆</span>
        </div>                  
        <div class="ui-poptip-content">
            <div>我是上方的tip</div>
            <div>我是上方的tip</div>            
        </div>
    </div>
    </div>
</div>

<script>
seajs.use(['../src/tip'], function(Tip) {
    new Tip({
        element: '#poptip',    
        trigger: '#test',
        direction: 'up',
        arrowShift: 40
    });
});
</script>
```

## 交流讨论

欢迎创建
[Gitlab Issue](http://git.alipay.im/tip/issues/new)
来提交反馈。

