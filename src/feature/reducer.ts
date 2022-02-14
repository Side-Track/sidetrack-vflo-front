/**
 * 개발 참고 : https://www.mattbutton.com/redux-made-easy-with-redux-toolkit-and-typescript/
 */
import { combineReducers } from '@reduxjs/toolkit';

import counter from './counter/counterSlice';

const rootReducer = combineReducers({
  // 아래는 테스트용 리듀서임
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
