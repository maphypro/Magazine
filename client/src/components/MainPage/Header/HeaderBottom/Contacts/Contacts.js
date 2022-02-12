import s from './Contacts.module.scss'
import tel_icon from '../../../../../assets/icons/telephone.svg'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <img src={tel_icon} alt="tel_icon"/>
            <p>+7 (966) 55 88 499</p>
        </div>
    )
}

export default Contacts;