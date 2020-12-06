import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Corona from './../../img/corona.svg';
import Droplet from './../../img/droplet.svg';
import HandWash from './../../img/hand-wash.svg';
import SocialDistance from './../../img/social-distance.svg';
import MalePatient from './../../img/male-patient.svg';
import Fever from './../../img/fever.svg';
import StayHome from './../../img/stay-at-home.svg';
 
class Faq extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Faq Body 1 */}
        <div className="faq-body-1 py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 text-center">
                <img src={Corona} alt="corona" className="w-75 mb-5 mb-md-0"/>
              </div>
              <div className="col-md-7 ml-1 ml-md-0">
                <h2>Apa itu COVID-19?</h2>
                <p>COVID-19 adalah penyakit menular yang disebabkan oleh virus korona SARS-CoV-2. Disebut korona karena bentuknya yang seperti mahkota (korona ~ crown = mahkota dalam bahasa Latin).<br/><br/>Beberapa contoh penyakit pada manusia yang disebabkan oleh virus korona antara lain MERS (Sindrom Pernafasan Timur Tengah) dan SARS (Sindrom Pernafasan Akut Parah).<br/><br/>Virus korona terbaru yang ditemukan yang ditemukan di Wuhan, Tiongkok, pada bulan Desember 2019 diberi nama SARS Coronavirus 2 (SARS-CoV-2) dan menyebabkan penyakit Coronavirus Disease 2019 (COVID-19).</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Faq Body 1 */}

        {/* Faq Body 2 */}
        <div className="faq-body-2 py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 ml-1 ml-md-0">
                <h2>Bagaimana COVID-19 menular?</h2>
                <p>Penularan terjadi melalui droplet (butir-butir tetesan cairan) dari hidung atau mulut yang menyebar saat pembawa virus COVID-19 batuk, bersin atau meler. Tetesan cairan tersebut akan menempel pada benda atau permukaan di sekitarnya. Dan kemudian masuk ke mulut, hidung atau mata. Inilah alasan pentingnya sering-sering cuci tangan dan jangan menyentuh muka dengan tangan.<br/><br/>Orang sehat dapat tertular saat tangan mereka menyentuh permukaan yang terkena tetesan tersebut dan kemudian tanpa sadar menyentuh mata, mulut, ataupun hidung (selaput lendir). Virus juga bisa masuk saat orang sehat secara tidak sengaja menghirup tetesan cairan saat si pembawa virus batuk atau bersin.</p>
              </div>
              <div className="col-md-5 text-center">
                <img src={Droplet} alt="droplet" className="w-75 mb-5 mb-md-0"/>
              </div>
            </div>
          </div>
        </div>
        {/* End Faq Body 2 */}

        {/* Faq Body 3 */}
        <div className="faq-body-3 py-5">
          <div className="container">

            <div className="row align-items-center text-center">
              <div className="col-md-12 mx-1 mx-md-0">
                <h2>Kita harus bagaimana?</h2>
              </div>
            </div>

            <div className="row text-center justify-content-center mt-5">
              <div className="col-md-4 mx-1 mx-md-0 mb-3">
                <img src={HandWash} alt="hand-wash" className="fb3 mb-3"/>
                <h5>Rajin Cuci Tangan</h5>
                <p>Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60%</p>
              </div>
              <div className="col-md-4 mx-1 mx-md-0 mb-3">
                <img src={SocialDistance} alt="social-distance" className="fb3 mb-3"/>
                <h5>Jaga Jarak</h5>
                <p>Jaga jarak dengan orang yang tampak sakit sepanjang kurang lebih 2 meter.</p>
              </div>
              <div className="col-md-4 mx-1 mx-md-0 mb-3">
                <img src={MalePatient} alt="male-patient" className="fb3 mb-3"/>
                <h5>Pakai Masker</h5>
                <p>Ketika keluar rumah, pakailah masker. Jika bersin, tutup mulut dan hidung dengan tisu dan buang tisunya sesegera mungkin.</p>
              </div>
            </div>

          </div>
        </div>
        {/* End Faq Body 3 */}

        {/* Faq Body 4 */}
        <div className="faq-body-4 py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 text-center">
                <img src={Fever} alt="fever" className="w-75 mb-5 mb-md-0"/>
              </div>
              <div className="col-md-7 ml-1 ml-md-0">
                <h2>Apa saja gejala seseorang yang terinfeksi?</h2>
                <p>Gejala yang muncul ini bergantung pada jenis virus corona yang menyerang, dan seberapa serius infeksi yang terjadi. Berikut beberapa gejala virus corona yang terbilang ringan:</p>
                <ul>
                  <li>Hidung beringus</li>
                  <li>Sakit kepala</li>
                  <li>Batuk</li>
                  <li>Sakit tenggorokan</li>
                  <li>Demam</li>
                  <li>Merasa tidak enak badan</li>
                </ul>
                <p>Hal yang perlu ditegaskan, beberapa virus corona dapat menyebabkan gejala yang parah. Infeksinya dapat berubah menjadi bronkitis dan pneumonia (disebabkan oleh COVID-19), yang mengakibatkan gejala seperti:</p>
                <ul>
                  <li>Demam yang mungkin cukup tinggi bila pasien mengidap pneumonia</li>
                  <li>Batuk dengan lendir</li>
                  <li>Sesak napas</li>
                  <li>Nyeri dada atau sesak saat bernapas dan batuk</li>
                </ul>
                <p>Infeksi bisa semakin parah bila menyerang kelompok individu tertentu. Contohnya, orang dengan penyakit jantung atau paru-paru, orang dengan sistem kekebalan yang lemah, bayi, dan lansia. </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Faq Body 4 */}

        {/* Faq Body 5 */}
        <div className="faq-body-5 py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 ml-1 ml-md-0">
                <h2>Apa yang harus kita lakukan jika mengalami gejala virus COVID-19?</h2>
                <p>Jika Anda memiliki gejala ringan dan belum pernah kontak dengan orang positif Virus Corona, COVID-‐19 atau bepergian, Anda harus lakukan isolasi mandiri di rumah selama 14 hari. Jika gejala Anda memburuk, maka Anda harus mencari pertolongan medis.<br/><br/>Jika perlu informasi lebih lanjut bisa hubungi hotline <NavLink to="/hotline">disini</NavLink>.</p>
              </div>
              <div className="col-md-5 text-center">
                <img src={StayHome} alt="stay-at-home" className="w-75 mb-5 mb-md-0"/>
              </div>
            </div>
          </div>
        </div>
        {/* End Faq Body 5 */}

      </div>
    );
  }
}
 
export default Faq;