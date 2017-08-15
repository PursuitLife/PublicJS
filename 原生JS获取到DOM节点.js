< ul >
    <
    li cllass = ""
@click = "getDom($event)" > 1111 < /li>
    <!-- 注释 -->
    <
    li cllass = ""
@click = "getDom($event)" > 1111 < /li>
    <!-- 注释 -->
    <
    li cllass = ""
@click = "getDom($event)" > 1111 < /li> < /
ul >


    getDom(e) {
        var childNode = e.target
        this.del_Node(childNode)
    }
del_Node(elNode) {
    var parentList = elNode.parentNode.childNodes;
    for (var i = 0; i < parentList.length; i++) { // 去除空格或者注释
        if (parentList[i].nodeName == "#text" || parentList[i].nodeName == "#comment") {
            elNode.parentNode.removeChild(parentList[i])
        }
    }
    var nextSiblings, prevSiblings = "";
    var nextPageNo, prevPageNo
    if (elNode.nextElementSibling) {
        nextSiblings = elNode.nextElementSibling
    } else {
        nextSiblings = elNode.nextSibling
    }
    if (elNode.previousElementSibling) {
        prevSiblings = elNode.previousElementSibling
    } else {
        prevSiblings = elNode.previousSibling
    }

    return [nextSiblings, prevSiblings]

}