/**
 * Created by Administrator on 2017/8/25 0025.
 */


//单继承--属性复制
var extend = function(target,source){
    for(var property in source){
        target[property] = source[property]
    }
    return target;
}

























