<style>
.poptip {
font:12px/1.5 arial;
}
.cell {
overflow:hidden;
margin-bottom:20px;
}
.cell p {
float:left;
padding:10px;
background-color:#e80;
overflow:hidden;
}
.fn-hide {
display:none;
}
.ui-tiptext-container * {
font-size:12px;
margin:0!important;
padding:0!important;
line-height:1.5;
}
</style>
<link rel="stylesheet" href="http://dev.assets.alipay.net/al/alice.components.ui-poptip-1.1-SNAPSHOT-src.css" type="text/css" media="screen" charset="utf-8">
<link rel="stylesheet" href="http://dev.assets.alipay.net/al/alice.components.ui-tiptext-1.3-SNAPSHOT-src.css" type="text/css" media="screen" charset="utf-8">

<div class="cell">
    <p id="test1">鼠标移上来试试(上)</p>
</div>

<div class="ui-poptip fn-hide" id="poptip1">
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

<div class="ui-poptip fn-hide" id="poptip2">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-11">
            <em>◆</em>
            <span>◆</span>
        </div>                  
        <div class="ui-poptip-content">
            <div>我是下方的tip</div>
            <div>我是下方的tip</div>       
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
    });
});
````

<div class="cell">
    <p id="test3">鼠标移上来试试(右)</p>
</div>

<div class="ui-poptip fn-hide" id="poptip3">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-10">
            <em>◆</em>
            <span>◆</span>
        </div>                  
        <div class="ui-poptip-content">
            <div>我是右方的tip</div>
            <div>我是右方的tip</div>
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

<div class="ui-poptip fn-hide" id="poptip4">
    <div class="ui-poptip-shadow">
    <div class="ui-poptip-container">
        <div class="ui-poptip-arrow ui-poptip-arrow-2">
            <em>◆</em>
            <span>◆</span>
        </div>
        <div class="ui-poptip-content">
            <div>我是左方的tip</div>
            <div>我是左方的tip</div>
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
    <p id="test5">别的tip(上)</p>
</div>

<div id="poptip5" class="ui-tiptext-container ui-tiptext-container-message fn-hide">
    <div class="ui-tiptext-arrow ui-tiptext-arrowdown">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="ui-tiptext ui-tiptext-message"><span class="ui-tiptext-icon"></span>此服务支付宝不收取任何费用。</p>
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

<div id="poptip6" class="ui-tiptext-container ui-tiptext-container-warning fn-hide">
    <div class="ui-tiptext-arrow ui-tiptext-arrowup">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="ui-tiptext ui-tiptext-warning"><span class="ui-tiptext-icon"></span>此服务支付宝不收取任何费用。</p>
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

