import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
import Login from './Components/Login'
import {useStateValue} from './StateProvider'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                </Route>
              </Switch>
            </div>  
          </>
        )}  
      </Router>
    </div>
  );
}

export default App;
/**Header */
      
/**Sidebar */
/**React-router -> chat screen */