import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react';
import SwiperCore, { Navigation, Autoplay, Scrollbar, Pagination } from 'swiper';
import "../../../node_modules/swiper/swiper-bundle.css";

import '../Projects/SwiperStyles.css'

import yandex1 from '../../Images/Certificates/yandex1.jpg'
import yandex2 from '../../Images/Certificates/yandex2.jpg'
import react from '../../Images/Certificates/reactredux.jpg'
import js from '../../Images/Certificates/js.jpg'
import jsjquery from '../../Images/Certificates/jsJquery.jpg'
import jquery from '../../Images/Certificates/jquery.jpg'
import html from '../../Images/Certificates/html.jpg'
import htmlcss from '../../Images/Certificates/htmlcss.jpg'
import css from '../../Images/Certificates/css.jpg'
import bootstrap from '../../Images/Certificates/bootstrap.jpg'
import php from '../../Images/Certificates/php.jpg'
import phpsql from '../../Images/Certificates/phpsql.jpg'
import sql from '../../Images/Certificates/sql.jpg'
import codeigniter from '../../Images/Certificates/codeigniter.jpg'
import linux from '../../Images/Certificates/linux.jpg'

SwiperCore.use([Navigation, Autoplay, Scrollbar, Pagination]);

function Certificates() {
  return (
    <CerificatesBlock>
      <HeaderBlock>Certificates</HeaderBlock>
      <Swiper
            // style={{maxWidth: '1000px'}}
            className='mySwiperStyle'
            spaceBetween={10}
            slidesPerView={'1'}
            direction={'horizontal'}
            speed={3000}
            freeMode={false}
            centeredSlides={false}
            autoplay={{
              "delay": 4500,
              "disableOnInteraction": false,
            }}
            //on/off slider buttons
            navigation={true}
            pagination={true}
          >
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={yandex1} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={yandex2} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={react} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={js} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={jsjquery} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={jquery} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={html} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={htmlcss} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={css} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={bootstrap} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={php} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={phpsql} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={sql} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={codeigniter} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SwiperCerificateImage src={linux} alt='screenshot'/>
            </SwiperSlide>
          </Swiper>
    </CerificatesBlock>
  )
}

export default Certificates;

const CerificatesBlock = styled.section`
  max-width: 1440px;
  width:100%;
  margin: 60px 0 0 0;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    max-width: 425px;
  }
`

const HeaderBlock = styled.h2`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 38px;
  margin: 0 0 80px 0;
  background-image: linear-gradient(90deg, #211338, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 425px) {
    font-size: 28px;
    margin: 0 0 40px 0;
  }
`

const SwiperCerificateImage=styled.img`
  max-width: 900px;
  max-height: 600px;
  object-fit: contain;
  margin: 0 0 40px 0;

  @media (max-width: 425px) {
    max-width: 420px;
    max-height: 275px;
  }
`
