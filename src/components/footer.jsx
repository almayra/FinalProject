import React, { Component } from 'react'
import { LOGO } from './../support/url'
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
    FaEnvelope,
    FaLinkedin
} from 'react-icons/fa';

export class Footer extends Component {
    render() {
        return (
            <div className='App-footer'>
                <div className='d-flex'>
                    <img src={LOGO}
                    className='d-flex mt-4 ml-5'
                    style={{height:'150px',width:'150px'}}
                    />
                </div>
                <div className='foter'>
                    @2020 Pesantren Kilat Copywriting • Almayra • Indonesia
                </div>
                <div className='foterr'>
                    <div className='footer-icon'>
                        <a href='/' className='facebook'>
                            <FaFacebookF />
                        </a>
                        <a href='https://www.instagram.com/almayra19/' className='instagram'>
                            <FaInstagram />
                        </a>
                        <a href='https://twitter.com/lovumou_' className='twitter'>
                            <FaTwitter />
                        </a>
                        <a href='/' className='email'>
                            <FaEnvelope />
                        </a>
                        <a href='https://www.linkedin.com/in/almayra-zamzamy-461350188/' className='linked'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer