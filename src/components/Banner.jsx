import React from 'react'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <img src="/assets/images/building.svg" alt="College Building" />
        <div className="banner-caption">WELCOME TO GWCL</div>
      </div>
      <aside className="banner-right">
        <div className="tabs-header">
          <button className="tab active">Latest News</button>
          <button className="tab">Events</button>
          <button className="tab">Announcements</button>
        </div>
        <div className="tab-content">
          <img src="/assets/images/event1.svg" alt="event" />
          <h4>Annual Sports Day - 2024</h4>
        </div>
      </aside>
    </section>
  );
};

export default Banner;
