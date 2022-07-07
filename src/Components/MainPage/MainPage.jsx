import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Git from '../../Images/git.svg'


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
                                <SlotItemLogo src={name === 'Git' ? Git : null}/>
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

    </MainBlock>
  )
}

export default MainPage

const MainBlock = styled.section`
  max-width: 1440px;
  margin-top: 40px;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
`;

const HeadingBlock = styled.h2 `
  margin: 0 0 20px 0;
  color: #fff;
  max-width: 720px;

  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 80%;
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
  animation-duration: 4s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 80%;
      width: 200%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
`
const SlotsBlock = styled.div `
  margin: 0 0 20px 0;
`
const SlotsList = styled.ul`
  min-height: 45px;
  padding: 0;
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

`
