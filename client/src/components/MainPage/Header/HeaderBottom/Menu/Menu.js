import s from './Menu.module.scss'
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
    return (
        <nav className={s.menu}>
            <MenuItem text={'Главная'} isDropsown={false}/>
            <MenuItem text={'Каталог'} isDropsown={true}/>
            <MenuItem text={'Оптовая продажа'} isDropsown={false}/>
            <MenuItem text={'О нас'} isDropsown={false}/>
        </nav>
    )
}

export default Menu;