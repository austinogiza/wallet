
import './App.css';
import Layout from './container/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  return (
    <>
    <Router>
      
<Layout>
  <Switch>

    <Route exact component={Home} path="/"/>
  </Switch>

</Layout>

</Router>
    </>
  );
}

export default App;
