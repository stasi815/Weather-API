import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <ul>
                    <li><a href='https://github.com/stasi815/TaDa-'>GitHub Stylesheet</a></li>
                    <li><a href='https://github.com/stasi815/Weather-API'>GitHub Project</a></li>
                </ul>

                <ul>
                    <li><a href='https://www.linkedin.com/in/anastasia-gallardo-5182ab192/'>LinkedIn</a></li>
                </ul>

                <ul>
                    <li><a href='https://www.makeschool.com/'>Make School</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer