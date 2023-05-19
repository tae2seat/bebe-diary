import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Join from './pages/Join'
import DiaryList from './pages/diary/DiaryList'
import DiaryDetail from './pages/diary/DiaryDetail'
import DiaryEdit from './pages/diary/DiaryEdit'
import NewDiary from './pages/diary/NewDiary'
import PrivateRoute from './components/PrivateRoute'
import { Provider } from 'react-redux'
import store from './redux/store'
import UserProfile from './pages/user/UserProfile'
import UserEdit from './pages/user/UserEdit'
import Loading from './pages/Loading'

const router = createBrowserRouter([
  {  path:'/',
     element: <App />,
     errorElement: <NotFound />,
     children: [
       { index: true, path: '/', element: <Home />},
       {
        path:'/login',
        element: <Login />
       },
       {
        path: '/join',
        element: <Join />
       },
       {
        path: '/diaries',
        element: <PrivateRoute Element={DiaryList} /> 
       },
       {
        path: '/diary/:diaryId',
        element: <PrivateRoute Element={DiaryDetail} />
       },
       {
        path: '/diary/:diaryId/edit',
        element: <PrivateRoute Element={DiaryEdit} />
       },
       {
        path: '/new',
        element: <PrivateRoute Element={NewDiary} />
       },
       {
        path: '/profile',
        element: <PrivateRoute Element={UserProfile} />
       },
       {
        path: '/profile/:id/edit',
        element: <PrivateRoute Element={UserEdit} />
       },
       {
        path: '/notfound',
        element: <NotFound />
       },
       {
        path: '/loading' ,
        element: <Loading />
       }
     ]
 }
 ])
 
 ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
 );

