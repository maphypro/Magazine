import s from './Card.module.scss'
import card_icon from '../../../../../../assets/icons/card.svg'

const Card = () => {
    return (
        <div className={s.card}>
            <img className={s.card_icon} src={card_icon} alt="card_icon"/>
            <div className={s.amount_circle}>4</div>
        </div>
    )
}

export default Card;
