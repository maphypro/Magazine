import s from './FavoritesAndCardWrapper.module.scss'
import Card from "./Card/Card";
import Favorites from "./Favorites/Favorites";

const FavoritesAndCardWrapper = () => {
    return (
        <div className={s.wrapper}>
            <Favorites/>
            <Card/>
        </div>
    )
}

export default FavoritesAndCardWrapper;