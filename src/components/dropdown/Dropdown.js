import React, { useState, useRef, useEffect } from "react";
import * as style from "./Dropdown.module.css";

export default function Dropdown() {
    const container = useRef();
    const [dropdownState, setDropdownState] = useState({ open: false });

    const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });
   
    const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
    setDropdownState({ open: false });
    }
    };

    
 useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);

  return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 return (
  <div className={style.container} ref={container}>
     <button type="button" className={style.heder_item}
     onClick={handleDropdownClick}
    >Logo!
    </button>
    {dropdownState.open && (
     <div className={style.dropdown}>
      <ul>
        <li>На главную</li>
        <li>Профиль</li>
        <li>Выйти</li>
       </ul>
     </div>
    )}
  </div>
 );
}