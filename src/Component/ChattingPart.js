import React from 'react';
import './chattingPart.css';

const ChattingPart = () => {
    return (
        <div className='chattingPart'>
            <div className='chatTime'>
                <div className='chat'>
                    <span className='content'>Hi Sam! I am your personal shopping assistant, how can I help you today?</span>
                </div>
            </div>
            <p className='time'>4:45 PM</p>

            <div className='replies'>
                <div className='reply'>
                    <div className='replytext'>
                        <span className='replycontent'>I am looking for a handbag with a long strap.</span>
                    </div>
                </div>
                <p className='replytime'>4:46 PM</p>

            </div>
        </div>
    );
}

export default ChattingPart;
