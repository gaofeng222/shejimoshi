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





















