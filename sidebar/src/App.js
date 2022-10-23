import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import dataArr from './components/data'
import styles from "./components/styles/Dashboard.module.css"
import { useEffect, useState } from 'react';
function App() {
  // console.log(dataArr);
  const [screenwidth,setscreenwidth]  = useState(window.innerWidth)

    const screenchange =()=>{
        // console.log(window.innerWidth)
        setscreenwidth(window.innerWidth)
    }

    useEffect(() => {
 
       window.addEventListener("resize", screenchange)
       return ()=>{
         window.removeEventListener("resize", screenchange)
        //  console.log("cleared")
       }
    },[screenwidth])
  return (
    <div className={styles.maincontainer}>
      <Menu data={dataArr} screensize={screenwidth}/>
       <Dashboard screesize={screenwidth}/>
    </div>
  );
}

export default App;
