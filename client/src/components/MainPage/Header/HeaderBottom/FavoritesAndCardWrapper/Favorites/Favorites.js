import s from './Favorites.module.scss'
import favorites_icon from '../../../../../../assets/icons/heart.svg'

const Favorites = () => {
    return (
        <img className={s.favorites_icon} src={favorites_icon} alt="favorites_icon" />
    )
}

export default Favorites;