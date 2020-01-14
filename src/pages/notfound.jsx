import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Notfound extends Component {
    render() {
        return (
            <div className='notfound'>
                <div>
                    <h2 style={{color:'white',fontSize:'45px',paddingTop:'2cm',fontWeight:'bold'}}>PAGE NOT FOUND</h2>
                </div>
                <div className='mx-auto'>
                    <img
                    style={{height:'10cm',width:'11cm'}}
                    src='https://cdn1.imggmi.com/uploads/2020/1/11/954ed11f528f66181a793aa4055d8266-full.png'
                    />
                </div>
                <div className='mt-5 mr-5'>
                    <Link to='/' className='btn btn-primary'>Come Home, Sis</Link>
                </div>
            </div>
        )
    }
}

export default Notfound
