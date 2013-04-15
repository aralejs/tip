# Tip 演示

- order: 1

---

这里的 Tip 需要自己写 dom 结构在页面上，并自行引用相应的样式。

---

`````css
#content .poptip {
font:12px/1.5 arial;
}
#content .cell {
overflow:hidden;
zoom:1;
}
#content .cell p {
float:left;
padding:10px;
margin: 0;
border: 2px solid #e80;
background: #eee;
overflow:hidden;
}
.fn-hide {
display:none;
}
.ui-tiptext-container * {
font-size:12px;
margin:0;
padding:0;
line-height:1.5;
}
em {
font-style: normal;
}
`````
<link rel="stylesheet" href="http://modules.spmjs.org/alice/poptip/1.0.0/poptip-debug.css" type="text/css" media="screen" charset="utf-8">
<link rel="stylesheet" href="http://modules.spmjs.org/alice/tiptext/1.0.0/tiptext-debug.css" type="text/css" media="screen" charset="utf-8">

## 方向参数 direction

<div class="cell">
    <p id="test1">鼠标移上来试试(上)</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip1">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-7">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是上方的tip ◆</div>
            <div>我是上方的tip ◆</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip1',    
        trigger: '#test1'
    });
});
````

<div class="cell">
    <p id="test2">鼠标移上来试试(下)</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip2">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-11">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是下方的tip</div>
            <div>我是下方的tip</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip2',
        trigger: '#test2',
        direction: 'down'
    }).set('content', '我是下方的tip(改动内容了)');
});
````

<div class="cell">
    <p id="test3">鼠标移上来试试(右)</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip3">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-10">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是右方的tip</div>
            <div>我是右方的tip</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip3',
        trigger: '#test3',
        direction: 'right'
    });
});
````

<div class="cell">
    <p id="test4">鼠标移上来试试(左)</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip4">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-2">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是左方的tip</div>
            <div>我是左方的tip</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip4',
        trigger: '#test4',
        direction: 'left'
    });
});
````

## 调节位置

<div class="cell">
    <p id="test6">不指向 trigger 的中心</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip6">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-11">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是下方的tip</div>
            <div>我是下方的tip</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip6',
        trigger: '#test6',
        direction: 'down',
        distance: 20,   // 距离 trigger 20像素
        pointPos: 0     // 指向trigger的最左边
    });
});
````
<div class="cell">
    <p id="test6-1">指向 trigger 的尾巴</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip6-1">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-11">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是下方的tip</div>
            <div>我是下方的tip</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip6-1',
        trigger: '#test6-1',
        direction: 'down',
        pointPos: '100%'     // 指向trigger的最右边
    });
});
````


## 触发方式 triggerType

<div class="cell">
    <p id="test9">点击打开Tip</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip9">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-7">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是上方的tip ◆</div>
            <div>我是上方的tip ◆</div>
        </div>
    </div>
    </div>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip9',
        trigger: '#test9',
        triggerType: 'click',
        direction: 'up'
    });
});
````

## 更换下样式和模板

<div class="cell">
    <p id="test5">其他样式的tip</p>
</div>

<div class="examples">
<div class="ui-tiptext-container ui-tiptext-container-message fn-hide" id="poptip5">
    <div class="ui-tiptext-arrow ui-tiptext-arrowup">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="ui-tiptext ui-tiptext-message">
        <i class="ui-tiptext-icon iconfont" title="提示">&#xF046;</i>
        此服务支付宝不收取任何费用。
    </p>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip5',
        trigger: '#test5',
        direction: 'down',
        arrowShift: 40  // 相应调节下箭头距离左边的距离
    });
});
````

## 动画效果 effect

<div class="cell">
    <p id="test7">淡出Tip</p>
</div>

<div class="ui-poptip fn-hide" id="poptip7">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-7">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是淡出的tip ◆</div>
            <div>我是淡出的tip ◆</div>
        </div>
    </div>
    </div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip7',    
        trigger: '#test7',
        effect: 'fade'
    });
});
````

<div class="cell">
    <p id="test8">滑出Tip</p>
</div>

<div class="ui-poptip fn-hide" id="poptip8">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-11">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content" data-role="content">
            <div>我是滑出的tip ◆</div>
            <div>我是滑出的tip ◆</div>
        </div>
    </div>
    </div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip8',
        trigger: '#test8',
        direction: 'down',
        effect: 'slide',
        duration: 100
    });
});
````
