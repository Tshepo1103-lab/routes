import { Navigate } from 'react-router-dom';

interface WithAuthProps {
  allowedRoles?: string[];
}

const withAuth = (WrappedComponent: React.ComponentType, { allowedRoles = [] }: WithAuthProps = {}) => {
  return (props: any) => {
    const token = localStorage.getItem('auth_token');
    const userRole = localStorage.getItem('user_role');

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole || '')) {
      // Redirect to appropriate dashboard based on role
      if (userRole === 'admin') {
        return <Navigate to="/admin" replace />;
      }
      return <Navigate to="/client" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
