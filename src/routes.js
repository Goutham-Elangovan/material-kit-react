import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import LoginPage from './pages/LoginPage';
import EditUser from './pages/EditUser';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/user" />, index: true },
        { path: 'login', element: <LoginPage /> },
        { path: 'user', element: <UserPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/login" />, index: true },
        {
          path: 'login',
          element: <LoginPage />,
        },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/editUser" />, index: true },
        { path: 'editUser', element: <EditUser /> },
      ],
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
