import React from 'react';
import './popularTags.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const PopularTags = () => {
  return (
    <div className='popularTags'>
      <div className='populartext'>
        <p className='tags'>Popular tags for handbag</p>
        <div className='taglinks'>
          <a href="#" className="tag-link">Clutch</a>
          <a href="#" className="tag-link">Fabric lining</a>
          <a href="#" className="tag-link">Baggit </a>
          <a href="#" className="tag-link">Multi ></a>
        </div>
      </div>
    </div>
  );
}

export default PopularTags;
