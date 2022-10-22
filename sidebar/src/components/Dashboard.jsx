import React from "react";
import { FiSettings, FiPower } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdDashboard,MdGridOn,MdTimer,MdOutlineGroupAdd,MdPlaylistAdd,MdArchive } from "react-icons/md";
import { FaUserFriends,FaDollarSign ,FaKey} from "react-icons/fa";
import { RiRidingLine,RiAlertFill } from "react-icons/ri";

import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div>
      {/* // sidebardiv */}

      <div className={styles.sidebarmaindiv}>
        {/* top part div */}
        <div>
          <div></div>
          <div className={styles.sidetop2div}>
            <FiSettings color="white" />
            <FiPower color="white" />
            <AiFillQuestionCircle color="white" />
          </div>
          <div>
            {" "}
            <button id={styles.sidetopbutton}>Upgrade to Premium</button>
          </div>
          <AiFillQuestionCircle
            color="#ec008c"
            size={22}
            id={styles.secondquestionmark}
          />
        </div>

        {/* // menu part div */}
        <div>
          <span className={styles.menuspan}> <MdDashboard  className={styles.iconcomponents} /> <p className={styles.iconpara}>Dashboard</p> </span>
          <span className={styles.menuspan}> <MdGridOn  className={styles.iconcomponents}/> <p className={styles.iconpara}>System</p></span>
          <span className={styles.menuspan}> <MdTimer className={styles.iconcomponents}/> <p className={styles.iconpara}>Rentals</p></span>
          <span className={styles.menuspan}> <MdOutlineGroupAdd className={styles.iconcomponents}/> <p className={styles.iconpara}>Approval list</p></span>
          <span className={styles.menuspan}> <FaUserFriends className={styles.iconcomponents}/> <p className={styles.iconpara}>User Management</p></span>
          <span className={styles.menuspan}> <RiRidingLine className={styles.iconcomponents}/> <p className={styles.iconpara}>Asset Management</p></span>
          <span className={styles.menuspan}> <RiAlertFill className={styles.iconcomponents}/> <p className={styles.iconpara}>Alarms</p></span>
          <span className={styles.menuspan}> <MdPlaylistAdd className={styles.iconcomponents}/> <p className={styles.iconpara}>Guide Screens</p></span>
          <span className={styles.menuspan}> <MdArchive className={styles.iconcomponents}/> <p className={styles.iconpara}>Archived Data</p></span>
          <span className={styles.menuspan}> <FaDollarSign className={styles.iconcomponents}/> <p className={styles.iconpara}>Payouts</p></span>
          <span className={styles.menuspan}> <AiFillQuestionCircle className={styles.iconcomponents}/> <p className={styles.iconpara}>Need help</p></span>
        </div>
      </div>

      {/* center body div */}
      <div>
        {/* // center top div contains 4 inner div */}
        <div>
            <div> <span><FaKey color="#ec008c"/></span>    <span></span></div>
            <div> <span></span>    <span></span></div>
            <div> <span></span>    <span></span></div>
            <div> <span></span>    <span></span></div>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
