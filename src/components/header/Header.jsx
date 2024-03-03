import { Logo } from "../../UI/Logo/Logo"
import { Dropdown } from "../dropdown/Dropdown"
import style from "./Header.module.scss"
export const Header = () => {
  return (
    <header className={style.header}>
      <Logo className={style.logo} />
      {/* <div className={style.header_profile}> */}
        {/* <svg className={style.header_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
        </svg> */}

        <Dropdown
          className={style.header_select}
        />
      {/* </div> */}
  </header>

  )
}