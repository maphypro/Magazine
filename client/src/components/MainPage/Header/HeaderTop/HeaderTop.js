import s from './HeaderTop.module.scss'

const HeaderTop = () => {
    return (
       <div className={s.HeaderTop}>
           <p className={s.mainText}>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>
           <p className={s.sideText}>Обратный звонок</p>
       </div>
    )
}

export default HeaderTop;