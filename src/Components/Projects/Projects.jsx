import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react';
import SwiperCore, { Navigation, Autoplay, Scrollbar, Pagination } from 'swiper';
import "../../../node_modules/swiper/swiper-bundle.css";
import './SwiperStyles.css';

import Famiry1 from '../../Images/Projects/Famiry/Famiry1.png';
import Famiry2 from '../../Images/Projects/Famiry/Famiry2.png';
import Famiry3 from '../../Images/Projects/Famiry/Famiry3.png';

import CF1 from '../../Images/Projects/CF/CF1.png';
import CF2 from '../../Images/Projects/CF/CF2.png';
import CF3 from '../../Images/Projects/CF/CF3.png';
import CF4 from '../../Images/Projects/CF/CF4.jpg';
import CF5 from '../../Images/Projects/CF/CF5.jpg';
import CF6 from '../../Images/Projects/CF/CF6.png';
import CF7 from '../../Images/Projects/CF/CF7.jpg';
import CF8 from '../../Images/Projects/CF/CF8.jpg';
import CF9 from '../../Images/Projects/CF/CF9.jpg';
import CF10 from '../../Images/Projects/CF/CF10.jpg';

SwiperCore.use([Navigation, Autoplay, Scrollbar, Pagination]);

function Projects() {
  return (
    <ProjectPage>

      <HeaderBlock> Commercial projects </HeaderBlock>

      <ProjectBlock>
        <ProjectPartInfo>
          <ProjectInfoName style={{marginBottom: '10px'}}>
            Famiry
          </ProjectInfoName>
          <ProjectInfoCaption>
            Free online service for building a family tree.
          </ProjectInfoCaption>
          <ProjectInfoLink href='https://famiry.ru/'>
            Famiry site
          </ProjectInfoLink>
          <ProjectInfoLink href='https://famiry.ru/tree'>
            Project
          </ProjectInfoLink>
          <ProjectInfoDescription>
            I started my way in commercial development with a Famiry project.
            The goal of the project was to create a service for building a family tree.<br/>
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
            slidesPerView={'1'}
            direction={'horizontal'}
            speed={3000}
            freeMode={false}
            centeredSlides={false}
            autoplay={{
              "delay": 3500,
              "disableOnInteraction": false,
            }}
            //on/off slider buttons
            navigation={true}
            pagination={false}
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
            slidesPerView={'1'}
            direction={'horizontal'}
            speed={3000}
            freeMode={false}
            centeredSlides={false}
            autoplay={{
              "delay": 4000,
              "disableOnInteraction": false,
            }}
            // on/off slider buttons
            navigation={true}
            pagination={false}
          >
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF1} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF2} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF3} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF4} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF5} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF6} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF7} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF8} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF9} alt='screenshot'/>
            </SwiperSlide>
            <SwiperSlide className='project__swiper_slide'>
              <SwiperImage src={CF10} alt='screenshot'/>
            </SwiperSlide>
          </Swiper>
        </ProjectPartSlides>

        <ProjectPartInfo>
          <ProjectInfoName>
            CastingForm
          </ProjectInfoName>
          <ProjectInfoCaption>
            CF is the #1 platform to book actors globally.
          </ProjectInfoCaption>
          <ProjectInfoLink href='https://www.castingform.com/'>
            Landing
          </ProjectInfoLink>
          <ProjectInfoDescription>
            I continued my way in the CastingForm project. At first I was developing a landing page.
            The result can be seen from the link above.<br/>
            Further, I developed an admin panel for managing the data of actors that we received from the database,
            and also set up a flow for registering and authorizing new users.<br/>
            At the moment, the service is still under development and under a non-disclosure agreement,
            so you can evaluate the work by screenshots. During my work in CF I mastered such libraries as
            <a href='https://swiperjs.com/' style={{textDecoration: 'none', color:'#2f76cc' }}> SwiperJS </a>,
            <a href='https://styled-components.com/' style={{textDecoration: 'none', color:'#2f76cc' }}> Styled-components </a>,
            state-manager
            <a href='https://redux.js.org/' style={{textDecoration: 'none', color:'#2f76cc' }}> Redux </a>, and many others.
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

  @media (max-width: 375px) {
    max-width: 375px;
    margin: 60px 0 0 0;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-width: 425px;
    margin: 60px 0 0 0;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 768px;
    margin: 60px auto;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
    margin: 60px auto;
  }
`

const HeaderBlock = styled.p`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 38px;
  font-weight: bolder;
  margin: 0 0 80px 0;
  color: #2AA5A0;
  // background-image: linear-gradient(90deg, #E3535D, #2AA5A0);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  @media (max-width: 428px) {
    font-size: 28px;
    margin: 0 0 40px 0;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 768px;
    margin: 0 auto 40px;
    font-size: 30px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
    margin: 0 auto 40px;
    font-size: 30px;
  }
`

const ProjectBlock = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 80px 0;

  @media (max-width: 428px) {
    flex-direction: column;
    min-height: 700px;
    margin: 0 0 60px 0;
    :last-of-type {
      flex-direction: column-reverse;
    }
  }

  @media (min-width: 429px) and (max-width: 800px) {
    flex-direction: column;
    :last-of-type {
      flex-direction: column-reverse;
    }
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    flex-direction: column;
    :last-of-type {
      flex-direction: column-reverse;
    }
  }
`
const ProjectPartInfo = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;
  margin: 0;

  @media (max-width: 375px) {
    max-width: 375px;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 376px) and  (max-width: 425px) {
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    text-align: center;
    margin: 0 auto;
    height: 370px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
    text-align: center;
    margin: 0 auto;
    height: 330px;
  }
`
const ProjectPartSlides = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0;

  @media (max-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 376px) and  (max-width: 425px) {
    max-width: 400px;
    margin: 0 auto;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    margin: 0 auto;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    margin: 0 auto;
  }
`
const ProjectInfoName = styled.h3`
  max-width: 500px;
  width: 100%;
  margin: 0;
  font-size: 34px;

  @media (max-width: 428px) {
    font-size: 24px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    font-size: 22px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
    font-size: 22px;
  }
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

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    font-size: 20px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
  }
`
const ProjectInfoDescription = styled.p`
  max-width: 500px;
  width: 100%;
  font-size: 20px;
  margin: 20px 0 0 0;

  @media (max-width: 428px) {
    font-size: 18px;
    text-align: start;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    font-size: 20px;
    text-align: start;
    margin-bottom: 20px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
    margin-bottom: 20px;
    text-align: start;
  }
`
const ProjectInfoCaption = styled.p`
  max-width: 500px;
  width: 100%;
  margin: 0;
  font-size: 22px;
  margin: 0 0 30px 0;

  @media (max-width: 428px) {
    font-size: 20px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    font-size: 20px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
  }
`

const SwiperImage = styled.img`
  object-fit: contain;
  max-width: 780px;
  max-height: 410px;
  border-radius: 10px;

  @media (max-width: 375px) {
    max-height: 175px;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-height: 185px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-height: 325px;
  }
`

