import s from './Swiper.module.scss'
import {Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import Slide from "./Slide/Slide";

import  img1 from '../../../../assets/images/swiper/1.png'
import  img2 from '../../../../assets/images/swiper/2.png'
import  img3 from '../../../../assets/images/swiper/3.png'
import  img4 from '../../../../assets/images/swiper/4.png'
import  img5 from '../../../../assets/images/swiper/5.png'
import  img6 from '../../../../assets/images/swiper/6.png'

const Swiper_ = (props) => {
    return (
        <div className={s.swiper_wrapper}>
            <Swiper slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={img6}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export {Swiper_ as Swiper};