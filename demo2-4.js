/**
 * Created by Administrator on 2017/8/25 0025.
 */


//单继承--属性复制
var extend = function(target,source){
    for(var property in source){
        target[property] = source[property]
    }
    return target;
}

var book = {
    name　: 'Javascript 设计模式',
    alike : ['css','html','js']
}

var anotherBook = {
    color : 'blue'
}

extend(anotherBook,book)

console.log(anotherBook.name)
console.log(anotherBook.alike)
console.log("---------------------")
anotherBook.alike.push("ajax");
anotherBook.name = "设计模式"

console.log(anotherBook.name)
console.log(anotherBook.alike)
console.log("---------------------")
console.log(book.name)
console.log(book.alike)



//多对象属性复制

var mix = function(){
    var i = 1,
        len =arguments.length,
        target = arguments[0],
        arg;
    for(var i=1;i < len ;i++){
        arg = arguments[i];
        for(var property in arg){
            target[property] = arg[property]
        }
    }
    return target;
}

var book1 = {
    name:"baidu"
}
var book2 = {
    time:1992
}
var book3 = {
    title:"This is a new book"
}

var all = mix(book1,book2,book3)
console.log(all)

Object.prototype.mix = function(){
    var i= 0,len = arguments.length,arg;
    for(var i =0;i<len;i++){
        arg = arguments[i];
        for(var property in arg){
            if( typeof this[property] != "function") {
                this[property] = arg[property] //教程此处的错误修改
            }
        }

    }
    return this;
}
var test12  =  book3.mix(book1,book2)
console.log(test12)

//多种调用方式

function add(){
    var arg =arguments,len = arg.length;
    switch(len){
        case 0:
            return 10;
        case 1:
            return 10 + arg[0];
        case 2:
            return arg[0] + arg[1];
    }
}
console.log(add())
console.log(add(5))
console.log(add(6,7))


//更加简便的方式
function Add(){
    function zero(){
        return 10
    }
    function one(num){
        return 10 + num;
    }
    function two(num1,num2){
        return num1 + num2;
    }
    this.add = function(){
        var arg = arguments,len = arg.length;
        switch(len){
            case 0 :
                return zero();
            case 1:
                return one(arg[0]);
            case 2:
                return two(arg[0] , arg[1])
        }
    }
}
console.log("--------------------------")
var AA = new Add();
console.log(AA.add())
console.log(AA.add(5))
console.log(AA.add(6,7))





































