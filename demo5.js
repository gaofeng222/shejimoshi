/**
 * Created by Administrator on 2017/8/26 0026.
 */

//抽象类
var Car = function(){};
Car.prototype ={
    getPrice : function(){
        return new Error("抽象方法不能被调用")
    },
    getSpeed : function(){
        return new Error("抽象方法不能被调用")
    }
}

//抽象工厂模式

var VehicleFactory = function(subType,superType){
    if(typeof VehicleFactory[superType] === 'function'){
        function F(){};
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    }else{
        throw new Error("不存在该抽象类")
    }
}

VehicleFactory.Car = function(){
    this.type = 'Car';
}

VehicleFactory.Car.prototype = {
    getPrice : function(){
        return new Error("抽象方法不能被调用")
    },
    getSpeed : function(){
        return new Error("抽象方法不能被调用")
    }
}

VehicleFactory.Bus = function(){
    this.type = 'Bus';
}

VehicleFactory.Bus.prototype = {
    getPrice : function(){
        return new Error("抽象方法不能被调用")
    },
    getSpeed : function(){
        return new Error("抽象方法不能被调用")
    }
}

VehicleFactory.Truck = function(){
    this.type = 'Truck';
}

VehicleFactory.Car.prototype = {
    getPrice : function(){
        return new Error("抽象方法不能被调用")
    },
    getSpeed : function(){
        return new Error("抽象方法不能被调用")
    }
}

var BMW  = function(price,speed){
    this.price = price;
    this.speed = speed;
}

VehicleFactory(BMW,'Car')
BMW.prototype.getPrice = function(){
    return this.price;
}

var baoma = new BMW(10000,2000);
console.log(baoma.price + " $");
console.log(baoma.speed)

