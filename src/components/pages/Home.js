import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import DataProvinsi from "../api/DataProvinsi";
import DataIndonesia from "../api/DataIndonesia";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Home Body 1 */}
        <div className="home-body-1 jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h3 className="text-uppercase">Siaga COVID-19</h3>
            <p className="lead">Sumber informasi inisiatif sukarela warganet Indonesia pro-data</p>
            <hr className="hr my-4" />
            <p className="lead">Data COVID-19 Indonesia</p>
            <DataIndonesia />
          </div>
        </div>
        {/* End Home Body 1 */}

        {/* Home Body 2 */}
        <div className="home-body-2 container p-5 bg-light shadow">
          <div className="row text-center justify-content-center">
            <div className="col-md-8">
              <h5>Data Kasus COVID-19 di Indonesia Berdasarkan Provinsi</h5>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-md-12">
              <DataProvinsi />
            </div>
          </div>
        </div>
        {/* End Home Body 2 */}

        {/* Home Body 3 */}
        <div className="home-body-3 container pt-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <a href="https://covid19.go.id/daftar-rumah-sakit-rujukan" className="rs-rujukan rounded-circle mx-auto d-flex flex-wrap align-items-center mb-3 shadow"></a>
                  <p>RS Rujukan</p>
                </div>

                <div className="col-md-3">
                  <a href="https://covid19.go.id/peta-risiko" className="peta-sebaran rounded-circle mx-auto d-flex flex-wrap align-items-center mb-3 shadow"></a>
                  <p>Peta Resiko</p>
                </div>

                <div className="col-md-3">
                  <a href="https://covid19.go.id/peta-sebaran" className="grafik rounded-circle mx-auto d-flex flex-wrap align-items-center mb-3 shadow"></a>
                  <p>Grafik</p>
                </div>

                <div className="col-md-3">
                  <a href="https://covid19.go.id/vaksin-covid19" className="vaksin rounded-circle mx-auto d-flex flex-wrap align-items-center mb-3 shadow"></a>
                  <p>Perkembangan Vaksin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Home Body 3 */}

        {/* Home Body 4 */}
        <div className="home-body-4 container py-5">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <h5>Informasi Terkini</h5>
            </div>
            <div className="col-md-6 text-md-right">
              <p>
                <a href="#">
                  Lihat Semua Berita <FontAwesomeIcon icon={faArrowCircleRight} />
                </a>
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 mt-3">
              <div className="card h-100 bg-light rounded shadow-sm">
                <div className="card-body d-flex flex-column">
                  <a href="#">
                    <h5 className="card-title">Kemenkes Sebut Relawan Uji Klinis Vaksin COVID-19 Tak Alami Kendala yang Berarti</h5>
                  </a>
                  <p className="card-text">Staf Ahli Bidang Ekonomi Kesehatan Kementerian Kesehatan, Mohamad Subuh mengatakan, sampai saat ini relawan uji klinis calon vaksin COVID-19 di Bio Farma tidak mengalami..</p>
                  <p className="text-muted small text-right mb-0 mt-auto">01 Desember 2020</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <div className="card h-100 bg-light">
                <div className="card-body d-flex flex-column shadow-sm">
                  <a href="#">
                    <h5 className="card-title">Alasan Pro dan Kontra Pilkada Serentak di Tengah Pandemi COVID-19</h5>
                  </a>
                  <p className="card-text">Berbagai pro dan kontra mengiringi rencana pemerintah pusat untuk tetap menyelenggarakan Pilkada Serentak 9 Desember mendatang di tengah pandemi COVID-19..</p>
                  <p className="text-muted small text-right mb-0 mt-auto">01 Desember 2020</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <div className="card h-100 bg-light">
                <div className="card-body d-flex flex-column shadow-sm">
                  <a href="#">
                    <h5 className="card-title">Indonesia Catat Rekor Harian Kasus COVID-19</h5>
                  </a>
                  <p className="card-text">Pada Minggu (29/11/2020), Indonesia kembali mencatat rekor harian kasus COVID-19 dengan penambahan 6.267 kasus. Hal tersebut merupakan rekor kasus..</p>
                  <p className="text-muted small text-right mb-0 mt-auto">29 November 2020</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <div className="card h-100 bg-light">
                <div className="card-body d-flex flex-column shadow-sm">
                  <a href="#">
                    <h5 className="card-title">Kesembuhan Pasien COVID-19 Terus Meningkat</h5>
                  </a>
                  <p className="card-text">Dari data Kementerian Kesehatan per 27 November 2020, pasien sembuh COVID-19 hari ini bertambah lagi sebanyak 3.807 orang. Penambahan hari ini terus..</p>
                  <h5 className="text-muted small text-right mb-0 mt-auto">27 November 2020</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between mt-2">
            <div className="col-md">
              <p className="small text-muted">*Link berita tidak aktif & tidak update</p>
            </div>
          </div>
        </div>
        {/* End Home Body 4 */}
      </div>
    );
  }
}

export default Home;
