import s from './AboutUs.module.scss'
import AboutUsItem from "./AboutUsItem/AboutUsItem";

const AboutUs = () => {
    return (
        <div className={s.container}>
            <div className={s.about_us}>
                <AboutUsItem count={'5,567'} text={'Счастливых клиентов'}/>
                <AboutUsItem count={'1245'} text={'Продуктов на выбор'}/>
                <AboutUsItem count={'372'} text={'Продаж в день'}/>
                <AboutUsItem count={'20'} text={'Лет на рынке'}/>
            </div>
        </div>
    )
}

export default AboutUs;