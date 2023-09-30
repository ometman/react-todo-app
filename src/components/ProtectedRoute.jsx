import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useAuthContext } from '@/context/AuthContext';



const ProtectedRoute = ({ children }) => {
  ProtectedRoute.propTypes = {
    children: PropTypes.object.isRequired
  }

  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ pathname: location.pathname }}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoute;
