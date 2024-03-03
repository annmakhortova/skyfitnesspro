import React, { useState } from "react";
import style from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth,  ActionCodeOperation } from 'firebase/auth';


export function Dropdown() {
  const [dropdownState, setDropdownState] = useState(false);
  const fullCurrentUser = useSelector((state) => state.userApp.fullCurrentUser);
  const handleDropdownClick = () => setDropdownState(!dropdownState);

  const auth = getAuth();
  ActionCodeOperation (auth).then(() => {
  }).catch((error) => {
  
});

  return (
    <div className={style.dropdown_box}>
      <div className={style.dropdown_svg}></div>
      <div className={style.container}>
        <button
          type="button"
          className={style.header_item}
          onClick={handleDropdownClick}
        >
          {fullCurrentUser?.email}
        </button>
        {dropdownState && (
          <div className={style.dropdown}>
            <Link className={style.submenu_item} to="/">
              На главную
            </Link>
            <Link className={style.submenu_item} to="/profile">
              Профиль
            </Link>
            <Link className={style.submenu_item} to="/login"
             onClick={auth}>Выйти
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
