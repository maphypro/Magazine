import s from './Header.module.scss'
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
    return (
        <header className={s.header}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    )
}

export default Header;