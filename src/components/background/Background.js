import React from 'react';
import './Background.css'

const background = props =>(
  props.show ? <div className={'Background'} onClick={props.clicked}/> :null
);
export default background;