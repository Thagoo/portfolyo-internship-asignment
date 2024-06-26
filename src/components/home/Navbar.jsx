import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { theme } = useTheme();

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6 valign">
            <Link href="#0" className="logo icon-img-60">
              <img src={`${theme}/assets/imgs/logo.png`} alt="" />
            </Link>
          </div>

          <div className="col-md-6 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="#0" className="butn butn-md butn-bord radius-5">
                  <span>By Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
