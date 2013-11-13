# 历史记录

---

## 1.2.1

`tag:improved` 升级 tip 依赖的默认样式 alice/poptip 到 [1.2.0](http://aliceui.org/poptip/history.html)。

## 1.2.0

`tag:changed` #8 去掉 tip 模块，用 atip 替换了 tip 模块。

`tag:changed` 现在可以指定 align 参数用来自定义位置，此时 arrowPosition 失效。

`tag:improved` 升级 popup 到 1.1.5


## 1.1.4

`tag:improved` 升级 popup 到 1.1.2

`tag:improved` 升级 atip 依赖的默认样式 alice/poptip 到 1.1.1 ，相应修改了默认模板。


## 1.1.3

`tag:fixed` 由于之前 build 出来的代码包含依赖两个不同版本的 position, 重新 build

`tag:improved` 升级 popup 到 1.1.1

`tag:improved` 添加 styleBox, 解决样式冲突问题。


## 1.1.2

`tag:improved` 依赖升级到 [arale.popup@1.1.0](http://aralejs.org/popup/history.html)。

`tag:fixed` [pull#5](https://github.com/aralejs/tip/pull/6) 修复当有多个trigger时，定位总是指向第一个trigger的问题。（相关代码已经在popup中实现了）


## 1.1.1

`tag:improved` 依赖升级到 [arale.popup@1.0.2](http://aralejs.org/popup/history.html)。

`tag:unresolved` 当有多个trigger时，定位总是指向第一个trigger。


## 1.1.0

`tag:improved` 依赖升级到 [arale.popup@1.0.1](http://aralejs.org/popup/history.html)。

`tag:improved` 添加了 `pointPos` 参数，Atip 也可以使用此参数进行位置调节。[#5](https://github.com/aralejs/tip/issues/5)

## 1.0.0

`tag:improved` 依赖升级到 [arale.popup@1.0.0](http://aralejs.org/popup/history.html)。

`tag:improved` Atip 依赖了 [alice.poptip](http://aliceui.org/poptip) ，Atip 组件无须再单独引用样式。


## 0.9.4

`tag:improved` 依赖升级到 [arale.popup@0.9.12](http://aralejs.org/popup/history.html)。


## 0.9.3

`tag:improved` 依赖升级到 [arale.popup@0.9.10](http://aralejs.org/popup/history.html)，从而支持简单动画效果，以及修复了一些 bug。


## 0.9.2

`tag:new` 将 alipay.atip 移到本组件中。
