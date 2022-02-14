import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { type RootState } from './feature/reducer';

const { REACT_APP_ENVIRONMENT } = process.env;

// 전역 상태
const store = configureStore({
  reducer: rootReducer,
});

// 개발모드에서 핫 모듈 리로딩을 사용하는 경우
// 타입스크립트의 경우에는 새로고침과정에서 오류가 발생할 수 있어 삽입하는 코드
if (REACT_APP_ENVIRONMENT === 'development' && module.hot) {
  module.hot.accept('./feature/reducer', () => {
    const newRootReducer = require('./feature/reducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
