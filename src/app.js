// Created by Othmane Blial
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


// import React-Redux, Redux, Redux-Thunk
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// import Reducers
import reducers from './reducers';

// import views
import FullPage from './views/FullPage';



//create store with Middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }



  componentDidMount() {


  }

  render() {



    return (

      <Provider store={store}>
        <div>
          <FullPage />
        </div>
      </Provider>

    );
  }

}

export default App;


ReactDOM.render(
      <div>
        <App />
      </div>
, document.getElementById('app'));
