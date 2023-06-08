import arrow from './svgPacks/arrow.svg';
import grid from './svgPacks/grid.svg';
import React from 'react';
import '../styles/App.css';

function ArrowGrid(){
  return(
  <>
  <input type="checkbox" name="" id="check" />
    <label htmlFor="check" id="btn">
      <img src={grid} alt="" srcset="" />
    </label>
    <label htmlFor="check" id="cancel">
      <img src={arrow} alt="" srcset="" />
    </label>
  </>
  );
}
export default ArrowGrid;