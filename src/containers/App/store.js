import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { sidebarReducer, themeReducer, userReducer } from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  login: userReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
      thunkMiddleware
  )
  );

export default store;
