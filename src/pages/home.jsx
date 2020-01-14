import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {MdPerson,MdVideoLibrary,MdShoppingCart,MdDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi'

export class Home extends Component {
    render() {
        return (
            <div className='App-kelas'>
                <div className='kecuali'>
                    <div className='saya'>
                        Kelas Saya
                        <div className='line'/>
                    </div>
                </div>
                <div>
                    <img
                    style={{marginTop:'-16cm',marginLeft:'-8cm',width:'22cm',  position: 'relative'}}
                    src='https://cdn1.imggmi.com/uploads/2020/1/14/c82e38e5df362d44d5a9f7651a0f773a-full.png'
                    />
                </div>
                <div className='kosong'>
                    Kelasmu masih kosong.<br/>
                    Tambahkan kelas yang kamu suka! :)
                </div>
                <div className='telusuri'>
                    <Link to='/' style={{cursor:'pointer',color:'#8474A1',textDecoration:'none',fontWeight:'bold'}}>Telusuri Kelas</Link>
                </div>
                <div className='sidebar'>
                    <SideNav
                        onSelect={(selected) => {
                            // Add your code here
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="kelassaya">
                            <NavItem eventKey="akun">
                                <NavIcon>
                                    <MdPerson size={32}/>
                                </NavIcon>
                                <NavText style={{color:'white',fontweight:'700px'}}>
                                    Akun
                                    <NavItem eventKey="akun/gantipass">
                                            <Link to='/changepass' style={{textDecoration:'none',color:'#4b4b4b'}}>
                                                Ganti Password
                                            </Link>
                                    </NavItem>
                                </NavText>
                                <NavItem eventKey="akun/keluar">
                                    <NavText>
                                        <Link to='/login' style={{textDecoration:'none',color:'#4b4b4b'}} className='mt-1'>
                                            Keluar
                                        </Link>
                                    </NavText>
                                </NavItem>
                            </NavItem>
                            <NavItem eventKey="kelassaya" className='mt-5 mb-5'>
                                <NavIcon>
                                    <MdDashboard size={32}/>
                                </NavIcon>
                                <NavText style={{color:'white',fontweight:'700px'}}>
                                    Kelas Saya
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="cart" className='mt-5 mb-5'>
                                <NavIcon>
                                    <MdShoppingCart size={32}/>
                                </NavIcon>
                                <NavText style={{color:'white',fontweight:'700px'}}>
                                    Keranjang
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="kelas">
                                <NavIcon>
                                    <MdVideoLibrary size={30}/>
                                </NavIcon>
                                <NavText>
                                    Katalog Kelas
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
            </div>
        )
    }
}

export default Home
