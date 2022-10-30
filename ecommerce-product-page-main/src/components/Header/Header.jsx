import Cart from "../../icons/cart";
import Menu from "../../icons/Menu";
import style from "./Header.module.css";

export default function Header() {
	return (
		<div className={style.Header}>
    <div className={style.Container}>
			<button className={style.Menu}>
				<Menu />
			</button>
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
			<img
				src="../../../images/image-avatar.png"
				alt="pfp"
				className={style.Avatar}
			/>
		</div>
</div>
	);
}
