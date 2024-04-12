import React from 'react';
import './timpuBags.css';
import bag from '../Image/Frame 5591.png';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const TimpuBags = () => {
  return (
    <div className='timpubags'>
      <div className='bags'>
        <div className='bagImage'>
          <img src={bag} alt="Bag" />
          <div className='product'>
            <div className='product-info'>
              <p className='para'>Bags on Timpu</p>
              <VerifiedOutlinedIcon style={{ color: '#F2CF18', marginLeft: '10px', fontSize: '18px', borderRadius: '50%', background: 'yellow' }} />
            </div>
            <p className='productcount'>1123 products
              <ArrowForwardIosOutlinedIcon style={{ fontSize: '20px' }} /></p>
          </div>
        </div>
        <div className='bestbag'>Or set filter and help us choose the best bag for you.</div>
      </div>
      <p className='messagetime'>4:48 PM</p>

      <div className='files'>
        <div className='filter'>
          <div className='selFilter'>Select Filters</div>
          <div className='select'><TuneOutlinedIcon />Filters</div>
        </div>
      </div>
      <div className='anchorlinks'>
        <a href="#" className="link">
          <span>Stop-Long</span>
          <CloseOutlinedIcon style={{ fontSize: '20px' }} />
        </a>
        <a href="#" className="link">
          <span>Colour</span>
          <CloseOutlinedIcon style={{ fontSize: '20px' }} />
        </a>
        <a href="#" className="link">
          <span>Size</span>
          <CloseOutlinedIcon style={{ fontSize: '20px' }} />
        </a>
        <a href="#" className="link">
          <span>Brand</span>
          <CloseOutlinedIcon style={{ fontSize: '20px' }} />
        </a>
        <a href="#" className="link">
          <span>Material</span>
          <CloseOutlinedIcon style={{ fontSize: '20px' }} />
        </a>
      </div>
    </div>
  );
}

export default TimpuBags;
