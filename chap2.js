/**
 * Created by Administrator on 2017/8/24 0024.
 */

//面向对象编程

//创建一个类
var Book = function(id,bookname,price){
    this.id = id;
    this.bookname = bookname;
    this.price = price;
}

/*Book.prototype.display = function(){

}*/

Book.prototype = {
    display : function(){

    }
}

var book = new Book(10,"Javascript 设计模式",50);
console.log(book.bookname)

var Book1 = function(id,name,price){
    var num = 1;
    function checkId(){};
    this.getName = function(){};
    this.getPrice = function(){};
    this.setName = function(){};
    this.setPrice = function(){};
    this.id = id;
    this.copy = function(){}
    this.setName(name);
    this.setPrice(price);
}
Book.isChinese = true;
Book.resetTime = function(){
    console.log('new Time')
}
Book1.prototype ={
    isJSBook : false,
    display : function(){}
}

var b = new Book1(11,"Javascript设计模式",40);
console.log(b.num)
console.log(b.isJSBook)
console.log(b.id)
console.log(b.isChinese)






















































