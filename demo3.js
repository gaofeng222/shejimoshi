/**
 * Created by Administrator on 2017/8/25 0025.
 */


//一般的写法
var LoginAlert = function(text){
    this.content = text;
}
LoginAlert.prototype.show = function(){
    console.log("This is a alert "+this.content)
}

var userNmaeAlert = new LoginAlert("Hello world")
userNmaeAlert.show() //This is a alert Hello world


var passwordAlert = new LoginAlert("输入的密码不正确");
passwordAlert.show()

//简单工厂模式

var Basketball = function(){
    this.intro = "篮球盛行于美国";
}
Basketball.prototype = {
    getMember : function(){
        console.log("每个队伍需要5名队员")
    },
    getBallSize : function(){
        console.log("篮球很大")
    }
}

var Football = function(){
    this.intro = "足球在世界范围内都盛行";
}
Football.prototype = {
    getMember : function(){
        console.log("每个队伍需要11名队员")
    },
    getBallSize : function(){
        console.log("足球很大")
    }
}


var Tennis = function(){
    this.intro = "网球在欧洲都盛行";
}
Tennis.prototype = {
    getMember : function(){
        console.log("每个队伍需要1名队员")
    },
    getBallSize : function(){
        console.log("网球很小")
    }
}

var SportsFactory = function(name){
    switch(name){
        case 'NBA':
            return new Basketball();
        case "wordCup" :
            return new Football();
        case "FrenchOpen" :
            return new Tennis()
    }
}

var football = SportsFactory("wordCup");
console.log(football)
console.log(football.intro)



//工厂模式

function  createBook(name,time,type){
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function(){
        console.log(this.name)
    }
    return o;
}

var book1 = createBook("js book",2014)
var book2 = createBook("css book",2016)

book1.getName()
book2.getName()


function createPop(type,context){
    var o = new Object();
    o.content = context;
    o.show = function(){
        console.log("这是共同的内容")
    }
    if(type == "alert"){
        o.show()
        console.log("差异部分的操作")
    }
    if(type == "prompt"){
        o.show()
        console.log("差异部分的操作")
    }
    if(type == "confirm"){
        o.show()
        console.log("差异部分的操作")
    }
}


var userAlert = createPop("alert","用户名只能是16个")

