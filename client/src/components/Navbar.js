import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Link to='/'>
                    <div className='logo'>Logo</div>
                </Link>
                <div className='nav-links-wrapper'>
                    <Link>
                        <div className='nav-link'>Products</div>
                    </Link>
                    <Link to='/about'>
                        <div className='nav-link'>About</div>
                    </Link>
                    <Link to='/contact'>
                        <button className='nav-link'>Get in Touch</button>
                    </Link>
                </div>
            </div>
        )
    }
}
