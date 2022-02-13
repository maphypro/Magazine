import s from './Favorites.module.scss'
import favorites_icon from '../../../../../../assets/icons/heart.svg'

const Favorites = () => {
    return (
        <div className={s.favorites}>
            <img className={s.favorites_icon} src={favorites_icon} alt="favorites_icon"/>
            <div className={s.amount_circle}>1</div>
        </div>
    )
}

export default Favorites;