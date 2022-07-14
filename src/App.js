import React from 'react';
// import { Route, Switch} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import Projects from './Components/Projects/Projects';
import PetProjects from './Components/PetProjects/PetProjects';
import Certificates from './Components/Certificates/Certificates';

import { mockSlots } from './utils/mocks/mocks';

// const PageWrapper = (props) => {
//   return <>
//     <Header />
//       {props.children}
//     <Footer />
//   </>
// };

const App = () => {

  return (
    <AppContainer>
      <Header />
      <MainPage
        mockSlots={mockSlots}
      />
      <Projects/>
      <PetProjects/>
      <Certificates/>
      <Footer />
      {/* <Switch>
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
        <Route path="/certificates">
          <PageWrapper>
            <Certificates/>
          </PageWrapper>
        </Route>
      </Switch> */}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`;
