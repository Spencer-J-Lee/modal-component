import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import classes from './App.module.css';

class App extends Component {
  state = {
    modalOpen: false,
  };

  modalToggledHangler = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen }
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <button className={classes.ModalToggle} onClick={this.modalToggledHangler}>
          Toggle Modal
        </button>
        <Backdrop show={this.state.modalOpen} clicked={this.modalToggledHangler}/>
        <Modal show={this.state.modalOpen} clicked={this.modalToggledHangler}/>
      </div>
    );
  }
}

export default App;
