/**
 * Created by Administrator on 2017/8/26 0026.
 */


//工厂方法模式---通过对产品类的抽象，使其创建业务员主要用于创建多累产品的实例

var Java = function(content){
    this.content = content;
    (function(content){
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = "green";
        document.getElementById("container").appendChild(div)
    })(content)
}

var Php = function(content){
    this.content = content;
    (function(content){
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = "red";
        document.getElementById("container").appendChild(div)
    })(content)
}

var Javascript = function(content){
    this.content = content;
    (function(content){
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = "pink";
        document.getElementById("container").appendChild(div)
    })(content)
}

//简单工厂模式

function JobFactory(type,content){
    switch(type){
        case 'java' :
            return new Java(content);
        case 'php' :
            return new Php(content);
        case 'javascript' :
            return new Javascript(content)
    }
}


//安全模式工厂方法

var Factory = function(type,content){
    if( this instanceof Factory ){
        var  s = new this[type](content)  //new加深了理解困难 这里返回的是实例的方法
        return s;

    }else{
        return new Factory(type,content)
    }
}

Factory.prototype = {
    Java : function(content){
        this.content = content;
        (function(content){
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = "green";
            document.getElementById("container").appendChild(div)
        })(content)
    },
    Javascript : function(content){
        this.content = content;
        (function(content){
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = "pink";
            document.getElementById("container").appendChild(div)
        })(content)
    },
    php : function(content){
        this.content = content;
        (function(content){
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = "red";
            document.getElementById("container").appendChild(div)
        })(content)
    },
    ui : function(content){
        this.content = content;
        (function(content){
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = "#ccc";
            document.getElementById("container").appendChild(div)
        })(content)
    }
}



































