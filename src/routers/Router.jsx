import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/login.jsx'
import Quiz from '../pages/quiz/Quiz.jsx'
import Home from '../pages/home/Home.jsx'
import PublicRoute from './PublicRoute.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import WaterScarcity from '../pages/WaterScarcity/WaterScarcity.jsx';
import ReduceConsumption from '../pages/reduceConsumption/ReduceConsumption.jsx';
import SaveWater from '../pages/saveWater/SaveWater.jsx';

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
           <Home />
        </ProtectedRoute>
        )
    },
    {
      path:'/water-scarcity',
      element:(
        <ProtectedRoute>
           <WaterScarcity />
        </ProtectedRoute>
        )
    },
    {
      path: '/reduce-consumption',
      element:(
        <ProtectedRoute>
          <ReduceConsumption/>
        </ProtectedRoute>
      )
    },

    {
      path: '/water-savings',
      element:(
        <ProtectedRoute>
          <SaveWater />
        </ProtectedRoute>
      )
    }
  ]);

export default Router;