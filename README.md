# Tip

---

基础提示框组件，用于带箭头的 hover 提示框显示和隐藏。

---

## 配置说明

### content `string|function`

提示内容，使用 `data-role="content"` 标示内容节点。

### direction `string`

提示框在目标的位置方向，可选`up|down|left|right`。

### distance `number`

提示框离目标距离(px)，默认为8像素。


### arrowShift `number`

箭头偏移位置(px)，正数表示箭头距左上角的水平或垂直距离，负数表示距右下角的水平或垂直距离，默认为24像素。

其他配置请参考模块 [popup](../popup/) 的配置。


## 最佳实践

```js
seajs.use(['arale/tip/{{版本号}}/tip'], function(Tip) {
    new Tip({
        element: '#poptip',     // 提示框    
        trigger: '#test',       // 触发器
        direction: 'up',        // 提示框在触发器上方
        arrowShift: 40          // 箭头距框边距离 40 px
    });
});
```

Tip 组件不和具体结构依赖，可以自由和各种 dom 结构进行搭配，需要在页面上自己写 html （或者传模板参数）。若想直接使用带箭头的Tip，可以试试 [Atip](http://aralejs.org/tip/docs/atip.html)。

Tip 组件推荐和 [ui-poptip](https://a.alipayobjects.com/al/alice.components.ui-poptip-1.3-src.css8) 或 [ui-tiptext](https://a.alipayobjects.com/al/alice.components.ui-tiptext-1.1-src.css) 等 Tip 样式配合使用，用`direction`属性来控制提示框出现的位置，用`arrowShift`属性来调节箭头的偏移。

下面是一个完整的应用示例。

```html
<!-- 这里是触发元素 -->
<p id="test">鼠标移上来试试</p>

<!-- 这里是提示框，一开始是隐藏的 -->
<div class="ui-poptip fn-hide" id="poptip">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-7">
            <em>◆</em>
            <span>◆</span>
        </div>                  
        <div class="ui-poptip-content" data-role="content">
            <div>我是上方的tip</div>
            <div>我是上方的tip</div>            
        </div>
    </div>
    </div>
</div>

<!-- 绑定事件 -->
<script>
seajs.use(['arale/tip/{{版本号}}/tip'], function(Tip) {
    new Tip({
        element: '#poptip',    
        trigger: '#test',
        direction: 'up',
        arrowShift: 40
    });
});
</script>
```

