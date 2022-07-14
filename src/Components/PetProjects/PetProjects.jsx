import React from 'react';
import styled from 'styled-components';

function PetProjects() {

  return (
    <PetProjectMainBlock>

      <HeaderBlock>Pet-Projects</HeaderBlock>

      <BlockHeading>
        HTML/CSS
      </BlockHeading>

      <PetProjectFlexBlock>

        <PetProjectBlock>
          <PetProjectHeading >
            How to Learn
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/how-to-learn/'>
            HowToLearn
          </PetProjectLink>
          <PetProjectDescription>
            My first project completed as part of a web development course from Yandex Practicum.
            A simple landing page about modern and effective approaches to learning.
            The project was made using html5 and css3 with animations.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Russian Travel
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/russian-travel/'>
            RussianTravel
          </PetProjectLink>
          <PetProjectDescription>
            Project "Russian Travel" with a description of the sights. It actively uses flex-box and grid-layout technologies, cross-browser and adaptive layout.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            WebCinema
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/Webcinema/index.html'>
            WebCinema
          </PetProjectLink>
          <PetProjectDescription>
            Cinema website interface developed on html5 and css3 with adaptive layout.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            KinoMonster
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/KinoBootstrap/index.html'>
            KinoMonster
          </PetProjectLink>
          <PetProjectDescription>
            Cinema website interface developed on html5 and css bootstrap framework. Adaptive layout.
          </PetProjectDescription>
        </PetProjectBlock>

      </PetProjectFlexBlock>

      <BlockHeading>
        JavaScript
      </BlockHeading>

      <PetProjectFlexBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            To-Do List
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/To-Do-List/'>
            ToDoList
          </PetProjectLink>
          <PetProjectDescription>
            Simple To-Do List on vanilla JavaScript.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Tetris
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/Tetris-8bit/'>
            Tetris
          </PetProjectLink>
          <PetProjectDescription>
            Favorite childhood game developed on JavaScript.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Simple Algoritms
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/Simple-Algoritms/'>
            SimpleAlgoritms
          </PetProjectLink>
          <PetProjectDescription>
            Calculator application, calculates according to several simple algorithms
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Snake
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/Znake/'>
            Snake
          </PetProjectLink>
          <PetProjectDescription>
            Retro 'Snake' Game on Vanilla JavaScript
          </PetProjectDescription>
        </PetProjectBlock>

      </PetProjectFlexBlock>

      <BlockHeading>
        React/Redux + NodeJS
      </BlockHeading>

      <Warning>
        In this section some of the projects are posted on Github Pages,
        and some have their own backend and require renting a cloud server,
        unfortunately, now I'm not able to pay for a cloud server for pet projects,
        so, in these cases it will only be possible to get acquainted with the project code,
        thank you for your understanding.
      </Warning>

      <PetProjectFlexBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Chat
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/Chat/'>
            Chat
          </PetProjectLink>
          <PetProjectDescription>
            Chat application based on react, with the ability to write and delete messages, see the time the message was sent and change the theme of the application.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Shopping Cart
          </PetProjectHeading>
          <PetProjectLink href='https://vlad-maker.github.io/ShoppingBasket/'>
            ShoppingCart
          </PetProjectLink>
          <PetProjectDescription>
            A shopping cart written to learn the basics of React Redux.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Movies Explorer
          </PetProjectHeading>
          <PetProjectLink href='https://github.com/Vlad-maker/movies-explorer-frontend'>
            MoviesExplorerFrontend
          </PetProjectLink><br/>
          <PetProjectLink href='https://github.com/Vlad-maker/movies-explorer-api'>
            MoviesExplorerBackend
          </PetProjectLink>
          <PetProjectDescription>
            Graduation project for a course on web development from Yandex.Practicum.
            The project contains a short portfolio of the student with examples of completed work,
            and after registration, the Beatfilm movie search service is available.
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Mesto
          </PetProjectHeading>
          <PetProjectLink href='https://github.com/Vlad-maker/react-mesto-api-full'>
            Mesto Frontend + Api
          </PetProjectLink><br/>
          <PetProjectLink href='https://vlad-maker.github.io/react-mesto-auth/#/sign-up'>
            Mesto
          </PetProjectLink>
          <PetProjectDescription>
            Mesto is a photo gallery where you can post your photos, view and rate photos of other users.
          </PetProjectDescription>
        </PetProjectBlock>

      </PetProjectFlexBlock>



    </PetProjectMainBlock>
  )
}

export default PetProjects;

const PetProjectMainBlock = styled.section`
  max-width: 1440px;
  width:100%;
`

const HeaderBlock = styled.h2`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 38px;
  margin: 0 0 80px 0;
  background-image: linear-gradient(90deg, #3e99b3, #E3535D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Warning = styled.p`
  opacity: 0.8;

  font-size: 18px;
  background-image: linear-gradient(90deg, #E3535D, #2AA5A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 20px 0;
`
const BlockHeading = styled.h3`
  margin: 20px 0;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PetProjectFlexBlock = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PetProjectBlock = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),
              linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
  border-radius: 18px;
  text-align: center;
  transform: scale(1);
  transition: 0.2s linear;
  :hover {
    transform: scale(1.02);
    transition: 0.2s linear;
  }
`

const PetProjectHeading = styled.div`
  font-size: 23px;
  margin: 0 0 10px 0;
  background-image: linear-gradient(90deg, #FFF, #0F0FFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  cursor: default;
`

const PetProjectLink = styled.a`
  font-size: 18px;
  color: #63dba9;
  text-decoration: none;
  :hover{
    color: #27a182;
  }
`

const PetProjectDescription = styled.p`
  font-size: 19px;
  color: #fff;
  margin: 10px 0 0 0;
  cursor: default;
`
