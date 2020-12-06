import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faFrownOpen, faGrinWink, faTired } from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery';

class DataIndonesia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items1: [],
            isLoading: true
        }
    }

    componentDidMount() {
      Promise.all([
          fetch('https://indonesia-covid-19.mathdro.id/api')
      ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => this.setState({
          items1: data1,
          isLoading: false
      }));

      $('.status').each(function(i) {
        setTimeout(function(){
          $('.status').eq(i).addClass('visible');
        },100 * (i+1));	
      });
    } 

    componentDidUpdate() {
      $('.status').each(function(i) {
        setTimeout(function(){
          $('.status').eq(i).addClass('visible');
        },100 * (i+1));	
      });
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate() < 10 ? '0' + a.getDate() : a.getDate();;
        var hour = a.getHours() < 10 ? '0' + a.getHours() : a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    render(){
        const { items1, isLoading } = this.state;
    
        if (isLoading) {
            return (
            <div>
                <p className="text-muted">Sedang mencari data..</p>
            </div>
            );
        }

        return (
        <div>
            <div className="covid row justify-content-center text-left">

              <div className="col-lg-3">
                <div className="card bg-dark mb-4 shadow status">
                  <div className="card-body">
                    <p className="card-text">
                      Terkonfirmasi Positif<br/>
                      <span className="font-weight-bold lead">{this.numberWithCommas(items1.jumlahKasus)}</span>
                      <FontAwesomeIcon icon={faFrown} size="3x" className="float-right"/><br/>Orang
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card bg-primary mb-4 shadow status">
                  <div className="card-body">
                    <p className="card-text">
                      Dalam Perawatan<br/>
                      <span className="font-weight-bold lead">{this.numberWithCommas(items1.perawatan)}</span>
                      <FontAwesomeIcon icon={faFrownOpen} size="3x" className="float-right"/><br/>Orang
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card bg-success mb-4 shadow status">
                  <div className="card-body">
                    <p className="card-text">
                      Sembuh<br/>
                      <span className="font-weight-bold lead">{this.numberWithCommas(items1.sembuh)}</span>
                      <FontAwesomeIcon icon={faGrinWink} size="3x" className="float-right"/><br/>Orang
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card bg-danger mb-4 shadow status">
                  <div className="card-body">
                    <p className="card-text">
                      Meninggal<br/>
                      <span className="font-weight-bold lead">{this.numberWithCommas(items1.meninggal)}</span>
                      <FontAwesomeIcon icon={faTired} size="3x" className="float-right"/><br/>Orang
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <p className="small text-muted">Pembaruan Terakhir : {this.timeConverter(items1.lastUpdate)}</p>
        </div>
        )
    }
}

export default DataIndonesia;