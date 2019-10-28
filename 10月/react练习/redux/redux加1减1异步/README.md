redux
    类似于vuex 是一个独立的状态管理器

如何创建一个仓库?
    把redux源码引入到项目，项目中就有一个Redux对象，通过Redux对象中的createStore就可以创建一个仓库

store:仓库 仓库中放数据(状态)
reducer:可以当做是仓库的管理员，当创建仓库时，需要给仓库指定一个reducer
state:状态(数据)
action:动作，修改状态的一个动作

getState:用来从仓库中获取状态
dispatch:派发一个action
subscribe:订阅，当状态改变，就会指向回调函数

action creator：创建一个action

action分为同步的和异步的
    同步的：action发出后，能立即算出state新值
    异步：不能立即算出新值

在进行异步时，需要一个中间件redux-thunk，来处理异步action
可以让action creator先不返回一个对象，而是返回一个函数，在函数内部就可以对异步action进行操作
在redux中有一个方法，叫applyMiddleware,可以让第三方的中间件放到applyMiddleware
在创建仓库的地方

要想进行异步的操作，需要创建两个action,一个同步的，一个异步的，在异步中返回一个函数，里面dispatch同步的action