import style from "./Navbar.module.css"
import img from "../../Image/logo.png"

export default function Navbar(){
    return (
      <nav className={style.navbar}>
        <div className={style.nav1}>
          <h1><img alt="" src={img}/></h1>
        </div>
        <div className={style.nav2}>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Team</h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={style.menuicon}
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </nav>
    );
}