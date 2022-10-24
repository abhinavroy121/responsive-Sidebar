import "./App.css";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import dataArr from "./components/data";
import styles from "./components/styles/Dashboard.module.css";
import { useEffect, useState } from "react";
function App() {
  // console.log(dataArr);
  const [screenwidth, setscreenwidth] = useState(window.innerWidth);   // to get the width of the current screen

  const screenchange = () => {                      // function to setwidth in useeffect
    setscreenwidth(window.innerWidth);        
  };

  useEffect(() => {
    window.addEventListener("resize", screenchange);

    return () => {                                           ////=> cleanup function to prevent leakage
      window.removeEventListener("resize", screenchange);
      //  console.log("cleared")
    };
  }, [screenwidth]);
                                    // sidebar in Menu component and center body in dashboard component
                                    // passing data array and screensize as props
  return (
    <div className={styles.maincontainer}>
      <Menu data={dataArr} screensize={screenwidth} />       
      <Dashboard screesize={screenwidth} />
    </div>
  );
}

export default App;
