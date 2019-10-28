 function bindActionCreators(actionCreator,dispatch){
    return function(){
       return dispatch(actionCreator())
    }
}

// 判断传递过来的是一个函数，还是对象
export default function(actionCreator,dispatch){
   if(typeof actionCreator=='function'){
    //    如果是函数，直接调用绑定的函数
       return bindActionCreators(actionCreator,dispatch)
   }
//    如果是对象，循环绑定
const boundActionCreators={};
for(let key in actionCreator){
    boundActionCreators[key]=bindActionCreators(actionCreator[key],dispatch)
}
return boundActionCreators;
// bindActionCreators当调用这个函数要么返回actioncreator,要么返回一个对象，对象中有多个actioncreator
}