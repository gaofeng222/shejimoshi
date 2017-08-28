/**
 * Created by Administrator on 2017/8/28 0028.
 */

//外观模式,为一组复杂的子系统接口提供一个更高级的统一接口，通过这个借口使得对子系统借口的
//访问更容易。


//添加一个点击事件
document.onclick = function(e){
    e.preventDefault();
    var box = document.getElementById("myInput")
    if(e.target == box ){
        hidePageAlert(box)
    }
}
function hidePageAlert(target){
    target.style.display = "none";
    console.log("我被隐藏了")
}

//’onclick‘是DMO0级事件，容易被覆盖
//因此得使用DOM2级事件，addEventListener来实现
//而老版本的IE(<9)不支持这个，得使用attachEvent;


//绑定事件的外观模式
function addEvent(dom,type,fn){
    if( dom.addEventListener ){
        dom.addEventListener(type,fn,false)
    }else if(dom.attachEvent){
        dom.attachEvent('on' + type,fn)
    }else{
        dom['on' + type] = fn;
    }
}

//获取事件对象
var getEvent = function(e){
    //标准浏览器下返回event,IE下window.event
    return event || window.event;
}

//获取元素
 var target = function(event){
     var event = getEvent(event);
     //标准浏览器下返回event.target,IE下面event.srcElement
     return event.target || event.srcElement
 }


//阻止默认行为
var preventDefault = function(e){
    var event = getEvent(event);
    if(event.preventDefault){
        event.preventDefault()
    }else{
        event.returnValue = false;
    }
}

