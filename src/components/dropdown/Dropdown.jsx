import React, { useState } from 'react';
import style from './Dropdown.module.scss';
import { Link } from 'react-router-dom';

export function Dropdown({title}) {
  // const container = useRef();
  const [dropdownState, setDropdownState] = useState(false);

  const handleDropdownClick = () => setDropdownState(!dropdownState);

  // const handleClickOutside = (e) => {
  //   if (container.current && !container.current.contains(e.target)) {
  //     setDropdownState(false);
  //   }
  // };

  return (
    <div className={style.container}>
      <button type='button' className={style.header_item} onClick={handleDropdownClick}>
        {title}
        <img src="arrow_down.png" alt="arrow_down" />
      </button>
      {dropdownState && (
        <div className={style.dropdown}>
          <Link className={style.submenu_item} to='/'>
            На главную
          </Link>
          <Link className={style.submenu_item} to='/profile'>
            Профиль
          </Link>
          <Link className={style.submenu_item} to='/login'>
            Выйти
          </Link>
        </div>
      )}
    </div>
  );
}
