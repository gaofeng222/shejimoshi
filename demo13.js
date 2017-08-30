/**
 * Created by Administrator on 2017/8/30 0030.
 */

//桥接模式-在系统沿着多个维度变化时，又不增加其代码的复杂度并已达到解耦

//普通的繁琐模式
var span = document.getElementById("span");
spans[0].onmouseover = function(){
    this.style.color  = 'red';
    this.style.color  = '#ccc'
}
spans[0].onmouseover = function(){
    this.getElementsByTagName('strong')[0].style.color = 'red';
    this.getElementsByTagName('strong')[0].style.background = '#ddd';
}
spans[0].onmouseout = function(){
    this.getElementsByTagName('strong')[0].style.color = '#333';
    this.getElementsByTagName('strong')[0].style.background = '#f5f5f5';
}

//抽象出共同部分

function changeColor(dom,color,bg){
    dom.style.color = color;
    dom.style.background = bg;
}


//事件与业务逻辑之间的桥梁
//剩下的要做的就是对元素绑定事件了，但是有一点你要明白,仅仅知道元素事件绑定的对象提取的设置样式的方法还是不够的，还需要一个方法将他们链接起来
//那么这个方法就是桥接方法，这个模式就是桥接模式。



var spans = document.getElementsByTagName('span');
spans[0].onmouseover = function(){
    changeColor(this,'red','#ddd')
}

//
spans[1].onmouseover = function(){
    changeColor(this.getElementsByTagName('strong')[0],'red','#ddd');

}spans[1].onmouseout = function(){
    changeColor(this.getElementsByTagName('strong')[0],'#333','#f5f5f5');

}


//多元化对象
/*
 * 多维变量类
 * 运动单元
 *
 */

function Speed(x,y){
    this.x = x;
    this.y = y;

}

Speed.prototype.run = function(){
    console.log("运动起来");
}

function Color(cl){
    this.color = cl;
}

Color.prototype.draw = function(){
    console.log("绘制色彩")
}

function Shape(sp){
    this.shape = sp;
}

Shape.prototype.change = function(){
    console.log("改变形状")
}

function Speek(wd){
    this.word = wd;
}

Speek.prototype.say = function(){
    console.log("书写字体")
}

function Ball(x,y,c){
    this.speed = new Speed(x,y);
    this.color = new Color(c);
}

Ball.prototype.init = function(){
    this.speed.run();
    this.color.draw()
}

function People(x,y,f){
    this.speed = new Speed(x,y);
    this.font = new Speek(f);
}

People.prototype.init = function(){
    this.speed.run();
    this.font.say();
}


function Spirite(x,y,c,s){
    this.speed = new Speed(x,y);
    this.color = new Color(c);
    this.shape = new Shape(s)
}


Spirite.prototype.init = function(){
    this.speed.run();
    this.color.draw();
    this.shape.change()
}

var p = new People(10,12,16);
p.init()
