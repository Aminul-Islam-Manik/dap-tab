import React from 'react';
import './TabContent.css';

const TabContent = ({data, active, handleCopyContent}) => {
  // console.log(t.ta)
    return (
        <div>
          <div className='copy-btn'>
            {/* <button>Copy</button> */}
            {data[active].tabs_content}

            <div className='btn'>
              {
                data[active].tabs_tittle === 'Preview' ? ('') : (<button onClick={handleCopyContent}>Copy</button>)
              }
            </div>
          </div>
        </div>
    );
};

export default TabContent;