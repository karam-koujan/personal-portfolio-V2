import * as React from "react";
import Styles from "./styles.module.css";



interface props{
    showNavBar:boolean,
    setShowNavBar:React.Dispatch<React.SetStateAction<boolean>>
}


const Hamburger = ({showNavBar,setShowNavBar}:props)=>{
  return(
      <div className={`${Styles.container} ${showNavBar?Styles["container--active"]:null}  hidden before:bg-color-secondary after:bg-color-secondary dark:after:bg-color-third dark:before:bg-color-third sm:flex`} onClick={()=>setShowNavBar(!showNavBar)}>
          <span className={`${Styles.icon} ${showNavBar?Styles["icon--active"]:''} bg-color-secondary dark:bg-color-third `}></span>
	  </div>
  )
}

export default Hamburger;
