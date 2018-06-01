import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Layout, Row } from 'antd';
import MainNav from './components/nav'
import home from './pages/home';
import Register from './pages/register';
import example from './pages/example';
import Request from './pages/request';
import DocUpload from './pages/docs';

// Dummy Page
import ExampleLinks from './components/example';

const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{height: "100vh"}}>
      <BrowserRouter>
      <Row>
      <Route exact={true} path="/" component={home} />
      <Route exact={true} path="/register" component={Register} />
      <Route exact={true} path="/example" component={example} />
      <Route exact={true} path="/maintenance-request" component={Request} />
      <Route exact={true} path="/upload" component={DocUpload} />
      <ExampleLinks />
      </Row>
      </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
