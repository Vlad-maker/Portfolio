import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Projects from './Components/Projects/Projects';
import PetProjects from './Components/PetProjects/PetProjects';
import Contacts from './Components/Contacts/Contacts';
import { mockSlots } from './utils/mocks/mocks';

const PageWrapper = (props) => {
  return <>
    <Header />
    {props.children}
    {/* <Footer /> */}
  </>
};

const App = () => {

  return (
    <AppContainer>
      <Switch>
        <Route exact path="/">
          <PageWrapper>
            <MainPage
              mockSlots={mockSlots}
            />
          </PageWrapper>
        </Route>
        <Route path="/projects">
          <PageWrapper>
            <Projects/>
          </PageWrapper>
        </Route>
        <Route path="/pet-projects">
          <PageWrapper>
            <PetProjects/>
          </PageWrapper>
        </Route>
        <Route path="/contacts">
          <PageWrapper>
            <Contacts/>
          </PageWrapper>
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
