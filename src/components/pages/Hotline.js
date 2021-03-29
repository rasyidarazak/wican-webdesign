import React, { Component } from "react";
import Kemenkes from "./../../img/kemenkes.png";
import Dki from "./../../img/logo-dki.png";
import Jateng from "./../../img/logo-jateng.png";
import Jatim from "./../../img/logo-jatim.png";
import Jabar from "./../../img/logo-jabar.png";
import Yogya from "./../../img/logo-yogya.jpg";

import $ from "jquery";

class Hotline extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    $(".status").each(function (i) {
      setTimeout(function () {
        $(".status").eq(i).addClass("visible");
      }, 100 * (i + 1));
    });
  }

  componentDidUpdate() {
    $(".status").each(function (i) {
      setTimeout(function () {
        $(".status").eq(i).addClass("visible");
      }, 100 * (i + 1));
    });
  }

  render() {
    return (
      <div>
        {/* Hotline Body 1 */}
        <div className="hotline-body-1 py-5">
          <div className="container">
            <div className="row text-center align-items-center">
              <div className="col-md-12">
                <h3>COVID-19 Hotline Indonesia</h3>
                <p className="lead">Layanan darurat via telepon yang disediakan oleh Kemkes dan juga Pemprov DKI Jakarta</p>
              </div>
            </div>

            <div className="row text-center mt-3">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Kemenkes} alt="kemenkes" className="mb-2" height="50" width="50" />
                    <a href="tel:0215210411">
                      <h5 className="card-title">021-5210-411</h5>
                    </a>
                    <p className="card-text small text-muted">Kementrian Kesehatan</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Kemenkes} alt="kemenkes" className="mb-2" height="50" width="50" />
                    <a href="tel:081212123119">
                      <h5 className="card-title">0812-1212-3119</h5>
                    </a>
                    <p className="card-text small text-muted">Kementrian Kesehatan</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Dki} alt="dki" className="mb-2" height="50" width="44" />
                    <a href="tel:112">
                      <h5 className="card-title">112</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov DKI Jakarta</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Dki} alt="dki" className="mb-2" height="50" width="44" />
                    <a href="tel:081388376955">
                      <h5 className="card-title">0813-8837-6955</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov DKI Jakarta</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Jateng} alt="jateng" className="mb-2" height="50" width="45" />
                    <a href="tel:024-358-0713">
                      <h5 className="card-title">024-358-0713</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Jateng</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Jateng} alt="jateng" className="mb-2" height="50" width="45" />
                    <a href="tel:082313600560">
                      <h5 className="card-title">0823-1360-0560</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Jateng</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Jatim} alt="jatim" className="mb-2" height="50" width="35" />
                    <a href="tel:0318430313">
                      <h5 className="card-title">031-843-0313</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Jatim</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Jatim} alt="jatim" className="mb-2" height="50" width="35" />
                    <a href="tel:081334367800">
                      <h5 className="card-title">0813-3436-7800</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Jatim</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Jabar} alt="jabar" className="mb-2" height="50" width="43" />
                    <a href="tel:119">
                      <h5 className="card-title">119</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Jabar</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Jabar} alt="jabar" className="mb-2" height="50" width="43" />
                    <a href="tel:08112093306">
                      <h5 className="card-title">0811-209-3306</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Jabar</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Yogya} alt="yogya" className="mb-2" height="50" width="39" />
                    <a href="tel:0274555585">
                      <h5 className="card-title">0274-555-585</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Yogya</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3">
                <div className="card mb-3 bg-light shadow-sm status">
                  <div className="card-body">
                    <img src={Yogya} alt="yogya" className="mb-2" height="50" width="39" />
                    <a href="tel:08112764800">
                      <h5 className="card-title">0811-2764-800</h5>
                    </a>
                    <p className="card-text small text-muted">Pemprov Yogya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Hotline Body 1 */}
      </div>
    );
  }
}

export default Hotline;
