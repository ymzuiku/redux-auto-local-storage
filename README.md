## Use

兼容 immutable 和普通js对象, 读取store.getState()中的值，如果改变就本地持久化

```js
import autoLocalStorage from 'redux-auto-local-storage';
autoLocalStorage(store, 'local-name', ['user', 'data']);
```