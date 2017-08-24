/**
 * Created by Administrator on 2017/8/24 0024.
 */
//灵活的语言
/*
    最基本的写法
 */

function checkName(){
    //........
}

function checkEmail(){
    //.........
}
function checkPassword(){
    //.........
}

//用对象收编变量
var CheckObject = {
    checkName : function(){},
    checkEmail : function(){},
    checkPassword: function(){}
}

//对象的另一种形式
var CheckObject = function(){}

CheckObject.checkName=function(){};
CheckObject.checkEmail=function(){};
CheckObject.checkPassword=function(){};

//真假对象

var CheckObject = function(){
    return {
        checkName : function(){
                //.......
        },
        checkEmail : function(){
                //.......
        },
        checkPassword : function(){
               //.......
        }
    }
}

var a = CheckObject();
a.checkEmail()


//类也可以
var CheckObject = function(){
    this.checkName = function(){
        console.log("This is a name")
    };
    this.checkEmail = function(){
        console.log("This is a email")
    };
    this.checkPassword = function(){
        console.log("This is a password")
    }
}

var a = new CheckObject();

a.checkEmail();
a.checkName();
a.checkPassword();

//一个检测类
var CheckObject = function(){};
/*CheckObject.prototype.checkEmail = function(){}
CheckObject.prototype.checkName = function(){}
CheckObject.prototype.checkPassword = function(){}*/

CheckObject.prototype = {
    checkEmail : function(){},
    checkName : function(){},
    checkPassword : function(){}
}


var Obj = {
    checkName : function(){
        console.log("This is checking name")
        return this;
    },
    checkEmail : function(){
        console.log("This is checking Email");
        return this;
    },
    checkPassword : function(){
        console.log("This is checking password");
        return this;
    }
}

Obj.checkName().checkEmail().checkPassword()


//函数的祖先;

/*Function.prototype.checkEmail = function(){
    console.log("aaaaaaaa")
}

var f = function(){};
f.checkEmail()*/

/*
Function.prototype.addMethod = function(name,fn){
    this[name] = fn;
}

var methods = function(){}
methods.addMethod("checkName",function(){
    console.log("This is checking name")
})
methods.addMethod("checkEmail",function(){
    console.log("This is checking email")
})
methods.addMethod("checkPassword",function(){
    console.log("This is checking password")
})

console.log("-------------------------------")
methods.checkEmail()
methods.checkName()
methods.checkPassword()
*/

Function.prototype.addMethod = function(name,fn){
    this.prototype[name] = fn;
    return this;
}

var Methods = function(){};
Methods.addMethod('checkName',function(){
    console.log("This is a name")
}).addMethod('checkEmail',function(){
    console.log("This is a email")
    return this;
})

var m = new Methods();
m.checkEmail().checkName();






