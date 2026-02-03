import React, { useState } from "react";

const NewsTabs = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <aside className="right-content">
      <div className="tabs">
        <button
          className={activeTab === "news" ? "active" : ""}
          onClick={() => setActiveTab("news")}
        >
          Latest News
        </button>
        <button
          className={activeTab === "events" ? "active" : ""}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
        <button
          className={activeTab === "announce" ? "active" : ""}
          onClick={() => setActiveTab("announce")}
        >
          Announcements
        </button>
      </div>

      {activeTab === "news" && (
        <div className="news">
          <h3>International Human Rights Day</h3>
          <img src="/assets/images/event1.svg" alt="Event" style={{width:'100%',height:120,objectFit:'cover',borderRadius:6}} />
          <p>
            The college celebrated International Human Rights Day with students
            and faculty members.
          </p>
        </div>
      )}
    </aside>
  );
};

export default NewsTabs;
