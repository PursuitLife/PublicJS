// 原生js:
// 获取指定元素的 css 样式集合
var el = document.getElementById("el");

function getStyle(el) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, null);
    } else {
        return el.currentStyle;
    }
}
getStyle(el);
alert(el.offsetTop) // 获取元素距离 顶部距离