
import './App.css';
import Layout from './container/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import ScrollToTop from './components/ScrollTop';
import BackToTop from './components/BackToTop';
function App() {
  return (
    <>
    <Router>
      
<Layout>
  <ScrollToTop/>
  <BackToTop/>
  <Switch>

    <Route exact component={Home} path="/"/>
  </Switch>

</Layout>

</Router>
    </>
  );
}

export default App;
