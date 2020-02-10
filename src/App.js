import React, { useContext } from 'react';
import Header from './Assets/Components/Header/Header';
import Main from './Assets/Components/Main/Main';
import Snackbar from './Assets/Components/Global/Snackbar/Snackbar';
import { Context } from './Assets/Context/Context';

function App() {
  const { state } = useContext(Context);
  const { error } = state;

  
  return (
    <div className="App">
      <Snackbar text="this user name not found in github" isShow={error} type="error"/>
      <Header />
      <Main />
    </div>
  );
}

export default App;
