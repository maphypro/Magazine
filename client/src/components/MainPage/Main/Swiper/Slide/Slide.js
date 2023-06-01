import s from './Slide.module.scss'

const Slide = (props) => {
    return (
        <div className={s.slide}>
            <div className={s.left_column}>
                <img src={props.image} alt="lock_img"/>
            </div>
            <div className={s.right_column}>
                <h1 className={s.title}>
                    Golden Soft<br/>GS-200Z-5 для офиса
                </h1>
                <div className={s.description}>
                    <p className={s.subtitle}>
                        Замок дверной электронный Golden Soft <br/> GS-200Z-5 имеет роскошный глянцевый <br/> блеск, четкие линии,
                        красивые формы.
                    </p>
                    <p className={s.subtitle}>
                        Подходит для установки на <br/>деревянную/межкомнатную дверь.
                    </p>
                </div>
                <div className={s.price_container}>
                    <h2 className={s.price_title}>Цена</h2>
                    <div className={s.price}>
                        <p className={s.cur_price}>33 000₽</p>
                        <p className={s.old_price}>37 000₽</p>
                    </div>
                </div>
                <button className={s.card_btn}>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default Slide;