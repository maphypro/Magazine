import s from './AboutUsItem.module.scss'


const AboutUsItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.count}>
                {props.count}
            </div>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    )
}

export default AboutUsItem;