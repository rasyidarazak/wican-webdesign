import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

class NoMatch extends React.Component {
	render(){
		return (
			<div>
                {/* NoMatch Body 1 */}
                <div className="no-match jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4"><FontAwesomeIcon icon={faExclamationCircle}/> 404 Not Found</h1>
                        <p className="lead">Halaman tidak ditemukan. Pastikan URL anda menuju ke halaman yang benar.</p>
                    </div>
                </div>
                {/* End NoMatch Body 1 */}
			</div>
		);
	} 
}

export default NoMatch;