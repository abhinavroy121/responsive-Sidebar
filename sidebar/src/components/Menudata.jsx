import React from 'react'
import styles from  "./styles/Menu.module.css"
const Menudata = (props) => {
     const{ lefticon, title, righticon} = props
    
     //  console.log(icon)
    
  return (
    <div className={styles.menuspan}>
      <div  className={styles.iconcomponents}> {lefticon}</div>
        <div>{title}</div>
        <div id={styles.rightarrow}>  {righticon}</div>
         
       
    </div>
  )
}

export default Menudata