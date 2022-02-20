import s from './Swiper.module.scss'
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from "./Slide/Slide";
import NavPanel from "./NavPanel/NavPanel";
import img1 from '../../../../assets/images/swiper/1.png'
import img2 from '../../../../assets/images/swiper/2.png'
import img3 from '../../../../assets/images/swiper/3.png'
import img4 from '../../../../assets/images/swiper/4.png'
import img5 from '../../../../assets/images/swiper/5.png'
import img6 from '../../../../assets/images/swiper/6.png'
import NavigationButton from "./NavPanel/NavigationButton/NavigationButton";

const Swiper_ = (props) => {
    return (
        <div className={s.swiper_wrapper}>
            <Swiper slidesPerView={1}
                    loop={true}
                    navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }}
                    modules={[Navigation, Pagination]}
                    onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <NavPanel />
            </Swiper>
        </div>
    )
}

export {Swiper_ as Swiper};