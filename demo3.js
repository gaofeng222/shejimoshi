/**
 * Created by Administrator on 2017/8/25 0025.
 */


//简单工厂模式
var LoginAlert = function(text){
    this.content = text;
}
LoginAlert.prototype.show = function(){
    console.log("This is a alert "+this.content)
}

var userNmaeAlert = new LoginAlert("Hello world")
userNmaeAlert.show()
























