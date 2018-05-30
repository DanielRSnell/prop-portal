import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Row } from 'antd';
import MainNav from './components/nav'
import home from './pages/home';
import Register from './pages/register';

class App extends Component {
  render() {
    return (
      <Layout style={{height: "100vh"}}>
      <BrowserRouter>
      <Row>
      <MainNav />
      <Route exact={true} path="/" component={home} />
      <Route exact={true} path="/register" component={Register} />
      </Row>
      </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
