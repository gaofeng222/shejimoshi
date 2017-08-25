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

















































