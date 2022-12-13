import { useEffect, useState } from 'react';
import Login from './components/Login';
import './App.css';
import CreateJobForm from './components/CreateJobForm.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  return (
    <div className='app'>
      {loggedIn ? (
        <div className='current-page'>
          <CreateJobForm></CreateJobForm>
          <button className='logout' onClick={signout}>
            Sign out
          </button>
        </div>
      ) : (
        <div className='current-page'>
          <Login setLoggedIn={setLoggedIn}></Login>
        </div>
      )}
    </div>
  );
}

export default App;
