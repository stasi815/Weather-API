import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li>
                        <h3>Weather NOW!</h3>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar