import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/login.jsx'
import Quiz from '../pages/quiz/Quiz.jsx'
import Home from '../pages/home/Home.jsx'
import PublicRoute from './PublicRoute.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Start from '../pages/Start/Start.jsx';

const Router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PublicRoute>
            <Login />
        </PublicRoute>
    )
    },
    {
      path: '/quiz',
      element: (
      <ProtectedRoute>
         <Quiz />
      </ProtectedRoute>
      )
    },
    {
      path:'/home',
      element:(
        <ProtectedRoute>
           <Home/>
        </ProtectedRoute>
        )
    },
    {
      path:'/Start',
      element:(
        <ProtectedRoute>
           <Start/>
        </ProtectedRoute>
        )
    }
  ]);

export default Router;