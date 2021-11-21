import * as React from 'react';
import { hot } from 'react-hot-loader';
import Dashboard from '../features/dashboard';

import { app } from './App.style';

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className={app}>
        <Dashboard />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
