import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHome, faEnvelope, faPhoneSquare, faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render() {
        return (
        <div className="page-footer font-small mdb-color pt-4 bg-light">
            <div className="container text-center text-md-left">
                <div className="row text-md-left mt-3 pb-3 justify-content-center">

                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Siaga COVID-19</h6>
                        <p>Sumber informasi inisiatif sukarela warganet Indonesia pro-data, terdiri dari praktisi kesehatan, akademisi & profesional.</p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Situs Penting</h6>
                        <p><a href="#">WHO</a></p>
                        <p><a href="#">UNICEF Indonesia</a></p>
                        <p><a href="#">Situs Resmi Pemerintah untuk COVID-19</a></p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Kontak</h6>
                        <p><FontAwesomeIcon icon={faHome} className="mr-3"/>Bandung, Indonesia</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="mr-3"/>siagacovid@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhoneSquare} className="mr-3"/>0812-3456-789</p>
                    </div>

                </div>

                <hr/>

                <div className="row d-flex align-items-center justify-content-center text-center">

                    <div className="col-md-4">
                        <p className="small text-md-left">API from <a href="https://indonesia-covid-19.mathdro.id/api">Mathdro.id</a></p>
                    </div>

                    <div className="col-md-4">
                        <p className="small"><FontAwesomeIcon icon={faCopyright}/> 2020. Built with <FontAwesomeIcon icon={faHeart}/> by Rasyid Arazak.</p>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="#">
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="#">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="#">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="#">
                                    <FontAwesomeIcon icon={faWhatsapp}/>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}
 
export default Footer;