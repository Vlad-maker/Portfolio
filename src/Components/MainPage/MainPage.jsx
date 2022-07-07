import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import MatrixPage from './MatrixPage';

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

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const newSlots = [...slots];
    const [reorderedSlots] = newSlots.splice(result.source.index, 1);
    newSlots.splice(result.destination.index, 0, reorderedSlots);
    updateSlots(newSlots);
  };

  return (
    <MainBlock>
      <div style={{display: 'flex'}}>
      <PhotoBlock src={photo}/>

      <div>
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
      </div>
      </div>

      <MatrixPage/>

    </MainBlock>
  )
}

export default MainPage

const MainBlock = styled.section`
  max-width: 1440px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
`;

const HeadingBlock = styled.h2 `
  margin: 0 0 20px 0;
  color: #fff;
  max-width: 720px;
  font-size: 30px;

  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 35%;
      width: 200%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
`

const TextBlock = styled.p `
  margin: 0 0 20px 0;
  max-width: 720px;
  font-size: 22px;
  animation-duration: 4s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 35%;
      width: 200%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
`
const SlotsBlock = styled.div `
  margin: 0 0 20px 0;
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
  min-width: 45px;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 70%;
  cursor: grab;
  list-style-type: none;
  display: flex;
  align-items: center;
`

const SlotItemLogo = styled.img`
  width: 56px;
  height: 56px;
  padding: 2px;
  background-size: contain;

  // :hover {
  //   transform: scale(1.2);
  // }
`
const PhotoBlock = styled.img`
  width: 190px;
  height: 190px;
  margin: 0 40px 0 0;
  border-radius: 30px;
  object-fit: cover;
  opacity: 0.8
`
