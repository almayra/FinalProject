import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <div>
                <div className='login1'>
                    <Link to='/' style={{cursor:'pointer'}}>
                        <img src='https://cdn1.imggmi.com/uploads/2020/1/12/de670de25a87d95c9626aead0c996790-full.png'
                        className='d-flex logo'
                        style={{height:'150px',width:'150px'}}
                        />
                    </Link>
                    <div className='login1-halfbox'>
                        <img
                        style={{width:'18cm',height:'14cm',marginTop:'2cm',marginLeft:'1cm'}}
                        src='https://cdn1.imggmi.com/uploads/2020/1/11/30a75e0b5d6aee649f28d426f2ebdb3e-full.png'
                        />
                    </div>
                    <div className='login1-halfblock'>
                        <div className='tulismasuk'>
                            Masuk Akun
                        </div>
                        <div style={{marginLeft:'3cm',marginTop:'1cm'}}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md='9'>
                                <form>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Email kamu"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Password kamu"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                    </div>
                                    <div className="text-center mt-5">
                                    <MDBBtn>Masuk</MDBBtn>
                                    </div>
                                </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        </div>
                        <div style={{marginTop:'2.5cm',fontWeight:'initial'}}>
                            <Link to='/register' className='buat' style={{cursor:'pointer',color:'#4e4e4e',textDecoration:'none'}}>Buat Akun Kamu <FaLongArrowAltRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
