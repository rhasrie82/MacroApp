import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Macrofit" scroll>
              <Navigation>
                  <Link to="/journal">Journal</Link>
                  <Link to="/shopping">Shopping List</Link>
                  <Link to="/search">Search</Link>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/">Home</Link>
              </Navigation>
          </Header>
          <Drawer title="Macrofit">
              <Navigation>
                  <Link to="/journal">Journal</Link>
                  <Link to="/shopping">Shopping List</Link>
                  <Link to="/search">Search</Link>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/">Home</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>

    );
  }
}

export default App;
