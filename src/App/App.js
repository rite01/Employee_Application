import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import './App.css';
import Employees from '../pages/Employees/Employees';


const useStyle = makeStyles({
    appMain:{
      paddingLeft:'320px',
      width:'100%'
    }
  
  })

function App() {

  const classes = useStyle();

  return (
    <>
      <SideMenu />

      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
     
    </>
  );
}

export default App;
