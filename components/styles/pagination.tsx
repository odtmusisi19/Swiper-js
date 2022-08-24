import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Pagination.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import { useRef } from 'react';
// import {} from 'swiper/core';

const PaginationTes = () => {
  //   const swiperNavPrevRef = useRef(null);
  //   const swiperNavNextRef = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiperSlide}
      >
        <SwiperSlide className={styles.card}>
          <img src="images/image (1).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.card}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default PaginationTes;
