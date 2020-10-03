import React from 'react';
import './App.css';
import { HashRouter , Route} from 'react-router-dom';
import About from './routes/About';
import Main from './routes/Main';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App (){
  return(
    <HashRouter>
      <Navigation / >
      <Route path="/Main" exact={true} component={Main} / >
      <Route path="/about" component={About} / >
      <Route path="/movie-detail" component={Detail} / >
    </HashRouter>
  )
}

export default App;