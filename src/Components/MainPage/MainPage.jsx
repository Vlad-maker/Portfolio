import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './Animation.css'
import './PopupInfo.css'
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

        <div>
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

        <button className="contactWithMe__btn" type="button" onClick={() => setPopupActive(true)}>Contact me</button>

        <Popup active={PopupActive} setActive={setPopupActive}>
            <ul className="aboutMe__social">
                <li className="aboutMe__column">
                  <p className="aboutMe__paragraph">Phone: 8(981)-986-02-79</p>
                </li>
                <li className="aboutMe__column">
                  <p className="aboutMe__paragraph">Telegram: @OGvLA</p>
                </li>
                <li className="aboutMe__column">
                  <p className="aboutMe__paragraph">Email: skateislife@mail.ru</p>
                </li>
                <li className="aboutMe__column">
                <a className="aboutMe__link" href="https://github.com/Vlad-maker" target="_blank" rel="noreferrer">
                  Github
                </a>
                </li>
                <li className="aboutMe__column">
                <a className="aboutMe__link" href="https://www.facebook.com/profile.php?id=100000976609772" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li className="aboutMe__column">
                <a className="aboutMe__link" href="https://spb.hh.ru/resume/bd17cd1bff08c5fac20039ed1f6d3471513377" target="_blank" rel="noreferrer" >
                  HH.ru
                </a>
              </li>
              <li className="aboutMe__column">
                <a className="aboutMe__link" href="https://ucarecdn.com/f927cbe6-f21d-4e1f-a635-22db5f77564d/" target="_blank" rel="noreferrer" >
                  Budu.jobs.ru
                </a>
              </li>
            </ul>
        </Popup>

    </MainBlock>
  )
}

export default MainPage

const MainBlock = styled.section`
  max-width: 1440px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutMeBlock = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;

const HeadingBlock = styled.h2 `
  margin: 0 0 30px 0;
  color: #fff;
  max-width: 720px;
  font-size: 30px;
`

const TextBlock = styled.p `
  margin: 0 0 30px 0;
  max-width: 720px;
  font-size: 22px;
`
const SlotsBlock = styled.div `
  margin: 0;
  max-width 720px;
`
const SlotsList = styled.ul`
  min-height: 45px;
  padding: 0 auto;
  display: flex;
  max-width: 720px;
`
const SlotsItem = styled.div `
  margin: 0 11px 0 0;
  // padding: 0px 2px 0 2px;
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
`

const SlotItemLogo = styled.img`
  width: 50px;
  height: 50px;
  // padding: 2px;
  background-size: contain;
`
const PhotoBlock = styled.img`
  width: 290px;
  height: 290px;
  margin: 0;
  border-radius: 30px;
  object-fit: cover;
  opacity: 0.8
`

const InfoBlock = styled.div`

`
