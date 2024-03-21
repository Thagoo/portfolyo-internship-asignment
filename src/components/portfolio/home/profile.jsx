import React from "react";

async function Profile({ about, socials }) {
  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src={about?.avatar.url} alt="" />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>

              <div className="info text-center mt-30">
                <h5>{about?.name}</h5>
                <p className="fz-13 text-u">{about?.title}</p>
              </div>
              <div className="social text-center mt-20">
                {socials.map((item, index) => (
                  <a href={item.url} key={index}>
                    {/* fa icons looked better than images  */}
                    <i className={`fab fa-${item.platform.toLowerCase()}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">{about?.name}</span>,
            <span className="bord">{about?.subTitle}</span> Based in{" "}
            <i> {about?.address.split(", ")[0]}</i>
          </h1>

          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{about?.exp_year}</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>6k</h2>
                  <p>
                    Clients <br /> Worldwide
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 skew">
                    <span>Dwonload C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
