import s from './Main.module.scss'
import {Swiper} from './Swiper/Swiper'
import AboutUs from "./AboutUs/AboutUs";

const Main = (props) => {
    return (
        <div className={s.main}>
            <Swiper/>
            <AboutUs/>
        </div>
    )
}

export default Main;