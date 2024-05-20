import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import { router } from './router/router'
import {
  createBrowserRouter,

} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import AllTuristSport from './pages/AllTuristSport/AllTuristSport.jsx';
import AddTuristsSport from './pages/AddTuristsSport/AddTuristsSport.jsx';
import MyList from './pages/MyList/MyList.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import ViewDetails from './pages/ViewDetails/ViewDetails.jsx'
import PrivetRoute from './router/PrivetRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
      ,
      {
        path: 'allTuristSoprt',
        element: <AllTuristSport></AllTuristSport>,
        loader: () => fetch('http://localhost:5000/addTurist')

      },
      {
        path: '/viewdetails/:id',
        element: <PrivetRoute>
          <ViewDetails></ViewDetails>,
        </PrivetRoute>,
        loader: ({ params }) => fetch(`/http://localhost:5173/addTurist/${params._id}`)

      },
      {
        path: 'AddTuristSoprt',
        element: <PrivetRoute>
          <AddTuristsSport></AddTuristsSport>
        </PrivetRoute>
      },
      {
        path: 'myList',
        element: <PrivetRoute>
          <MyList></MyList>
        </PrivetRoute>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
