/**
 * Created by Administrator on 2017/8/26 0026.
 */

//建造者模式,将复杂对象的构建层与表现层分离出来,同样的构建过程可以不同的表示;

var Human = function(param){
    this.skill = param && param.skill || "保密";
    this.hobby = param && param.hobby || "保密";
}

Human.prototype = {
    getSkill : function(){
        return this.skill;
    },
    getHobby : function(){
        return this.hobby;
    }
}

var Named = function(name){
    var that = this;
    (function(name,that){
        that.wholeName = name;
        if(name.indexOf(' ') > -1){
            that.firstName = name.slice(0,name.indexOf(' '))
            that.lastName = name.slice(name.indexOf(' '))
        }
    })(name,that)
}

var Work = function(work){
    var that = this;
    (function(work,that){
        switch(work){
            case "code" :
                that.work = "工程师";
                that.workDescription = "每天沉醉于代码";
                break;
            case "UI" :
            case "UE" :
                that.work = "设计师";
                that.workDescription = "设计更是一种艺术";
                break;
            case "teacher" :
                that.work = "教师";
                that.workDescription = "分享也是一种快乐";
                break;
            default :
                that.work = work;
                that.workDescription = "对不起,我们还不清楚您的职位的相关信息";
        }
    })(work,that)
}

Work.prototype.changeWork = function(work){
    this.work = work
}
Work.prototype.changeDescription = function(sentence){
    this.workDescription = sentence;
}

var Person = function(name,work){
    var _person = new Human();
    _person.name = new Named(name)
    _person.work = new Work(work);
    return _person;
}

var person = new Person("xiao ming","code")
console.log(person.skill)
console.log(person.name.firstName)
console.log(person.work.work)

person.work.changeDescription("改变了就是好")
console.log(person.work.workDescription)



































