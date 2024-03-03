import React, { useState } from "react";
import style from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Dropdown() {
  // const container = useRef();
  const [dropdownState, setDropdownState] = useState(false);
  const fullCurrentUser = useSelector(state => state.userApp.fullCurrentUser);
  const handleDropdownClick = () => setDropdownState(!dropdownState);

  // const handleClickOutside = (e) => {
  //   if (container.current && !container.current.contains(e.target)) {
  //     setDropdownState(false);
  //   }
  // };

  return (
    <div className={style.dropdown_box}>
      <svg className={style.dropdown_svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
      </svg>

      <div className={style.container}>
        <button
          type="button"
          className={style.header_item}
          onClick={handleDropdownClick}
        >
          {fullCurrentUser?.email}
          {/* <img src="arrow_down.png" alt="arrow_down" /> */}
        </button>
        {dropdownState && (
          <div className={style.dropdown}>
            <Link className={style.submenu_item} to="/">
              На главную
            </Link>
            <Link className={style.submenu_item} to="/profile">
              Профиль
            </Link>
            <Link className={style.submenu_item} to="/login">
              Выйти
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
