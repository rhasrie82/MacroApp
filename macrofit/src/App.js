import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Macrofit" scroll>
              <Navigation>
                  <a href="/">Journal</a>
                  <a href="/">Shopping List</a>
                  <a href="/">Search</a>
                  <a href="/">About Us</a>
              </Navigation>
          </Header>
          <Drawer title="Macrofit">
              <Navigation>
                  <a href="/">Journal</a>
                  <a href="/">Shopping List</a>
                  <a href="/">Search</a>
                  <a href="/">About Us</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
          </Content>
      </Layout>
  </div>

    );
  }
}

export default App;
