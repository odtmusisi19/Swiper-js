import { Navigation, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../components/styles/Header.module.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useRef } from 'react';
// import {} from 'swiper/core';

const Header = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        pagination={{ clickable: true }}
        navigation
        parallax={true}
        effect={'fade'}
        speed={800}
        onSlideChange={() => console.log('berhasil')}
        slidesPerView={3}
        loop
        className={styles.mySwiper}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
      >
        <SwiperSlide className={'swiperslide'}>
          <div className="img-wrapper">
            <div className="img-num">1</div>
            <img src="images/image (1).jpg" alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={'swiperslide'}>
          <div className="img-wrapper">
            <div className="img-num">2</div>
            <img src="images/image (2).jpg" alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={'swiperslide'}>
          <div className="img-wrapper">
            <div className="img-num text-red-800">3</div>
            <img src="images/hp (3).jpeg" alt="gambar" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
