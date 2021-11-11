import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingIndicatorComponent from './components/LoadingIndicatorComponent';
import AppNotificationComponent from './components/AppNotificationComponent';
import ChooseService from './components/ChooseService';


function App() {
  return (
      <div>
          <LoadingIndicatorComponent></LoadingIndicatorComponent>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <a className="navbar-brand" href="/">Ar Salon & Day Spa</a>
          </nav>
          <main role="main" className="container">
              <div className="padding-container">
                  <ChooseService></ChooseService>
              </div>
          </main>
      </div>
  );
}

export default App;
