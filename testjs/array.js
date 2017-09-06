(function() {
    console.log("end")
})();
0
// 去重
var result = [];
[2, 3, 2, 7, 9].forEach(function(item) {
    if (result.indexOf(item) < 0) {
        result.push(item)
    }
});
// 数组最大值
function maxData(arr) {
    var max = arr[0] || 0;
    for (var i = 0; i < arr.length; i++) {
        max < arr[i] ? max = arr[i] : ""
    }
    return max;
}
// 
console.log(result)