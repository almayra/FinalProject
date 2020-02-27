import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Header from './components/header'
import Jumbotron1 from './components/jumbotron1'
import Jumbotron2 from './components/jumbotron2'
import Jumbotron3 from './components/jumbotron3';
import Jumbotron4 from './components/jumbotron4';
import Jumbotron5 from './components/jumbotron5';
import Jumbotron6 from './components/jumbotron6'
import Notfound from './pages/notfound'
import Login from './pages/login'
import Register from './pages/user/register'
import Home from './pages/user/home'
import Kelas from './pages/user/kelas'
import Footer from './components/footer'
import Changepass from './pages/changepass';
import Subscribe from './pages/user/subscribe';
import Profil from './pages/user/profil';
import Admin from './pages/admin/admin';
import Verified from './pages/user/verified';
import Mainadd from './pages/admin/mainadd'
import Galeri from './pages/user/galeri'
import Transaksi from './pages/admin/transaksi';
import Performa from './pages/admin/performa';
import Kelasdetail from './pages/user/kelasdetail';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Header/>
          <Jumbotron1/>
          <Jumbotron2/>
          <Jumbotron3/>
          <Jumbotron4/>
          <Jumbotron5/>
          <Jumbotron6/>
          <Footer/>
        </Route>
        <Route path={'/kelas'} exact component={Kelas} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/register'} exact component={Register} />
        <Route path={'/beranda'} exact component={Home} />
        <Route path={'/kelas'} exact component={Kelas} />
        <Route path={'/gantipass'} exact component={Changepass} />
        <Route path={'/profil'} exact component={Profil} />
        <Route path={'/paketbelajar'} exact component={Subscribe} />
        <Route path={'/kursus'} component={Admin} exact/>
        <Route path={'/verified'} component={Verified} exact/>
        <Route path={'/tambahkelas'} component={Mainadd} exact/>
        <Route path={'/galeri'} component={Galeri} exact/>
        <Route path={'/transaksi'} component={Transaksi} exact/>
        <Route path={'/performa'} component={Performa} exact/>
        <Route path={'/kelasdetail'} component={Kelasdetail} exact/>
        <Route path={'/*'} exact component={Notfound} />
        <Route path='/404' component={Notfound} exact/>
      </Switch>
    </div>
  );
}

export default App;
