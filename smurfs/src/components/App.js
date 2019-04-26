import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getSmurfs, deleteSmurf } from '../actions';
import SmurfList from '../components/SmurfList';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount() {
    this.props.getSmurfs();
  }

  deleteItem = (e, index) => {
    e.preventDefault()
    this.props.deleteSmurf(index)
}

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Loader />
        <SmurfList smurfs={this.props.smurfs} delete={this.deleteItem} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(App);
