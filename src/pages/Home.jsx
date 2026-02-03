import React from 'react'
import Banner from "../components/Banner";
import NewsTabs from "../components/NewsTabs";
import IconCircle from "../components/IconCircle";

const Home = () => {
  return (
    <>
      <Banner />

      <main className="content">
        <section className="left-content">
          <h2 className="page-title">Welcome to Late Govindrao Wanjari College of Law</h2>

          <div className="card">
            <h3>About College</h3>
            <p>
              Amar Sewa Mandal, Nagpur is an education society running various
              institutes in Nagpur region. Late Govindrao Wanjari College of Law
              (GWCL) is one among those. GWCL has been established with the
              object of creating eminent professionals in legal field with a zeal
              for excellence and faith in values. The college started on 16th
              August 2006 and since then it is running successfully under the
              able and prospective guidance of the management.
            </p>
          </div>

          <div className="action-row">
            <button className="btn-primary">Online Registration</button>
            <button className="btn-outline">Online Admission Fees</button>
          </div>
        </section>

        <NewsTabs />
      </main>

      <section className="explorer">
        <h2 className="explorer-title">Explorer</h2>
        <div className="explorer-grid">
          <div className="explorer-card">
            <IconCircle icon="courses" alt="Courses" />
            <h4>Courses</h4>
            <p className="muted">Late Govindrao Wanjari College of Law, Nagpur</p>
            <a className="read-more" href="#">Read More</a>
          </div>

          <div className="explorer-card">
            <IconCircle icon="brochure" alt="Brochure" />
            <h4>Download Brochure</h4>
            <p className="muted">Late Govindrao Wanjari College of Law, Nagpur</p>
            <a className="read-more" href="#">Read More</a>
          </div>

          <div className="explorer-card">
            <IconCircle icon="admission" alt="Admission" />
            <h4>Admission</h4>
            <p className="muted">Late Govindrao Wanjari College of Law, Nagpur</p>
            <a className="read-more" href="#">Read More</a>
          </div>
        </div>
      </section>

      {/* Features & Activities section */}
      <section className="features-section">
        <div className="features-inner">
          <h2 className="features-title">FEATURES & ACTIVITIES</h2>
          <div className="features-grid">
            <div className="tile">
              <div className="tile-overlay">Late Govindrao Wanjari College Of Law,Nagpur</div>
            </div>
            <div className="tile">
              <img src="/assets/images/event1.svg" alt="f1" />
            </div>
            <div className="tile">
              <div className="tile-overlay">Institutional Training Programme on Energy conservation</div>
            </div>

            <div className="tile">
              <img src="/assets/images/building.svg" alt="f4" />
            </div>
            <div className="tile">
              <div className="tile-overlay">Institutional Training Programme on Energy conservation by Mr. Subhash Chauhan</div>
            </div>
            <div className="tile">
              <img src="/assets/images/event1.svg" alt="f6" />
            </div>

            <div className="tile">
              <div className="tile-overlay">Late Govindrao Wanjari College Of Law,Nagpur</div>
            </div>
            <div className="tile">
              <img src="/assets/images/event1.svg" alt="f8" />
            </div>
            <div className="tile">
              <div className="tile-overlay">Late Govindrao Wanjari College Of Law,Nagpur</div>
            </div>

            <div className="tile">
              <img src="/assets/images/building.svg" alt="f10" />
            </div>
            <div className="tile">
              <div className="tile-overlay">Late Govindrao Wanjari College Of Law,Nagpur</div>
            </div>
            <div className="tile">
              <img src="/assets/images/event1.svg" alt="f12" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
