import React from 'react'
import robo from '../Image/Frame 5606.png'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ChattingPart from './ChattingPart';
import PopularTags from './PopularTags';
import TimpuBags from './TimpuBags';
import Footer from './Footer';
import './main.css'


const Main = () => {
    return (
        <div className='main'>
            <div className='head'>
                <div className='header'>
                    <div className='robo'>
                        <img src={robo} />
                    </div>
                    <div className='timpu'>
                        <h2>Timpu  <span className="icon-wrapper">
                            <VerifiedOutlinedIcon style={{ color: '#F2CF18', marginLeft: '10px', borderRadius: '50%', background: 'yellow' }} />
                        </span></h2>
                        <p>Chat assistant</p>
                    </div>
                </div>
                <div className='online'><FiberManualRecordIcon style={{ color: '#3FE225' }} />
                    <span className='text'>Online</span></div>

            </div>
            <ChattingPart />
            <PopularTags />
            <TimpuBags />
            <Footer/>
        </div>
    )
}

export default Main
