import s from './Card.module.scss'
import card_icon from '../../../../../../assets/icons/card.svg'

const Card = () => {
    return (
        <img className={s.card_icon} src={card_icon} alt="card_icon"/>
    )
}

export default Card;
