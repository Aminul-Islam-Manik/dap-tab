import React, { useState } from 'react';
import Content from '../Content/Content';
import './NewTab.css';


const NewTab = ({item}) => {
    const [ac, setAc] = useState(0);
    const tabData = item.summary;
    console.log(tabData[0])
    
    const btnClicked = (index) =>{
        // console.log(id)
        setAc(index)
    }

    return (
        <div>
            <div className="tab">
                {
                    tabData.map((da, index) => (<button key={da.id} onClick={()=> btnClicked(index)}>{da.tab_btn_tittle}</button>))
                }
            </div>

            <Content tabData={tabData} ac={ac}></Content>
        </div>
    );
};

export default NewTab;