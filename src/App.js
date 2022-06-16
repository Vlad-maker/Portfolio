import './App.css';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import { Route, Switch, useRouteMatch, useLocation  } from 'react-router-dom';

const PageWrapper = (props) => {
  return <>
    <Header />
    {props.children}
    {/* <Footer /> */}
  </>
};

function App() {

  // const { path } = useRouteMatch();
  // const location = useLocation();

  return (
    <AppContainer>
      <Switch>
        <Route path="/">
          <PageWrapper>
            
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