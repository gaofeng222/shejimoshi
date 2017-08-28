/**
 * Created by Administrator on 2017/8/27 0027.
 */
//单例模式--有称单体模式,是只允许实例化一次的对象,有时我们用一个
//对象来规划一个命名空间，井井有条的管理对象上的属性和方法



//以下方法申明的全局变量过多,是不推荐的
function g(id){
    return document.getElementById(id)
}

function css(id,key,value){
    g(id).style[key] = value;
}

function attr(id,key,value){
    g(id)[key] = value;
}

function html(id,value){
    g(id).innerHTML = value;
}


//使用命名空间

//单例模式管理静态变量

var A = {
    get : function(id){
        return document.getElementById(id)
    },
    css : function(id,key,value){
        this.g(id).style[key] = value;
    }
}

var Conf = (function(){
    var conf = {
        MAX_NUM : 100,
        MIN_NUM : 1,
        COUNT : 1000
    }
    return {
        get : function(name){
            return conf[name] ? conf[name] : null
        }
    }
})()

var count = Conf.get("COUNT");
console.log(count)

//惰性单例

var LazySingle = (function(){
    var _instance = null;
    function Single(){
        return {
            publicMethod : function(){
                console.log("This is a new testing")
            },
            publicProperty :'1.0'
        }
    }
    return function(){
        if(!_instance){
            _instance = Single()
        }
        return _instance;
    }
})()
LazySingle().publicMethod();

