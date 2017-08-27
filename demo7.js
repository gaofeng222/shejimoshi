/**
 * Created by Administrator on 2017/8/27 0027.
 */

//原型模式 用原型实例指向创建对象的类,使用于创建新的对象的共享原型对象的属性及方法

var LoopImages = function(imgArr,container){
    this.imagesArray = imgArr;
    this.container = container;
    this.createImage = function(){

    }
    this.changeImage = function(){

    }
}

var SlideLoopImg = function(imgArr,container){
    LoopImages.call(this,imgArr,container);
    this.changeImage = function(){
        console.log("SlideLoopImg changeImage function")
    }
}

var FadeLoopImg = function(imgArr,container,arrow){
    LoopImages.call(this,imgArr,container);
    this.arrow = arrow;
    this.changeImage = function(){
        console.log("FadeLoopImg changeImage function")
    }
}

var fadeImg = new FadeLoopImg(['1.jpg','2.jpg','3.jpg'],'slide',['left.jpg','right.jpg'])
fadeImg.changeImage()

//优化一

var LoopImages = function(imgArr,container){
    this.imagesArray = imgArr;
    this.container = container;
}

LoopImages.prototype = {
    createImage : function(){
        console.log("LoopingImg is created")
    },
    changeImage : function(){
        console.log("LoopingImg is changed")
    }
}

var SlideLoopImg = function(imgArr,container){
    LoopImages.call(this,imgArr,container);

}

SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function(){
    console.log("SlideLoopImg changeImage function")
}

var FadeLoopImg = function(imgArr,container,arrow){
    LoopImages.call(this,imgArr,container);
    this.arrow = arrow;
}

FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){
    console.log("FadeLoopImg changeImage function")
}

var fadeImg = new FadeLoopImg(['1.jpg','2.jpg','3.jpg'],'slide',['left.jpg','right.jpg'])
fadeImg.changeImage()


//复制多个对象模板的属性
function prototypeExtend(){
    var F = function(){},args = arguments, i= 0,len = args.length;
    for(;i < len ; i++){
        for(var j in args[i]){
            F.prototype[j] = args[i][j]
        }
    }
    return new F()
}

var penguin = prototypeExtend(
    { speed : 20,
      swim : function(){
        console.log("游泳速度为: "+this.speed)
        }
    },
    { run : function(speed){
        console.log("奔跑速度为: "+speed)
        }
    },
    {
        jump: function () {
            console.log("跳跃动作")
        }
    })

penguin.swim();
penguin.run(10);
penguin.jump()
























