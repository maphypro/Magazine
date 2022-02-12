import s from './HeaderBottom.module.scss'
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Contacts from "./Contacts/Contacts";

const HeaderBottom = () => {
    return (
        <div className={s.HeaderBottom}>
            <div className={s.HeaderBottomContent}>
                <div className={s.left_wrapper}>
                    <Logo/>
                    <Menu/>
                </div>
                <div className={s.right_wrapper}>
                    <Contacts/>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;