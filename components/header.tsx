import { Navigation, EffectFade, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from '../components/styles/Header.module.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import React from 'react';

const Header = () => {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  }, []);
  const divRef = React.useRef<HTMLDivElement>(null);

  const swiper = useSwiper();
  function moveDownText() {
    gsap.set('.DownText', { autoAlpha: 0 });
    gsap.to('.DownText', 1.8, {
      startAt: {
        autoAlpha: 0,
        y: '-150%',
      },
      autoAlpha: 1,
      y: '4%',
      display: 'block',
    });
  }

  return (
    <>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Thumbs]}
        pagination={{ clickable: true, el: '.swiperSlide' }}
        navigation
        loop={false}
        grabCursor={true}
        initialSlide={1}
        parallax={true}
        effect={'fade'}
        speed={800}
        // onSlideChange={(swip) => console.log(swip.activeIndex)}
        slidesPerView={1}
        onSlideNextTransitionStart={() => moveDownText()}
        onSlidePrevTransitionStart={() => moveDownText()}
        className={styles.swiperSlide}
      >
        <SwiperSlide>
          <div ref={divRef} className={`${styles.imgWrapper}`}>
            <div className={styles.overlay}></div>
            <div className={`${styles.imgNum} DownText`}>Halaman Pertama</div>
            <img src="images/image (1).jpg" alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgWrapper}>
            <div className={`${styles.imgNum} DownText`}>Halaman Kedua</div>
            <img src="images/image (2).jpg" alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgWrapper}>
            <div className={`${styles.imgNum} DownText`}>Halaman Ketiga</div>
            <img src="images/image (3).jpg" alt="gambar" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="box">s</div>
    </>
  );
};

export default Header;
