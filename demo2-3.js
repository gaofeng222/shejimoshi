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
    this.subClass = false;
}
//继承父类
SubClass.prototype = new SuperClass()
//为子类添加共有方法
SubClass.prototype.getSubValue = function(){
    return this.subValue;
}

var instance = new SubClass();
console.log(instance.getSuperValue())









