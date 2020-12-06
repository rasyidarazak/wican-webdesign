import React, { Component } from "react";

class DataProvinsi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items2: [],
            isLoading: true
        }
    }

    componentDidMount() {
        Promise.all([
            fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        ])
        .then(([res2]) => Promise.all([res2.json()]))
        .then(([data2]) => this.setState({
            items2: data2,
            isLoading: false
        }));
    }

    render(){
        const { items2, isLoading } = this.state;
    
        if (isLoading) {
            return (
            <div className="my-3 text-center">
                <p className="text-muted">Sedang mencari data..</p>
            </div>
            );
        }

        return (
        <div>
            <div className="table-responsive">                  
                <table className="table table-hover table-bordered mt-3 small table-light">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Provinsi</th>
                      <th scope="col">Positif</th>
                      <th scope="col">Sembuh</th>
                      <th scope="col">Meninggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items2.data.map(( item, index ) => {
                      if (item.kodeProvi !== 0) {
                        return (
                          <tr key={index}>
                            <td scope="row" width="5%">{index + 1}</td>
                            <td width="50%">{item.provinsi}</td>
                            <td width="15%">{item.kasusPosi}</td>
                            <td width="15%">{item.kasusSemb}</td>
                            <td width="15%">{item.kasusMeni}</td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
        </div>
        )
    }
}

export default DataProvinsi;