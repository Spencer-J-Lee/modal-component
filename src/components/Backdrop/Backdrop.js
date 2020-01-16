import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props => {
  const backdropClasses = [classes.Backdrop];

  if (props.show) {
    backdropClasses.push(classes.Active);
  }

  return (
    <div onClick={props.clicked} className={backdropClasses.join(' ')}></div>
  )
};

export default backdrop;
