import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './Animation.css'
import Popup from '../Popup/Popup';

import git from '../../Images/git.svg';
import react from '../../Images/react-js.svg';
import js from '../../Images/js.svg';
import css from '../../Images/css.svg';
import html from '../../Images/html.svg';
import redux from '../../Images/redux.svg';
import node from '../../Images/node.svg';
import mongo from '../../Images/mongo.svg';
import sass from '../../Images/sass.svg';
import vscode from '../../Images/vs.svg';
import figma from '../../Images/figma.svg';

import photo from '../../Images/photo.jpg'


const MainPage = ({mockSlots}) => {

  const [slots, updateSlots] = useState(mockSlots);
  const [PopupActive, setPopupActive] = useState(false);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const newSlots = [...slots];
    const [reorderedSlots] = newSlots.splice(result.source.index, 1);
    newSlots.splice(result.destination.index, 0, reorderedSlots);
    updateSlots(newSlots);
  };

  return (
    <MainBlock>

      <AboutMeBlock>

            <PhotoBlock src={photo}/>

            <InfoBlock>
              <HeadingBlock>
                Hi, I'm Vlad, frontend-developer !
              </HeadingBlock>
              <TextBlock>
                I specialize in building interface for web applications. In my work I mostly use React with Redux and Styled-components.
                Figma, Git and VSCode are also indispensable assistants in my work.
              </TextBlock>
              <TextBlock>
                Technologies, tools and practices that I also use:
              </TextBlock>

              <SlotsBlock>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters" direction="horizontal">
                      {(provided) => (
                        <SlotsList {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {slots.map(({slotId, name}, index) => {
                              return (
                                <Draggable key={slotId} draggableId={slotId} index={index}>
                                  {(provided) => (
                                    <SlotsItem ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                        <SlotItemLogo
                                          src={name === 'Git' ? git :
                                              name === 'ReactJS' ? react :
                                              name === 'JS' ? js :
                                              name === 'CSS' ? css :
                                              name === 'HTML' ? html :
                                              name === 'Redux' ? redux :
                                              name === 'NodeJS' ? node :
                                              name === 'MongoDB' ? mongo :
                                              name === 'SCSS' ? sass :
                                              name === 'Figma' ? figma :
                                              name === 'VSCode' ? vscode :
                                          null}
                                        />
                                    </SlotsItem>
                                  )}
                                </Draggable>
                              );
                            })}
                          {provided.placeholder}
                        </SlotsList>
                      )}
                    </Droppable>
                  </DragDropContext>
              </SlotsBlock>
            </InfoBlock>

            <div className='animation_block'>
                <div className="spinner-box">
                  <div className="blue-orbit leo"/>
                  <div className="green-orbit leo"/>
                  <div className="red-orbit leo"/>
                  <div className="white-orbit  leo"/>
                  <div className="white-orbit-2  leo"/>
                  <div className="white-orbit-3  leo"/>
                </div>
            </div>

      </AboutMeBlock>

      <ContactButton type="button" onClick={() => setPopupActive(true)}>My contacts</ContactButton>

      <Popup active={PopupActive} setActive={setPopupActive}>
        <PopupCloseBtn type='button' onClick={() => setPopupActive(false)}>+</PopupCloseBtn>
          <ContactsList>
              <ContactsItem>
                <ContactsParagraph>Phone: 8(981)-986-02-79</ContactsParagraph>
              </ContactsItem>
              <ContactsItem>
                <ContactsParagraph>Telegram: @OGvLA</ContactsParagraph>
              </ContactsItem>
              <ContactsItem>
                <ContactsParagraph>Email: skateislife@mail.ru</ContactsParagraph>
              </ContactsItem>
              <ContactsItem>
              <ContactsLink className="aboutMe__link" href="https://github.com/Vlad-maker" target="_blank" rel="noreferrer">
                Github
              </ContactsLink>
              </ContactsItem>
              <ContactsItem>
              <ContactsLink className="aboutMe__link" href="https://www.facebook.com/profile.php?id=100000976609772" target="_blank" rel="noreferrer">
                Facebook
              </ContactsLink>
            </ContactsItem>
            <ContactsItem>
              <ContactsLink className="aboutMe__link" href="https://spb.hh.ru/resume/bd17cd1bff08c5fac20039ed1f6d3471513377" target="_blank" rel="noreferrer" >
                HH.ru
              </ContactsLink>
            </ContactsItem>
          </ContactsList>
      </Popup>

    </MainBlock>
  )
}

export default MainPage;

const MainBlock = styled.section`
  max-width: 1440px;
  margin-top: 80px;
  // padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 375px) {
    max-width: 375px;
    margin-top: 40px;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-width: 425px;
    margin-top: 40px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 768px;
    margin: 40px auto 0;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
    margin: 60px auto 0;
  }
`;

const AboutMeBlock = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 375px) {
    max-width: 375px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-width: 428px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 740px;
    margin-top: 40px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 1024px;
  }
`;

const InfoBlock = styled.div`

  @media (max-width: 375px) {
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 0 0;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-width: 425px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 0 0;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 425px;
    margin: 0;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 700px;
  }
`

const HeadingBlock = styled.h2 `
  margin: 0 0 30px 0;
  color: #fff;
  max-width: 720px;
  font-size: 30px;

  @media (max-width: 428px) {
    max-width: 425px;
    font-size: 22px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width: 425px;
    font-size: 26px;
    text-align: center;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 420px;
    font-size: 23px;
    text-align: center;
  }
`

const TextBlock = styled.p `
  margin: 0 0 30px 0;
  max-width: 720px;
  font-size: 22px;

  @media (max-width: 428px) {
    margin: 0 0 40px 0;
    max-width: 420px;
    font-size: 18px;
    text-align: center;
    margin: 0 0 20px 0;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    margin: 0 0 40px 0;
    max-width: 425px;
    font-size: 19px;
    text-align: center;
    margin: 0 0 20px 0;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 420px;
    font-size: 18px;
    text-align: center;
  }
`


const SlotsBlock = styled.div `
  margin: 0;
  max-width 720px;

  @media (max-width: 375px) {
    max-width: 375px;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-width 425px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width 425px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width: 420px;
  }
`
const SlotsList = styled.ul`
  min-height: 45px;
  padding: 0 0 0 10px;
  display: flex;
  justify-content: center;
  max-width: 720px;

  @media (max-width: 375px) {
    max-width 370px;
    padding: 0 0 0 4px;
    margin: 0 0 40px 0;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    max-width 400px;
    padding: 0 0 0 4px;
    margin: 0 0 40px 0;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    max-width 425px;
    padding: 0;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    max-width 420px;
    padding: 0;
  }
`
const SlotsItem = styled.div `
  margin: 0 11px 0 0;
  position: relative;
  list-style: none;
  min-width: 47px;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 70%;
  cursor: grab;
  list-style-type: none;
  display: flex;
  align-items: center;

  @media (max-width: 375px) {
    min-width: 23px;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    min-width: 25px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    min-width: 25px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    min-width: 25px;
  }
`

const SlotItemLogo = styled.img`
  width: 50px;
  height: 50px;
  background-size: contain;

  @media (max-width: 375px) {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 801px) and (max-width: 1366px) {
    width: 33px;
    height: 33px;
  }
`


const PhotoBlock = styled.img`
  width: 290px;
  height: 290px;
  margin: 0;
  border-radius: 30px;
  object-fit: cover;
  opacity: 0.8;

  @media (max-width: 375px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 376px) and (max-width: 428px) {
    width: 375px;
    height: 375px;
  }

  @media (min-width: 429px) and (max-width: 800px) {
    width: 280px;
    height: 280px;
  }
`

const ContactButton = styled.button`
  border: none;
  margin: 80px auto 0;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  font-size: 22px;
  color: rgb(255, 255, 255);
  background-color: #2ab863;
    :hover {
      background-color: #1ba853;
      cursor: pointer;
      transition: 0.2s linear;
    }

    @media (max-width: 428px) {
      margin-top: 0px;
      font-size: 18px;
      width: 150px;
      height: 40px;
    }

    @media (min-width: 429px) and (max-width: 800px) {
      margin-top: 40px;
      font-size: 19px;
      width: 170px;
      height: 45px;
    }
`

const PopupCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 35px;
  padding: 0;
  position: fixed;
  right: 15px;
  top: 3px;
  cursor: pointer;
  transform: rotate(45deg);
    :hover {
      color: #adb3af;
    }
`

const ContactsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  padding: 0;
`

const ContactsItem = styled.li`
  margin: 3px;
`

const ContactsParagraph = styled.p`
  font-size: 20px;
  margin: 0;
  color:#f5f5f5;
`

const ContactsLink = styled.a`
  font-size: 20px;
  line-height: 17px;
  color: #f5f5f5;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.1s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
    :hover {
      opacity: 0.6;
    }
`
