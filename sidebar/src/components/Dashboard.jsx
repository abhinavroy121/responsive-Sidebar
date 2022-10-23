import React from "react";
import {MdMiscellaneousServices } from "react-icons/md";
import {FaKey,FaUser} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import blogo from "./images/blogo.png"


import styles from "./styles/Dashboard.module.css";
const Dashboard = () => {
  return (
   

    <div className={styles.centermaindiv}>
      {/* center body div */}
        {/* // center top div contains 4 inner div */}
        <div className={styles.centertopdiv}>
            <div  className={styles.optionsinnerdiv}> <span><FaKey color="#ec008c" size={50}/></span>    <span><h4>ON RENTAL</h4> <p>0</p> </span></div>
            <div className={styles.optionsinnerdiv} id={styles.sideborder}> <span><BsGrid3X3GapFill color="#ec008c" size={50}/></span>    <span><h4>ASSETS</h4> <p>0</p> </span></div>
            <div className={styles.optionsinnerdiv} id={styles.sideborder}> <span><FaUser color="#ec008c" size={50}/></span>    <span><h4>USERS</h4> <p>1</p> </span></div>
            <div className={styles.optionsinnerdiv} id={styles.sideborder}> <span><MdMiscellaneousServices color="#ec008c" size={50}/></span>    <span><h4>SERVICE ALERTS</h4> <p>0</p> </span></div>
        </div>
          
          {/* // center body div */}
          <div className={styles.chartdiv}>
            <div>
                <div className={styles.innercharttop}>
                  <h3>Rentals</h3>
                  <select name="" id="">
                    <option value="">Last 7 days</option>
                  </select>
                </div>
            </div>

            <div>
            <div className={styles.innercharttop}>
                  <h3>Average Rentals Duration</h3>
                  <select name="" id="">
                    <option value="">Last 7 days</option>
                  </select>
                </div>
            </div>
          </div>
  
      </div>
  
  );
};

export default Dashboard;
