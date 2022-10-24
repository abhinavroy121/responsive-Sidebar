import React from "react";
import { FiSettings, FiPower } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import styles from "./styles/Menu.module.css";
import Menudata from "./Menudata";
import blogo from "./images/blogo.png";
import { useState } from "react";
import { useEffect } from "react";
const Menu = (props) => {
  let { data, screensize } = props;
  //  console.log(props)
  const [show, setshow] = useState(true); // to show the hamburger whenever screen size decreases to medium ans small
  const [burger, setburger] = useState(false); // to set display for the side component

  // handles the changes of screensize for media query class
  useEffect(() => {
    if (screensize > 950) {
      setshow(false);
    } else {
      setshow(true);
    }

    //   console.log(show)
  }, [screensize]);

  const handlehamburger = () => {
    setburger(!burger);
  };

  return (
    <div>
      <div
        id={show ? styles.togglebutton : styles.toggleinvisible}
        onClick={handlehamburger}
      >
        <span className={styles.hamburgertoggle}></span>
        <span className={styles.hamburgertoggle}></span>
        <span className={styles.hamburgertoggle}></span>
      </div>
      <div
        style={{
          display:
            burger || window.innerWidth >= 950 ? "block" : show ? "none" : "",
        }}
        className={styles.sidebarmaindiv}
      >
        <div className={styles.sidetopdivhere}>
          <img src={blogo} alt="logo" />
        </div>
        <div className={styles.sidetop2div}>
          <FiSettings color="white" />
          <FiPower color="white" />
          <AiFillQuestionCircle color="white" />
        </div>

        <div className={styles.buttonandquestion}>
          <div>
            {" "}
            <button className={styles.sidetopbutton}>Upgrade to Premium</button>
          </div>
          <AiFillQuestionCircle
            color="#ec008c"
            size={22}
            id={styles.secondquestionmark}
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              alert(item.title);
            }}
          >
            <Menudata
              lefticon={item.lefticon}
              title={item.title}
              righticon={item.righticon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
