import React, { useState } from 'react';
import TopBar from './TopBar';
import Main from './Main';

import { TOKEN_KEY } from '../constants';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const handleLoginSucceed = (token) => {
    console.log('token --- ', token)
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ isLoggedIn: true });
  }
  
  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
  }


  return (
    <div className="App">
      <TopBar handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
      />

      <Main
        handleLoginSucceed={handleLoginSucceed}
        isLoggedIn={isLoggedIn}
      />
    </div>
  )
}

export default App;
