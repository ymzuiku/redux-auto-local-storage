export const storage = {
  localName: "defaultIOKey",
  save: (v, theKey = storage.localName) => {
    const theType = Object.prototype.toString.call(v);
    if (theType === "[object Object]") {
      localStorage.setItem(theKey, JSON.stringify(v));
    } else if (theType === "[object String]") {
      localStorage.setItem(theKey, v);
    } else {
      console.warn("Warn: storage.save() param is no a Object");
    }
  },
  load: (theKey = storage.localName) => {
    try {
      const data = localStorage.getItem(theKey);
      if (data) {
        if (typeof data === "string") {
          return JSON.parse(data);
        }
        return data;
      }
    } catch (err) {
      console.warn("load last localSate error");
    }
  },
  clear: (theKey = storage.localName) => {
    localStorage.setItem(theKey, {});
  }
};

// 这里做自动保存的监听
export default function autoStorageSave(store, localName, needSaveKeys) {
  if (Object.prototype.toString.call(needSaveKeys) !== "[object Array]") {
    // eslint-disable-next-line
    console.warn("autoStorageSave: params is no a Array");
  }
  storage.localName = localName || storage.localName;
  // 只有Auth和DataCenter的修改会激发IO, lastDats保存之前的记录
  const lastDatas = {};
  needSaveKeys.forEach(v => {
    lastDatas[v] = undefined;
  });
  // 首次读取
  const lastLocalData = storage.load(storage.localName);
  if (Object.prototype.toString.call(lastLocalData) === "[object Object]") {
    store.dispatch({
      type: "localStorageLoad: IO",
      reducer: state => {
        // 如果是immutable 使用toJS
        if (state && state.toJS) {
          const data = {
            ...state.toJS(),
            ...lastLocalData
          };
          for (const key in data) {
            state = state.set(key, data[key]);
          }
          return state;
        }
        // 非immutable直接合并历史数据
        return {
          ...state,
          ...lastLocalData
        };
      }
    });
  }
  store.subscribe(() => {
    const state = store.getState();
    if (state && state.toJS) {
      //immutable 类型
      const nowDatas = {};
      let isNeedSave = false;
      needSaveKeys.forEach(v => {
        // 监听数据和 Immutable 配合做低开销校验
        if (Object.prototype.toString.call(v) === "[object Array]") {
          nowDatas[v] = state.getIn(v);
        } else {
          nowDatas[v] = state.get(v);
        }
        if (lastDatas[v] !== nowDatas[v]) {
          isNeedSave = true;
        }
        lastDatas[v] = nowDatas[v];
      });
      if (isNeedSave) {
        storage.save(nowDatas);
      }
    } else {
      // 非immutable做浅比较判断是否需要保存
      const nowDatas = {};
      let isNeedSave = true;
      needSaveKeys.forEach(v => {
        nowDatas[v] = state[v];
        if (lastDatas[v] !== nowDatas[v]) {
          isNeedSave = true;
        }
        lastDatas[v] = nowDatas[v];
      });
      if (isNeedSave) {
        storage.save(nowDatas);
      }
    }
  });
}
