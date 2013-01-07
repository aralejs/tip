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
margin-bottom:20px;
zoom:1;
}
#content .cell p {
float:left;
padding:10px;
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
<link rel="stylesheet" href="https://a.alipayobjects.com/al/alice.components.ui-poptip-1.3-src.css" type="text/css" media="screen" charset="utf-8">
<link rel="stylesheet" href="https://a.alipayobjects.com/al/alice.components.ui-tiptext-1.3-src.css" type="text/css" media="screen" charset="utf-8">

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
        direction: 'right',
        arrowShift: 20
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
        direction: 'left',
        arrowShift: 20
    });
});
````

<div class="cell">
    <p id="test4-1">点击打开Tip(下)</p>
</div>

<div class="examples">
<div class="ui-poptip fn-hide" id="poptip4-1">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-1">
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
        element: '#poptip4-1',
        trigger: '#test4-1',
        triggerType: 'click',
        direction: 'down',
        arrowShift: -20
    });
});
````

<div class="cell">
    <p id="test5">别的tip(上)</p>
</div>

<div class="examples">
<div id="poptip5" class="ui-tiptext-container ui-tiptext-container-message fn-hide">
    <div class="ui-tiptext-arrow ui-tiptext-arrowdown">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="ui-tiptext ui-tiptext-message"><span class="ui-tiptext-icon"></span>此服务支付宝不收取任何费用。</p>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip5',
        trigger: '#test5',
        direction: 'up',
        arrowShift: 40
    });
});
````

<div class="cell">
    <p id="test6">别的tip(下)</p>
</div>

<div class="examples">
<div id="poptip6" class="ui-tiptext-container ui-tiptext-container-warning fn-hide">
    <div class="ui-tiptext-arrow ui-tiptext-arrowup">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="ui-tiptext ui-tiptext-warning"><span class="ui-tiptext-icon"></span>此服务支付宝不收取任何费用。</p>
</div>
</div>

````javascript
seajs.use(['tip'], function(Tip) {
    new Tip({
        element: '#poptip6',
        trigger: '#test6',
        direction: 'down',
        arrowShift: 40
    });
});
````

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
        <div class="ui-poptip-arrow ui-poptip-arrow-7">
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
        effect: 'slide',
        duration: 100
    });
});
````
