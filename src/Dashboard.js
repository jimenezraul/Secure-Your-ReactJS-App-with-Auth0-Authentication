import Logout from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // if the user is not authenticated, redirect to the home page
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard</p>
      <Logout />
    </div>
  );
};
export default Dashboard;
