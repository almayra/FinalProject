import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaLongArrowAltLeft} from 'react-icons/fa'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


export class Changepass extends Component {
    render() {
        return (
            <div className='login1'>
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <Link to='/login' style={{textDecoration:'none',color:'#4b4b4b'}}>
                            <FaLongArrowAltLeft
                            size={32}
                            color='#4b4b4b'
                            className='ikon'
                            />
                        </Link>
                        <div class="fadeIn first">
                        <img src="https://cdn1.imggmi.com/uploads/2020/1/14/3c47ac74e85042db0721eb284e0dfcb1-full.png" id="icon" alt="User Icon" style={{width:'7cm',marginTop:'0.4cm'}} />
                        </div>
                        <div style={{color:'#4b4b4b',fontSize:'20px',fontWeight:'bold',marginBottom:'1cm'}}>
                            Lupa Password?
                        </div>
                        <div>
                        <div className="grey-text" style={{width:'90%'}}>
                                    <MDBInput
                                        label="Masukkan password baru"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Konfirmasi password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                    </div>
                            <input type="submit" class="fadeIn fourth mt-5" value="Ganti"/>
                        </div>

                        </div>
                    </div>
                </div>
        )
    }
}

export default Changepass
