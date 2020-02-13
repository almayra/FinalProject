import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ERROR from '../support/img/error.png'

export class Notfound extends Component {
    render() {
        return (
            <div className='notfound1'>
                <div>
                    <h2 style={{color:'white',fontSize:'45px',paddingTop:'2cm',fontWeight:'bold'}}
                    className='mx-auto'
                    >PAGE NOT FOUND</h2>
                </div>
                <div className='mx-auto'>
                    <img
                    style={{height:'10cm',width:'11cm'}}
                    src={ERROR}
                    />
                </div>
                <div className='mt-5 mr-5'>
                    <Link to='/' className='btn btn-primary' style={{borderRadius:'15px'}}>Come Home, Sis</Link>
                </div>
            </div>
        )
    }
}

export default Notfound
