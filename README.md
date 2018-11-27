## Use

兼容 immutable 和普通 js 对象, 读取 store.getState()中的值，如果改变就本地持久化

```js
import reduxAutoLocalStorage from "redux-auto-local-storage";
reduxAutoLocalStorage(store, "local-name", ["user", "data"]);
```

如果未使用 combineReducers, 添加一个 reducer 处理:

```js
function reducer(state, action){
    if (action.type === "all_auto_local_storage") {
       return {...state, ...action.payload};
    }
}
```

如果使用了 combineReducers, 为每个需要本地化的subReducer添加一个 reducer 处理:

```js
// userReducer
function user(state, action){
    // type 等于 state的键加'_auto_local_storage'
    if (action.type === "user_auto_local_storage") {
       return {...state, ...action.payload};
    }
}
```

reduxAutoLocalStorage 会在读取到属性时进行本地化