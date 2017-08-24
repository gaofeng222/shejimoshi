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





























































