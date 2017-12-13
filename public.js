/**
 * Created by Administrator on 2017/5/17 0017.
 */
/**
 * Created by Administrator on 2017/4/23 0023.
 */

/*公用方法*/
var pub= {
    moveStop: function () {//客户端页面停止滚动
        window.ontouchmove = function (e) {
            e.preventDefault && e.preventDefault();
            e.returnValue = false;
            e.stopPropagation && e.stopPropagation();
            return false;
        }
    },
    moveStart: function () {//页面可以滚动
        window.ontouchmove = "";
    },
    Id:function (id) {
        return document.getElementById(id);
    },
    clickEle: function (id, clickFn) {//为DOM节点绑定点击事件
        if (arguments.length == 2) {
            pub.Id(id).addEventListener("click", clickFn);
        }
    },
    eventBind: function (obj) {
        if (obj.ele.addEventListener) {
            obj.ele.addEventListener(obj.type, obj.calback, false);
        }
        else if (window.attachEvent) {
            obj.ele.attachEvent('on' + obj.type, obj.calback);
        }
        else {
            obj.ele['on' + obj.type] = obj.calback;
        }
    },
    strLength: function (str) {//计算字符长度（汉字和英文字符）
        var num = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                num += 2;//按照预期计数增加2
            else
                num++;
        }
        return num;
    },
    Max: function (data) { // 数组最大值
        if (data instanceof Array) {
            var max = data[0] || 0;
            for (var i = 1; i < data.length; i++) {
                max < data[i] && (max = data[i]);
            }
            return max;
        } else {
            alert("需要传入数组")
        }
    },
    AutoClick: function () {
        /* js 页面加载时自动触发点击事件
         * el: 绑定的 DOM 节点
         * type:绑定节点的点击方法 click tap ==
         * callback  : 自动点击的回调函数
         * 传参顺序 function (el, type,callback)
         * */
        var isTrue = 0;//可调用自动触发
        var el=pub.Id(arguments[0]);
        var type=arguments[1]||"click";
        (arguments.length == 3) ? ("") : (alert("需要传入DOM节点ID值"));
        try {
            if (el.dispatchEvent) {
                var evt = document.createEvent('Event');
                evt.initEvent(type, true, true);
                el.dispatchEvent(evt);
                isTrue = 1;
            } else if (el.fireEvent) {
                el.fireEvent('on' + type);
                isTrue = 1;
            }
        } catch (e) {
        };
        (isTrue == 1)? pub.handle(arguments[2]) : "";
    },
    handle: function (fun) { //自动触发点击事件回调函数
        fun();
    },
    TimeClick:function (id,startTime,endTime) { // 倒计时
        //获取当前时间
        var date =startTime;//|| new Date();
        var now = date.getTime();
        //设置截止时间
        var endDate = endTime;//||new Date("2017-05-17 23:23:23");
        var end = endDate.getTime();
        //时间差
        var leftTime = end-now;
        //定义变量 d,h,m,s保存倒计时的时间
        var d,h,m,s;
        if (leftTime>=0) {
            d = Math.floor(leftTime/1000/60/60/24);
            h = Math.floor(leftTime/1000/60/60%24);
            m = Math.floor(leftTime/1000/60%60);
            s = Math.floor(leftTime/1000%60);
        }
        console.log(1);
        pub.Id(id).innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
        setInterval(function(){pub.TimeClick()},1000);
    },

}// pub end

// 自动触发点击事件

function fn() {
    alert("666");
}
function fn2() {
    alert("777");
}
 pub.AutoClick("app","click",fn2);
var end=new Date("2017-05-22 23:23:23");
var start=new Date();

//pub.AutoClick("time","click","timeText",start,end);
//pub.eventBind(obj);
//pub.clickEle("app",fn);
/*localstorage 缓存
 1、js中需要保存的数据是以字符串形式保持，所以需要调用方法保持数据和解析数据
 2、保存数据：eg:
 var data={
 "type":"3",
 "user":{"user1":"zhangsan","user2":"lisi"},
 "sex":{"1":"男","2":"女","0":"保密"},
 }
 转换需要保存的格式：JSON.stringify(data);
 data=JSON.stringify(data);
 localStorage.data=data;
 3、解析缓存中的数据：JSON.parse(getdata);
 var getdata=localStorage.data;
 var datas=JSON.parse(getdata);
 console.log(datas);

 * */

/*
 由于跨域存在漏洞，所以一般来说正常的跨域请求方式是请求不到的
 * 跨越请求js异步请求时需要后台设置特殊请求头，以允许前端js调用后台数据
 *
 * */
// $.ajax({
//     url:url,
//     async:true,//默认为true，异步; false同步
//     dataType:"jsonp",
//     type:"get",//常用GET POST  ，get请求速度快，但是不安全，稳定性不好，POST请求方式安全
//     data:"datas",
//     jsonp:"callback",
//     jsonpCallback:"jsonpcallback",
//     success:function(data){
//
//         hotshowjson(data);
//
//     },error:function(XMLHttpRequest, textStatus, errorThrown){
//
//
//     }
// });

//三目运算
/*   var year=prompt("输入年份");
 console.log((year%4==0&&year%100!=0)||(year%400==0)?"润年":"平年");
 var first=prompt("输入数字");
 var title="";
 (first<2&&first>1)?title="小于2了":
 first>5?title="大于5了":
 title="三目运算必须有默认值"
 console.log(title);
 */

// 数组
//找出数组中的最大值
/*
 function getMax(arr) {
 var max=arr[0];
 for(var i=1;i<arr.length;i++){
 arr[i]>max&&(max=arr[i]);
 }
 return max;
 }
 console.log(getMax([3,5,1,7]));
 */
Math.max(3,4); // 默认不能直接传数组作为参数   Math.max(arr)
Math.max.apply(Math,arr);
Math.min.apply(Math,arr);  //   apply 方法支持传数组
// 两者区别在于能不能直接将数组arr作为参数传值
//默认将数组转为string ( 默认只能以逗号分隔每个元素 )
/*
 var arr=[3,5,1,8];
 var str=arr.toString();
 */

//自定义元素间的连接符 || 字符数组的无缝拼接 || join方法
/*
 var chars=["H","e","l","l","o"];
 console.log( chars.join("-") );
 */

//连接数组和获取子数组：*不修改原数组对象，返回新数组对象
var arr=[3,5,1,0,8];
/*var newArr=arr.concat(99,66);
 var subArr=arr.slice(3,4);
 console.log(newArr+";"+subArr+";"+arr);
 */

//splice：删除，插入，替换任意位置的任意个元素  直接修改原数组
/*删除：splice(starti,n);
 插入：splice(starti,0,新值1,新值2,...)
 替换：splice(starti,n,新值1,新值2,...)
 */
/*
 var newarr=arr.splice(0,1);  // [3] 原数组中的3被删除
 var add=arr.splice(1,0,44,55);
 console.log(arr);
 */
//  reverse(): 颠倒数组中所有元素的位置  直接修改原数组
/*
 arr.reverse();
 console.log(arr);
 */
// split()方法
var html=
    '<a href="#">smith</a><br><a href="#">eric</a><br><a href="#">jerry</a>';
var names=html.split('</a><br><a href="#">');
// ["<a href="#">smith", "eric", "jerry</a>"]


/*冒泡排序*/

function bubbleSort(arr){
    //得到的是全局变量arr中的数组地址
    /*第r轮: r从1开始，到<length结束*/
    for(var r=1;r<arr.length;r++){
        //从0开始遍历数组，到<length-r结束，每次+1
        for(var i=0;i<arr.length-r;i++){
            //    如果当前元素>下一个元素
            if(arr[i]>arr[i+1]){
                // 交换当前元素和下一个元素的位置
                arr[i]+=arr[i+1];
                arr[i+1]=arr[i]-arr[i+1];
                arr[i]-=arr[i+1];
            }
        }
    }
}
var arr=[3,7,4,5,8,9,6];
bubbleSort(arr);//将数组的地址复制给参数变量arr
console.log("冒泡排序"+arr);

/* 数组去重并统计重复个数
 去掉数组中重复的元素,并统计原数组中每个值出现的次数*/

/*var arr=[2,3,4,3,6,4,5,6];
 var hash=[];
 //从0开始，到arr.length-1结束,遍历arr中每个值
 for(var i=0;i<arr.length;i++){
 //	如果hash数组中，不包含当前元素对应的key
 if(hash[arr[i]]===undefined){
 //      则将当前元素值作为key，加入hash中，值默认为1
 hash[arr[i]]=1;
 }else{//  否则
 //      将hash中对应key中的值+1
 hash[arr[i]]++;
 }
 }
 console.log(hash);
 arr=[];//清空arr
 //依次将hash中每个key，追加入arr中
 //for(arr[arr.length] in hash);//执行的什么操作
 for(var key in hash){
 arr[arr.length]=(key-=0);  // key-=0 为转换为数字类型
 }
 console.log(arr); //[2,3,4,5,6]
 */
//栈：一端封闭，另一端进出的数组
//从数组末尾出入栈：其他元素的下标不受影响
//末尾 入栈: arr.push(新值)
//末尾 出栈：var last=arr.pop()
/*   arr=[2,3];
 arr.push(4);  //[2,3,4] 进栈
 arr.pop();  //[2,3]   出栈
 */
/*
 从数组开头出入栈：每出入栈一次，其余元素下标都要瞬移
 开头 入栈：arr.unshift(新值);
 开头 出栈：var first=arr.shift();
 */

// 队列：从一端进入，从另一端出的数组


// 重载 - 相同的函数名（方法），根据调用时传入的参数个数动态执行对应得操作
//js的语法不支持重载的。可使用arguments实现重载效果。
//  arguments - 类
// 数组对象，不是Array类型
/*
 function ar() {
 console.log(arguments.length);
 }
 ar("a","a2","a3");  // 3
 */

//匿名函数自调：定义时没有变量引用的函数--定义完立刻执行，执行完立刻释放
(function (data) {
    console.log(data);
})("data1");
//回调：将函数作为对象传递给其他函数，

// 闭包 --  子作用域调用父作用域的变量，避免变量不被污染及重用变量
function outer(data) {
    console.log(data);
    return function (m) {
        return m*data;
    }
}
var m=10;
console.log(m);  // 10
var getOuter=outer(11);  // 得到返回的内层函数
console.log(getOuter(2)); // 22
var getOuter=outer(20);  // 得到返回的内层函数
console.log(getOuter(5)); // 100

/*闭包 鄙视题
 function outer(){
 for(var i=0,arr=[];i<3;i++){
 arr[i]=function(){return i};//i是受保护的变量
 }
 //循环结束后，i=3
 return arr;
 }
 var getFuns=outer();*/
//外层函数调用了1次，只有1个受保护的变量i=3
/*getFuns: [
 function(){return i},
 function(){return i},
 function(){return i}
 ]*/
//console.log(getFuns[0]()); //3
//console.log(getFuns[1]()); //3
//console.log(getFuns[2]()); //3

function  remove(key: string) {
        localStorage.removeItem(key);
    }

 function   clear() {
        sessionStorage.clear();
    }
getStyle(ele,attr){  
     if(window.getComputedStyle){  
        return window.getComputedStyle(ele,false)[attr];  
     }else{  
        return ele.currentStyle[attr];  
     }  
   },























