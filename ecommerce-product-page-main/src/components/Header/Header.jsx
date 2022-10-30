import Cart from '../../icons/cart';
import Menu from '../../icons/Menu';
import style from './Header.module.css';

export default function Header() {
  return <div className={style.Header}>
    <div className={style.Menu}>
      <Menu />
    </div>
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
    <div style={{ flexGrow: 1 }} />
    <div className={style.Cart}>
      <Cart />
    </div>
    <div className={style.Avatar}>
      <img src="../../../images/image-avatar.png" alt='pfp' style={{ height: '1.5rem', width: '1.5rem' }} />
    </div>
  </div>
}