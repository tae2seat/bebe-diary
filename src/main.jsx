import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DiaryList from './pages/DiaryList'
import DiaryDetail from './pages/DiaryDetail'
import DiaryEdit from './pages/DiaryEdit'
import NewDiary from './pages/NewDiary'
import ProfileEdit from './pages/ProfileEdit'
import PrivateRoute from './components/PrivateRoute'
import Loading from './pages/Loading'
import { Provider } from 'react-redux'
import store from './redux/store'
import BabyProfileRegister from './pages/BabyProfileRegister'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/diaries',
        element: <PrivateRoute Element={DiaryList} />,
      },
      {
        path: '/diary/:diaryId',
        element: <PrivateRoute Element={DiaryDetail} />,
      },
      {
        path: '/diary/:diaryId/edit',
        element: <PrivateRoute Element={DiaryEdit} />,
      },
      {
        path: '/new',
        element: <PrivateRoute Element={NewDiary} />,
      },
      {
        path: '/profile/:id/edit',
        element: <PrivateRoute Element={ProfileEdit} />,
      },
      {
        path: '/baby/:userId/register',
        element: <PrivateRoute Element={BabyProfileRegister} />,
      },
      {
        path: '/notfound',
        element: <NotFound />,
      },
      {
        path: '/loading',
        element: <Loading />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
