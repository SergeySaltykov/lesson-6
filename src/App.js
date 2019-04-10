import UserContainer from 'modules/user/containers/UserContainer/UserContainer';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import initStore from 'store'

const store = initStore();
class App extends Component {
  render() {
    return (
        <Provider  store={store}>
            <UserContainer />
        </Provider>
    );
  }
}

export default App;
