import React from 'react';
import './pageLeft.css';
const topImg = require('../assets/wemeet_top.png');
const btnLeftImg = require('../assets/wemeet_btn_left.png');
const btnRightImg = require('../assets/wemeet_btn_right.png');

export default class PageLeft extends React.Component {
  render() {
    return (
      <div className='page_left_box'>
        {/* top */}
        <div className='page_left_top_box'>
          <img className='page_left_top_img' src={topImg} alt="img_error" />
        </div>
        {/* bottom */}
        <div className='page_left_bottom_box'>
          {/* btn left */}
          <div className='page_left_bottom_btn'>
            <img className='page_left_bottom_btn' src={btnLeftImg} alt="img_error" />
          </div>
          <div className='page_left_bottom_btn'>
            <img className='page_left_bottom_btn' src={btnRightImg} alt="img_error" />
          </div>
        </div>
      </div>
    );
  }
}