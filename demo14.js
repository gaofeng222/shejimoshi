/**
 * Created by Administrator on 2017/8/30 0030.
 */

//组合模式--整体是对部分的组合,这样就简化了复杂的整体，通过不同的部分组合又丰富了
//整体

var News = function(){
    this.children = [];
    this.element = null;
}

News.prototype = {
    init : function(){
        throw new Error("请重写你的方法")
    },
    add : function(){
        throw new Error("请重写你的方法")
    },
    getElement : function(){
        throw new Error("请重写你的方法")
    }
}

var Container = function(id,parent){
    News.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}

inheritPrototype(Container,News);
Container.prototype.init = function(){
    this.element = document.cteateElement('ul');
    this.element.id =this.id;
    this.element.className ='new-container';
}
Container.prototype.add = function(child){
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

Container.prototype.getElment = function(){
    return this.element;
}

Container.prototype.show = function(){
    this.parent.appendChild(this.element)
}

var Item = function(className){
    News.call(this);
    this.className = className || '';
    this.init();
}

inheritPrototype(Item,News);
Item.prototype.init = function(){
    this.element = document.cteateElement('li');
    this.element.id =this.id;
    this.element.className =this.className;
}
Item.prototype.add = function(child){
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

Item.prototype.getElment = function(){
    return this.element;
}

var NewsGroup = function(className){
    News.call(this);
    this.className = className || '';
    this.init();
}

inheritPrototype(Item,News);
NewsGroup.prototype.init = function(){
    this.element = document.cteateElement('div');
    this.element.className =this.className;
}
NewsGroup.prototype.add = function(child){
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

NewsGroup.prototype.getElment = function(){
    return this.element;
}


var ImageNews = function(url,href,classname){
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.className = className || '';
    this.init();
}

inheritPrototype(ImageNews,News);
ImageNews.prototype.init = function(){
    this.element = document.cteateElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img)
    this.element.className ='image-news' + this.className;
    this.element.href = this.href;
}
ImageNews.prototype.add = function(){}

ImageNews.prototype.getElment = function(){
    return this.element;
}


var IconNews = function(text,href,type){
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init()
}

inheritPrototype(IconNews,News);
IconNews.prototype.init = function(){
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon' + this.type;
}

IconNews.prototype.add = function(){};
IconNews.prototype.getElement = function(){
    return this.element;
}


var EasyNews = function(text,href){
    News.call(this);
    this.text = text || '';
    this.href = href || '';
    this.init()
}

inheritPrototype(EasyNews,News);
EasyNews.prototype.init = function(){
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function(){};
EasyNews.prototype.getElement = function(){
    return this.element;
}

var TypeNews = function(text,href,type,pos){
    News.call(this);
    this.text = text || '';
    this.href = href || '';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init()
}

inheritPrototype(TypeNews,News);
TypeNews.prototype.init = function(){
    this.element = document.createElement('a');
    if(this.pos === 'left'){
        this.element.innerHTML = '[' + this.type + ']' + this.text;
    }else{
        this.element.innerHTML = this.text + '[' + this.type +']';
    }
    this.element.href = href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function(){};
EasyNews.prototype.getElement = function(){
    return this.element;
}


//把新闻模块创建出来
var news = new Container('news',document.body);
news.add( new Item('normal').add( new IconNews('哈哈哈哈哈','#','video' ))).add(
    new Item('normal').add( new ItemNews('呵呵呵呵呵呵呵'),'#','live' )
).add(
    new Item('normal').add( new NewsGroup('has-img').add( new ImageNews('img/1.jpg','#','small').add(
        new EasyNews('吼吼吼吼吼吼','#').add( new EsyNews('啥啥啥啥啥'),'#' )
    ) ) )
).add( new Item('normal').add( new TypeNews('咯咯咯咯咯咯'),'#','NBA','left' )).add(
    new Item('normal').add(
        new TypeNews('叽叽叽叽叽叽','#','CBA','right')
    )
).show()
