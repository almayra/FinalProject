import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';


export class Register extends Component {
    render() {
        return (
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
                    src='https://cdn1.imggmi.com/uploads/2020/1/12/159e5c93b34d039a2746e14414290916-full.png'
                    />
                </div>
                <div className='login1-halfblock'>
                    <div className='tuliss'>
                        Daftar Akun
                    </div>
                    <div style={{marginLeft:'3cm',marginTop:'-3cm'}}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="9">
                                <form>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Nama kamu"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
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
                                        label="Konfirmasi email"
                                        icon="exclamation-triangle"
                                        group
                                        type="text"
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
                                    <div className="text-center">
                                    <MDBBtn>Daftar</MDBBtn>
                                    </div>
                                </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <div style={{marginTop:'-1cm',fontWeight:'initial'}}>
                        <Link to='/login' className='buat' style={{cursor:'pointer',color:'#4e4e4e',textDecoration:'none'}}>Punya Akun? <FaLongArrowAltRight/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
