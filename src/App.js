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
import Register from './pages/register'
import Home from './pages/home'
import Kelas from './pages/kelas'
import Footer from './components/footer'
import Changepass from './pages/changepass';
import Subscribe from './pages/subscribe';


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
        <Route path={'/home'} exact component={Home} />
        <Route path={'/kelas'} exact component={Kelas} />
        <Route path={'/changepass'} exact component={Changepass} />
        <Route path={'/paketbelajar'} exact component={Subscribe} />
        <Route path={'/*'} exact component={Notfound} />
        <Route path='/404' component={Notfound} exact/>
      </Switch>
    </div>
  );
}

export default App;
