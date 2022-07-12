import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react';
import SwiperCore, { Navigation, Autoplay, Scrollbar, Pagination } from 'swiper';
import "../../../node_modules/swiper/swiper-bundle.css";
import './SwiperStyles.css';

import Famiry1 from '../../Images/Projects/Famiry/Famiry1.png';
import Famiry2 from '../../Images/Projects/Famiry/Famiry2.png';
import Famiry3 from '../../Images/Projects/Famiry/Famiry3.png';

SwiperCore.use([Navigation, Autoplay, Scrollbar, Pagination]);

function Projects() {
  return (
    <ProjectPage>

      <ProjectBlock>
        <ProjectPartInfo>
          <ProjectInfoName>
            Famiry
          </ProjectInfoName>
          <ProjectInfoCaption>
            Free online service for building a family tree
          </ProjectInfoCaption>
          <ProjectInfoLink href='https://famiry.ru/'>
            Famiry site
          </ProjectInfoLink>
          <ProjectInfoLink href='https://famiry.ru/tree'>
            Project
          </ProjectInfoLink>
          <ProjectInfoDescription>
            I started my way in commercial development with a Famiry project.
            The goal of the project was to create a service for building a family tree.
            I was developing an interface for creating and editing a person's card.
            I met and learned how to configure such libraries as
              <a href='https://react-hook-form.com/' style={{textDecoration: 'none', color:'#2f76cc' }}> React Hook Form </a>
            and <a href='https://react-hook-form.com/' style={{textDecoration: 'none', color:'#2c76d1' }}> React-beautiful-dnd </a>
            , honed the skill of working with Rest API and, and in general with ReactJS.
            I also got acquainted with Jira and tried myself in team development, by the way, for code version control, we used Bitbucket.
            The result of our work can be evaluated on the company's website at the link above.

          </ProjectInfoDescription>
        </ProjectPartInfo>

        <ProjectPartSlides>
          <Swiper
            className='project__swiper'
            spaceBetween={10}
            slidesPerView={'auto'}
            direction={'horizontal'}
            speed={3000}
            freeMode={false}
            centeredSlides={false}
            autoplay={{
              "delay": 3500,
              "disableOnInteraction": false,
            }}
            //on/off slider buttons
            navigation={false}
            pagination={true}
          >
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={Famiry1} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={Famiry2} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={Famiry3} alt='screenshot'/>
            </SwiperSlide>
          </Swiper>
        </ProjectPartSlides>

      </ProjectBlock>

      <ProjectBlock>

      <ProjectPartSlides>
          <Swiper
            className='project__swiper'
            spaceBetween={10}
            slidesPerView={'auto'}
            direction={'horizontal'}
            speed={3000}
            freeMode={false}
            centeredSlides={false}
            autoplay={{
              "delay": 4000,
              "disableOnInteraction": false,
            }}
            //on/off slider buttons
            navigation={false}
            pagination={true}
          >
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={Famiry1} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={Famiry2} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={Famiry3} alt='screenshot'/>
            </SwiperSlide>
          </Swiper>
        </ProjectPartSlides>

        <ProjectPartInfo>
          <ProjectInfoName>
            Famiry
          </ProjectInfoName>
          <ProjectInfoCaption>
            Free online service for building a family tree
          </ProjectInfoCaption>
          <ProjectInfoLink href='https://famiry.ru/'>
            Famiry site
          </ProjectInfoLink>
          <ProjectInfoLink href='https://famiry.ru/tree'>
            Project
          </ProjectInfoLink>
          <ProjectInfoDescription>
            I started my way in commercial development with a Famiry project.
            The goal of the project was to create a service for building a family tree.
            I was developing an interface for creating and editing a person's card.
            I met and learned how to configure such libraries as
              <a href='https://react-hook-form.com/' style={{textDecoration: 'none', color:'#2f76cc' }}> React Hook Form </a>
            and <a href='https://react-hook-form.com/' style={{textDecoration: 'none', color:'#2c76d1' }}> React-beautiful-dnd </a>
            , honed the skill of working with Rest API and, and in general with ReactJS.
            I also got acquainted with Jira and tried myself in team development, by the way, for code version control, we used Bitbucket.
            The result of our work can be evaluated on the company's website at the link above.

          </ProjectInfoDescription>
        </ProjectPartInfo>



      </ProjectBlock>



    </ProjectPage>
  )
}

export default Projects;

const ProjectPage = styled.section`
  margin: 80px 0 0 0;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProjectBlock = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 100px 0;
`
const ProjectPartInfo = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // height: 450px;
`
const ProjectPartSlides = styled.div`
  max-width: 880px;
  width: 100%;
`
const ProjectInfoName = styled.h3`
  max-width: 500px;
  width: 100%;
  margin: 0 0 10px 0;
  font-size: 34px;
`
const ProjectInfoLink = styled.a`
  max-width: 500px;
  width: 100%;
  font-size: 17px;
  text-decoration: none;
  color: #63dba9;
  cursor: pointer;
  :hover {
    color: #27a182;
  }
`
const ProjectInfoDescription = styled.p`
  max-width: 500px;
  width: 100%;
  font-size: 20px;
  margin: 30px 0 0 0;
`
const ProjectInfoCaption = styled.p`
  max-width: 500px;
  width: 100%;
  margin: 0;
  font-size: 22px;
  margin: 0 0 30px 0;
`

const SwiperImage = styled.img`
  object-fit: contain;
  max-width: 820px;
  max-height: 420px;
  border-radius: 10px;
`

