import React, { Component } from 'react'
import { LOGO } from '../support/url'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='App-header'>
                <Link to='/' style={{cursor:'pointer'}}>
                    <img src={LOGO}
                    className='d-flex logo'
                    style={{height:'150px',width:'150px'}}
                    />
                </Link>
                <div className='nabar'>
                    PKC untuk bisnis
                </div>
                <Link to='/login' className='login ml-5' style={{fontWeight:'bold',cursor:'pointer',textDecoration:'none',color:'#8474A1'}}>
                    Masuk
                </Link>
            </div>
        )
    }
}

export default Header

