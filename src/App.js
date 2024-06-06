import React from 'react';
import './App.css';

import NewTab from './components/NewTab/NewTab';

function App() {

    // const data =[
    //     {
    //         tabs_tittle:"Preview",
    //         tabs_content:"Loram ipsum doller sum ",
    //     },
    //     {
    //         tabs_tittle:"HTML",
    //         tabs_content:"<div class=\"example\">\n  <p>This is an example HTML code.</p>\n</div>",
    //     },
    //     {
    //         tabs_tittle:"JSX",
    //         tabs_content:"const ExampleComponent = () => {\n  return (\n    <div className=\"example\">\n      <p>This is an example JSX code.</p>\n    </div>\n  );\n};",
    //     }
    // ]

    const data2 =[
      {
        tabb_id:1,
        tabb_heading:"know about Tab",
        summary:
        [
          {
            id:11,
            tab_btn_tittle:"Preview",
            tab_content:"This is tab111 content"
          },
          {
            id:12,
            tab_btn_tittle:"HTML",
            tab_content:"This is tab2222 content"
          },
          {
            id:13,
            tab_btn_tittle:"JSX",
            tab_content:"This is tab3333 content"
          }
        ]
      },
      {
        tabb_id:2,
        tabb_heading:"know about button",
        summary:
        [
          {
            id:21,
            tab_btn_tittle:"Preview",
            tab_content:"This is tab1 content"
          },
          {
            id:22,
            tab_btn_tittle:"HTML",
            tab_content:"This is tab2 content"
          },
          {
            id:23,
            tab_btn_tittle:"JSX",
            tab_content:"This is tab3 content"
          }
        ]
      },
      {
        tabb_id:3,
        tabb_heading:"Know about header",
        summary:
        [
          {
            id:14,
            tab_btn_tittle:"Preview",
            tab_content:"This is tab4 content"
          },
          {
            id:15,
            tab_btn_tittle:"HTML",
            tab_content:"boddy"
          },
          {
            id:16,
            tab_btn_tittle:"JSX",
            tab_content:"This is tab6 content"
          }
        ]
      },
      {
        tabb_id:4,
        tabb_heading:"Know about Slider",
        summary:
        [
          {
            id:141,
            tab_btn_tittle:"Preview",
            tab_content:"This is tab4222 content"
          },
          {
            id:152,
            tab_btn_tittle:"JS",
            tab_content:"This is tab54 content"
          },
          {
            id:163,
            tab_btn_tittle:"JSX",
            tab_content:"This is tab61 content"
          },
          {
            id:164,
            tab_btn_tittle:"CSS",
            tab_content:"This is tab62 content"
          }
        ]
      }
    ]


      
  return (
    <div className="App">
      <h1>A complete Tab guide</h1>
      {
        data2.map((item) => (<div className='tab' 
        key={item.tabb_id}>
          {item.tabb_heading}

          <NewTab item={item}></NewTab>
          </div>))
      }
    </div>
  );
}

export default App;