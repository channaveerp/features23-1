import React, { useState } from "react";
import "./Nav.css";
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState();

  const tabs = [
    {
      id: 1,
      tabTitle: "tab1",
      title: "title1",
      content: "a",
    },
    {
      id: 2,
      tabTitle: "tab2",
      title: "title2",
      content: "b",
    },
    {
      id: 3,
      tabTitle: "tab3",
      title: "title3",
      content: "c",
    },
  ];

  const handlieClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, index) => {
          return (
            <div>
              <button
                key={index}
                id={tab.id}
                disabled={currentTab === `${tab.id}`}
                onClick={handlieClick}
              >
                {tab.tabTitle}
              </button>
            </div>
          );
        })}
      </div>
      <div className="content">
        {tabs.map((tab, i) => {
          return (
            <div key={i} id={tab.id}>
              {currentTab === `${tab.id}` && (
                <div>
                  <p>{tab.title}</p>
                  {/* <p>{tab.content}</p> */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tabs };
