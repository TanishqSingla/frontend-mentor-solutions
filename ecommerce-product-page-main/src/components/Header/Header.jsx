import style from './Header.module.css';

export default function Header() {
  return <div className={style.Header}>
    <div className={style.Logo}>
      <h1>sneakers</h1>
    </div>
    <div className={style.Socials}>
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  </div>
}