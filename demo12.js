/**
 * Created by Administrator on 2017/8/28 0028.
 */

//装饰着模式

//在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的
//更加复杂的需求

//情况一
var telInput = document.getElementById("tel_input");
var telWarnText = document.getElementById("tel_wan_text");

input.onclick = function(){
    telWarnText.style.display = "inline-block"
}

//情况二
var telInput = document.getElementById("tel_input");
var telWarnText = document.getElementById("tel_wan_text");
var telDemoText = document.getElementById("tel_demo_text")
input.onclick = function(){
    telWarnText.style.display = "inline-block"
    telDemoText.style.display = "none"
}

//装饰者
var decorator = function(input,fn){
    var input = document.getElementById(input)
    if(typeof input.onclick === "function"){
        var oldClicFn = input.onclick;
        input.onclick = function(){
            oldClikcFn();
            fn()
        }
    }else{
        input.onlick = fn;
    }
}





















