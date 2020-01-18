import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Jumbotron6 extends Component {
    render() {
        return (
            <div className='App-jumbotron5 d-flex'>
                <div style={{fontWeight:'bold',fontSize:'45px',color:'white',marginTop:'1cm'}} className='mx-auto'>
                ❝ Speak what you feel and<br/><br/><br/><br/>
                    write what you speak. ❞
                        <div style={{fontWeight:'bold',fontSize:'20px',color:'#B8B8B8',marginTop:'5cm'}}>
                        700+ orang telah melakukannya. Kamu?
                        </div>
                        <div className='daftar1' data-aos="zoom-in" data-aos-duration="1000">
                            <Link to='/register' style={{cursor:'pointer',color:'white',textDecoration:'none',fontWeight:'bold'}}>Daftar Sekarang</Link>
                        </div>
                </div>

            </div>
        )
    }
}

export default Jumbotron6
