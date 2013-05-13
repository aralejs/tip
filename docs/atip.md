# Atip 使用文档

- order: 1

---

Atip 是气泡提示弹出组件，它简化和封装了 Tip 组件，拥有一套默认的结构，可以很方便地直接使用。

注意，1.0.0 及以上版本内部集成了样式，无须单独引用样式。

[演示](http://aralejs.org/tip/examples/atip.html)

---

## API

### trigger `element|string` 

触发点元素。

### triggerType `string`

触发方式，[ hover | click ]。

### content `string|function`

提示框内容，可为。

### arrowPosition `number`

箭头位置，按钟表点位置，目前支持1、2、5、7、10、11点位置，默认 7 点钟。

### theme `string`

配色主题，内置黄色、蓝色和白色三种提示框样式[ yellow | blue | white ]，默认为黄色。

### inViewport `boolean`

当弹出层显示在屏幕外时，是否自动转换浮层位置，默认为 false。

## 最佳实践

本组件须和 [alice.components.ui-poptip](https://a.alipayobjects.com/al/alice.components.ui-poptip-1.3-src.css) 配合使用。

```javascript
seajs.use(['arale/tip/{{版本号}}/atip'], function(Atip) {
    new Atip({
        trigger: '#tip',
        content: '我是内容'
        arrowPosition: 7,
        theme: 'blue'
    });
});
```

