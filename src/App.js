import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Final } from './finalStep';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      { path: '/steps/step1', component: Step1 },
      { path: '/steps/step2', component: Step2 },
      { path: '/steps/step3', component: Step3 },
      { path: '/steps/step4', component: Final },
    ];
    this.state = {
      step1: { value: '' },
      step2: { value: '' },
      step3: { value: '' },
    };
  }

  goBack = () => {
    const { routes } = this;
    const { location, history } = this.props;
    routes.forEach((route, index) => {
      if (route.path === location.pathname && index !== 0) {
        history.push(routes[index - 1].path);
      }
    });
  };

  goNext = (data) => {
    const { location, history } = this.props;
    const { routes } = this;
    this.setState(data);
    routes.forEach((route, index) => {
      if (route.path === location.pathname && index !== routes.length - 1) {
        history.push(routes[index + 1].path);
      }
    });
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.pathname !== '/steps/step1') {
      history.replace('/steps/step1');
    }
  }

  render() {
    const results = Object.values(this.state).map(step => step.value);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          {this.routes.map(route => (
            <Route key={route.path} path={route.path} render={(props) => (
              <route.component
                values={this.state}
                goBack={this.goBack}
                goNext={this.goNext}
                results={results}
              />
            )}
            />
          ))}
          <Redirect to="/steps/step1" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
