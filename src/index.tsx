import React from 'react';
import ReactDOM from 'react-dom/client';

// react-router-dom
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserHistory, BrowserHistory } from 'history'
import HomeTemplates from './templates/HomeTemplates/HomeTemplates';

// redux
import { Provider } from 'react-redux'
import { store } from './redux/store';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';


export const history: BrowserHistory | any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
      <Route path='' element={<HomeTemplates />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='login'element={<Login/>}>
            <Route path='profile' element={< Profile/>}></Route>
          </Route>
          <Route path='profile'element={<Profile/>}></Route>
          <Route path='register'element={<Register/>}></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
