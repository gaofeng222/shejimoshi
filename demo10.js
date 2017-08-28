/**
 * Created by Administrator on 2017/8/28 0028.
 */


//适配器模式
//将一个类的借口(方法与属性)转化成另外一个接口,以满足用户需求,使类之间接口的不兼容问题通过适配器得以解决

//Jquery的适配

window.A = A = jQuery;


//适配异类框架

var A = A || {};
A.g = function(id){
    return document.getElementById(id);
}

A,on = function(id,type,fn){
    var dom = typeof id === 'string' ? this.g(id) :id
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false)
    }else if( dom.attachEvent ){
        dom.attacheEvent('on' + type,fn)
    }else{
        dom['on'+type] = fn;
    }
}

A.on(window,"load",function(){
    a.on('myButton','click',function(){
        //do something
    })
})

A.g = function(id){
    return $(id).get(0)
}

A.on = function(id,type,fn){
    var dom = typeof id === 'string' ?$("#"+id) :$(id);
    dom.on(type,fn)
}


//参数适配器

/*
 * obj,name : name
 *obj.title : title
 * obj.age : age
 * obj.size : size
 * obj.prize : prize
 *
 */

function doSomeThing(obj){}

function doSomeThing(obj){
    var _adapter = {
        name : "gaofeng",
        title : "设计模式",
        age : 100,
        color :'pink',
        size : "100",
        prize : 50
    }
    for(var i in _adapter){
        _adapter[i] = obj[i] || _adapter[i]
    }
}

//数据适配

var arr = ['Javascript','book','前端编程语言'];
var obj = {
    name : '',
    type : '',
    title: '',
    time : ''
}

function arrrToObjectAdapter(arr){
    return {
        name : arr[0],
        type : arr[1],
        title : arr[2],
        data : arr[3]
    }
}

var adapterData = arrToObjectAdapter(arr);
console.log( adapterData )
