import React, { Component } from "react";
import { Link } from 'react-router-dom';

import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
 
class ScrollToTop extends Component {

    componentDidMount() {
        document.addEventListener("scroll", function(e) {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });
    }

    scrollToTop(e) {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    render() {
        return (
            <div>
                <Link className="scroll-to-top rounded" onClick={(e) => this.scrollToTop(e)} to="/">
                    <FontAwesomeIcon icon={faAngleUp} />
                </Link>
            </div>
        );
    }
}
 
export default ScrollToTop;