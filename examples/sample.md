# Tip 演示文档

<style>
.cell {
    overflow:hidden;
    margin-bottom:20px;
    zoom:1;
}
.cell p {
    float:left;
    padding:10px;
    margin-right: 5px;
    background-color:#FFCB88;
    border-radius: 4px;
    cursor: pointer;
    overflow:hidden;
}
.cell p:hover {
    background-color:#FFB556;
}
</style>
```html
<script type="text/javascript" src="https://a.alipayobjects.com/jquery/jquery/1.7.2/jquery.js"></script>

<div class="cell">
    <p id="test">10点钟位置</p>
</div>

<div class="cell">
    <p id="test2">11点钟位置</p>
</div>

<div class="cell">
    <p id="test3">1点钟位置</p>
</div>

<div class="cell">
    <p id="test4">2点钟位置</p>
</div>

<div class="cell">
    <p id="test5">5点钟位置</p>
</div>

<div class="cell">
    <p id="test6">7点钟位置，更改内容</p>
</div>

<div class="cell">
    <p id="test7-1">淡入淡出</p>
</div>

<div class="cell">
    <p id="test7-2">下拉动画</p>
</div>

<div class="cell">
    <p id="test8">本来是7点钟的Tip，屏幕空间不够时会变成11点的Tip</p>
</div>

<div class="cell">
    <p id="test9">本来是1点钟的Tip，屏幕空间不够时会变成5点的Tip</p>
</div>

<div class="cell">
    <p id="test10">蓝色提示框</p>
</div>

<div class="cell">
    <p id="test11">利用 align 属性设置自定义位置</p>
</div>

<div class="cell">
    <p class="test12">动态获取</p>
    <p class="test12">trigger 的属性</p>
</div>

```

```javascript
import Tip from '../index';

// 箭头位置
new Tip({
    trigger: '#test',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    arrowPosition: 10
});

new Tip({
    trigger: '#test2',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    theme: 'white',
    arrowPosition: 11
});

new Tip({
    trigger: '#test3',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    arrowPosition: 1
});

new Tip({
    trigger: '#test4',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    arrowPosition: 2
});

new Tip({
    trigger: '#test5',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    arrowPosition: 5
});

new Tip({
    trigger: '#test6',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    theme: 'blue',
    arrowPosition: 7
});

// 动画效果
// 淡入淡出
new Tip({
    trigger: '#test7-1',
    effect: 'fade'
});

// 下拉动画
new Tip({
    trigger: '#test7-2',
    effect: 'slide',
    arrowPosition: 11,
    duration: 100
});

// 当屏幕空间不够时，自动转换箭头位置。
new Tip({
    trigger: '#test8',
    height: 100,
    width: 200,
    content: '<div>比较高的内容</div>',
    theme: 'white',
    inViewport: true,
    arrowPosition: 7
});

new Tip({
    trigger: '#test9',
    height: 100,
    width: 200,
    content: '<div>比较高的内容</div>',
    theme: 'white',
    inViewport: true,
    arrowPosition: 1
});

// 提示框主题
new Tip({
    trigger: '#test10',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    theme: 'blue'
});

// 自定义位置
new Tip({
    trigger: '#test11',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    align: {
        baseXY: [0, 0],
        selfXY: [0, '100%+8px']
    }
});

// 动态 content
var test12 = new Tip({
    trigger: '.test12'
});
test12.before('show', function() {
    this.set('content', this.activeTrigger.html());
});
```



