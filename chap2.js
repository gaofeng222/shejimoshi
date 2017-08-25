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

//闭包的实现
var Book3 = (function(){
    var bookNum = 0;
    function checkBook(name){};

    return function(newId,newName,newPrice){
        var name,price;
        function checkID(id){};
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(){};
        this.setPrice = function(){}

        this.id = newId;
        this.copy = function(){};
        bookNum++;
        if(bookNum > 100){
            throw new Error("我们近出版100本书");
        }
        this.setName(name);
        this.setPrice(price)
    }
})()

Book3.prototype = {
    isJSBook : false,
    display : function(){}
}

//在闭包外部添加原型属性和方法看上去想似脱离了闭包这个类,所以有时在闭包内部实现一个完整的类,然后再将其返回

var Book = (function(){
    var booknum = 0;
    function checkBook(name){};
    function _book(newId,newName,newPrice){
        var name,price;
        function checkID(id){};
        this.getName = function(){};
        this.getPrice = function(){};
        this.setPrice = function(){};
        this.setName = function(){}
        this.id = newId;
        this.copy = function(){};
        booknum++;
        if(booknum > 100){
            throw new Error("我们仅出版100本书");
            this.setName(name);
            this.setPrice(price);
        }
    }
    _book.prototype = {
        isJSBook : false,
        display : function(){}
    }
    return _book;
})()
















































