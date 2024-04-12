import React from 'react';
import './footer.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import logo from '../Image/Logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='type'>
          <input type="text" placeholder="Type message" />
        </div>
        <div className='arrow'>
          <ArrowForwardIosOutlinedIcon style={{ color: 'white' }} />
        </div>
      </div>
      <div className='info'>
        <div className='power'>Powered by <span className='ai'>Krunk.ai</span></div>
        <img src={logo} />

      </div>
    </div>
  );
}

export default Footer;
