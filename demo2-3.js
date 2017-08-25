/**
 * Created by Administrator on 2017/8/25 0025.
 */

//子类的原型对象--类式继承
function SuperClass(){
    this.superValue = true;
}

SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}

function SubClass(){
    this.subValue = false;
}
//继承父类
SubClass.prototype = new SuperClass()
//为子类添加共有方法
SubClass.prototype.getSubValue = function(){
    return this.subValue;
}

var instance = new SubClass();
console.log(instance.getSuperValue())
console.log(instance.getSubValue())

console.log( instance instanceof SuperClass  )
console.log( instance instanceof SubClass  )
console.log( SubClass instanceof SuperClass )
console.log( SubClass.prototype instanceof SuperClass )
console.log( instance instanceof Object)


//类式继承的缺点
//1.污染了其他实例的属性
//2.无法传递参数

function SuperClass1(){
    this.books = [ 'Javascript','html','css' ];
}
function SubClass(){}
SubClass.prototype = new SuperClass1();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance1.books)

instance1.books.push("shejimoshi");
console.log(instance2.books)
console.log("----------------")
console.log(instance1 == instance2 )

//构造函数继承

function SuperClass2(id){
    this.books= [ 'Javascript','html','css' ];
    this.id = id;
}
SuperClass2.prototype.showBooks = function(){
    console.log(this.books)
}

function SubClass2(id){
    SuperClass2.call(this,id)
}

var instance3 = new SubClass2(20)
var instance4 = new SubClass2(10)

instance3.books.push("设计模式");
console.log(instance3.books)
console.log(instance4.books)

//组合式继承
//在子类构造函数中执行父类构造函数
//在子类原型上实例化父类

function SuperClasses(name){
    this.name = name;
    this.books = ["html","css","javascript"];
}

SuperClasses.prototype.getName = function(){
    console.log(this.name);
}

function SubClasses(name,time){
    SuperClasses.call(this,name);
    this.time = time;
}

SubClasses.prototype = new SuperClasses();
SubClasses.prototype.getTime = function(){
    console.log(this.time)
}


var instancees = new SubClasses("JSbook",2000)
instancees.books.push("设计模式2222")
console.log(instancees.books)

instancees.getName();
instancees.getTime()


var instancees2 = new SubClasses("css book",2004);
console.log(instancees2.books)
instancees2.getName();
instancees2.getTime()


//原型继承模式

function inheritObject(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var book = {
    name : 'js book',
    alikeBook : ['css book','js book']
}

var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push("as book");

console.log(newBook.name)
console.log(newBook.alikeBook)
console.log(otherBook.name)
console.log(otherBook.alikeBook)
console.log(book.name)
console.log(book.alikeBook)



//寄生式继承

var book2 = {
    name : "js book",
    alikeBook : ["css book","html book"]
}

function createBook(obj){
    var o = new inheritObject(obj)
    o.getName = function(){
        console.log(this.name); //教程这里有问题
    }
    return o;
}

var test = createBook(book2);
test.name = "php book222";
console.log(test.name)
test.getName()


/*
    寄生组合式继承
    传递参数 subClass 子类
    传递参数 superClass 父类
 */

function inheritPrototype(subClass,superClass) {
    var p = inheritObject(superClass.prototype)
    p.constructor = subClass;
    subClass.prototype = p;
}

function SuperClasses1(name){
    this.name = name;
    this.colors =["red","blue","red"];
}

SuperClasses1.prototype.getName = function(){
    console.log(this.name);
}
function SubClasses1(name,time){
    SuperClasses1.call(this,name);
    this.time = time;
}

inheritPrototype(SubClasses1,SuperClasses1);
SubClasses1.prototype.getTime = function(){
    console.log(this.time);
}
var test2 = new SubClasses1("linux book",2016);
var test3 = new SubClasses1("Mongo book",2012);

test2.colors.push("yellow")

console.log(test2.colors)
console.log(test3.colors)
test2.getName()
test2.getTime()
test3.getName()








