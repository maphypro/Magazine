import s from './NavPanel.module.scss'
import NavigationButton from "./NavigationButton/NavigationButton";
import PaginationList from "./PaginationList/PaginationList";
const NavPanel = (props) => {
    return (
        <div className={s.nav_panel}>
            <NavigationButton direction={'prev'}/>
            <PaginationList/>
            <NavigationButton direction={'next'}/>
        </div>
    )
}

export default NavPanel;

