"use client"
import React, { useState } from "react";
import URLBar from "./components/URLBar";
import BrowserContent from "./components/BrowserContent";

interface Tab {
  id: number;
  url: string;
  title: string;
}

const BrowserApp: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([{ id: 1, url: "", title: "New Tab" }]);
  const [activeTab, setActiveTab] = useState<number>(1);

  const addTab = () => {
    const newTab: Tab = { id: tabs.length + 1, url: "", title: "New Tab" };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const closeTab = (id: number) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
    if (id === activeTab && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    }
  };

  const updateURL = (id: number, url: string) => {
    const updatedTabs = tabs.map((tab) =>
      tab.id === id ? { ...tab, url } : tab
    );
    setTabs(updatedTabs);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <div className="tabs flex space-x-2 bg-white p-2 rounded shadow-md w-full max-w-4xl">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer px-4 py-2 rounded-md ${
              tab.id === activeTab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab.title}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              x
            </button>
          </div>
        ))}
        <button
          onClick={addTab}
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
        >
          +
        </button>
      </div>
      <URLBar
        url={tabs.find((tab) => tab.id === activeTab)?.url || ""}
        onUrlChange={(url) => updateURL(activeTab, url)}
      />
      <BrowserContent
        url={tabs.find((tab) => tab.id === activeTab)?.url || ""}
      />
    </div>
  );
};





export default BrowserApp;
