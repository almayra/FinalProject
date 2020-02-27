import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link, Redirect } from 'react-router-dom';
import LOGO from '../support/img/logoitem.png'
import GAMBAR from '../support/img/login.png'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import {connect} from 'react-redux'
import { UserLogin } from '../redux/action';

class Login extends Component {
    state={
        error:'',
        loading:false
    }

    btnLogin=()=>{
        var username=this.username.value
        var password=this.password.value

        this.props.UserLogin({
            username,
            password
        })
    }

    renderError=()=>{
        if(this.props.error===''){
            return null
        }else{
            return <p className='mt-2 block-example border border-danger' style={{width:'6.5cm',color:'#dd3c3c', fontSize:'12px',paddingTop:'11px'}}> <AiOutlineExclamationCircle size={20} className='mr-2' style={{marginTop:'-5px'}} /> {this.props.error} </p>
        }
    }

    render() {
        if(this.props.login){
            return <Redirect to='/beranda' />
        }
        return (
            <div>
                <div className='login1'>
                    <Link to='/' style={{cursor:'pointer'}}>
                        <img src={LOGO}
                        className='d-flex logo'
                        style={{height:'150px',width:'150px'}}
                        />
                    </Link>
                    <div className='login1-halfbox'>
                        <img
                        style={{width:'18cm',height:'14cm',marginTop:'2cm',marginLeft:'-0.6cm'}}
                        src={GAMBAR}
                        />
                    </div>
                    <div className='login1-halfblock'>
                        <div className='tulismasuk'>
                            Masuk Akun
                        </div>
                        <div style={{marginLeft:'3cm',marginTop:'-3cm'}}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md='9'>
                                <div>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Nama kamu"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        inputRef={ref => this.username = ref}
                                    />
                                    <MDBInput
                                        label="Password kamu"
                                        group
                                        type="password"
                                        validate
                                        inputRef={ref => this.password = ref}
                                    />
                                    </div>
                                    <Link to='/gantipass' style={{fontSize:'12px',marginTop:'-0.5cm',marginLeft:'3.5cm',fontWeight:'200px',textDecoration:'none',color:'black'}}>Lupa Password?</Link>
                                    <div>
                                        {this.renderError()}
                                    </div>
                                    <div className="text-center mt-5">
                                    <MDBBtn onClick={this.btnLogin} >Masuk</MDBBtn>
                                    </div>
                                </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        </div>
                        <div style={{marginTop:'-1cm',fontWeight:'initial'}}>
                            <Link to='/register' className='buat' style={{cursor:'pointer',color:'#4e4e4e',textDecoration:'none'}}>Buat Akun Kamu <FaLongArrowAltRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        error:state.Auth.error,
        username: state.Auth.username,
        login: state.Auth.login
    }
}

export default connect(mapStateToProps, {UserLogin})(Login)
