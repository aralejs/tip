# Atip 演示（默认样式和结构，更漂亮的 API）

- order: 2

---

<style>
.cell {
overflow:hidden;
margin-bottom:20px;
zoom:1;
}
.cell p {
float:left;
padding:10px;
background-color:#e80;
overflow:hidden;
}
</style>

<div class="cell">
    <p id="test">10点钟位置</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test',
        content: '<div style="padding:10px">我是内容</div>',
        arrowPosition: 10
    });
});
````

<div class="cell">
    <p id="test2">11点钟位置</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test2',
        content: '<div style="padding:10px">我是内容</div>',
        theme: 'white',
        arrowPosition: 11
    });
});
````

<div class="cell">
    <p id="test3">1点钟位置</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test3',
        content: '<div style="padding:10px">我是内容</div>',
        arrowPosition: 1
    });
});
````

<div class="cell">
    <p id="test4">2点钟位置</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test4',
        content: '<div style="padding:10px">我是内容</div>',
        arrowPosition: 2
    });
});
````

<div class="cell">
    <p id="test5">5点钟位置</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test5',
        content: '<div style="padding:10px">我是内容</div>',
        arrowPosition: 5
    });
});
````

<div class="cell">
    <p id="test6">7点钟位置，更改内容</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test6',
        content: '<div style="padding:10px">我是内容</div>',
        theme: 'blue',
        arrowPosition: 7
    });
    t.set('content', '更改后的内容');
});
````

<div class="cell">
    <p id="test8">本来是7点钟的Tip，但位置太靠上了就会变成11点的Tip</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test8',
        height: 100,
        width: 200,
        content: '<div>比较高的内容</div>',
        theme: 'white',
        inViewport: true,
        arrowPosition: 7
    });
});
````

<div class="cell">
    <p id="test9">本来是1点钟的Tip，但位置太靠下了就会变成5点的Tip</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test9',
        height: 100,
        width: 200,
        content: '<div>比较高的内容</div>',
        theme: 'white',
        inViewport: true,
        arrowPosition: 1
    });
});
````

<div class="cell">
    <p id="test7">进行适当的偏移</p>
</div>

````javascript
seajs.use(['atip'], function(Atip) {
    var t = new Atip({
        trigger: '#test7',
        content: '<div style="padding:10px">我是内容</div>',
        theme: 'white',
        pointPos: 10
    });
});
````

