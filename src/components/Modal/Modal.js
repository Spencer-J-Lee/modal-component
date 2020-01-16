import React from 'react';
import classes from './Modal.module.css';

const modal = props => {
  const modalClasses = [classes.Modal]

  if (props.show) {
    modalClasses.push(classes.Active);
  }

  return (
    <div className={modalClasses.join(' ')}>
      <p>Username</p>
      <input type="text"></input>

      <p>Password</p>
      <input type="text"></input>

      <div className={classes.Btns}>
        <button>Login</button>
        <button onClick={props.clicked}>Cancel</button>
      </div>
    </div>
  );
};

export default modal;
