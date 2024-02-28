import React, { useState, useRef, useEffect } from "react";
import style from './Dropdown.module.scss';

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
    >Логин
    </button>
    {dropdownState.open && (
     <div className={style.dropdown}>
      <ul class={style.submenu}>
        <li class={style.submenu_item}><a href="/">На главную</a></li>
        <li class={style.submenu_item}><a href="/">Профиль</a></li>
        <li class={style.submenu_item}><a href="/">Выйти</a></li>
       </ul>
     </div>
    )}
  </div>
 );
}