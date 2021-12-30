import './App.css';
import { Router } from '@reach/router';
import HomePage from './components/HomePage';
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Registration';
import EditSetup from './components/EditSetup';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UserProfile from './view/UserProfile';



function App(props) {
  const [errors, setErrors] = useState({})
  const [setupList, setSetupList] = useState([]);
  const [localStorageId, setLocalStorageId] = useState("");



  return (
    <div className="App">
      <Router>
        <HomePage path="/" setupList={setupList} setSetupList={setSetupList} />
        <Login path="/login" localStorageId={localStorageId} setLocalStorageId={setLocalStorageId} />
        <Register path="/register" />
        <UserProfile path="/user/:id"
          setupList={setupList}
          setSetupList={setSetupList}
          localStorageId={localStorage}
          setLocalStorageId={setLocalStorageId}
          errors={errors}
          setErrors={setErrors} />
        <EditSetup path="/edit/:id" />
        <DisplayAll path="/user/displayAll" setupList={setupList} setSetupList={setSetupList} />
        <DisplayOne path="/user/displayAll/displayOne/:id" />
      </Router>
    </div>
  );
}

export default App;
