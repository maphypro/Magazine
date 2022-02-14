import s from './DropdownMenuInside.module.scss'
import good_sample from '../../../../../../../../assets/images/goods/Rectangle 728.png'

const DropdownMenuInside = () => {
    return (
        <div className={s.dropdown_wrapper}>
            <div className={s.dropdown}>
                <div className={s.left_column}>
                    <nav className={s.menu}>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Накладные электронные замки</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Врезные электронные замки</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Замки для квартиры</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Замки для дома</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Замки для отелей</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Замки для офиса</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Замки для шкафчиков</span>
                        </div>
                        <div className={s.menu_item}>
                            <span className={s.menu_item_text}>Замки для раздевалок</span>
                        </div>
                    </nav>
                    <button className={s.btn}>
                        Смотреть все
                    </button>
                </div>
                <div className={s.right_column}>
                    <img src={good_sample} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenuInside;