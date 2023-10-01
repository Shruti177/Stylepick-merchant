import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const AuthForgetpassword = Loadable(lazy(() => import('pages/authentication/Forgetpassword'))); // Add this line

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthRegister />
    },
    {
      path: 'forgetpassword', // Define the route for the Forgot Password page
      element: <AuthForgetpassword /> // Use the AuthForgotPassword component
    }
  ]
};

export default LoginRoutes;
