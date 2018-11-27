## Use

兼容 immutable 和普通js对象, 读取store.getState()中的值，如果改变就本地持久化

```js
import reduxAutoLocalStorage from 'redux-auto-local-storage';
reduxAutoLocalStorage(store, 'local-name', ['user', 'data']);
```