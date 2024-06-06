import React from 'react';
import './Content.css'

const Content = ({tabData, ac}) => {
    // console.log(tabData[0].tab_content)

    const handleCopyContent = () => {
        const content = tabData[ac].tab_content;
        navigator.clipboard.writeText(content)
          .then(() => alert('Content copied to clipboard!'))
          .catch((error) => console.error('Failed to copy content: ', error));
      };
    return (
        <div className='content'>
            <div className="copy-btn">
            {
                tabData[ac].tab_content
            }
                    <div className='btn'>
                    {
                        tabData[ac].tab_btn_tittle === 'Preview' ? ('') : (<button onClick={handleCopyContent}>Copy</button>)
                    }
                    </div>
            </div>
        </div>
    );
};

export default Content;