import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  console.log(isAuthenticated);
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the site!</p>
      <LoginButton />
    </div>
  );
};
export default Home;
