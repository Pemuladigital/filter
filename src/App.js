import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FindScholarships from './FindScholarships';
import Navbar from './Components/Navbar';
import Scholarship from './Scholarship';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={FindScholarships}/>
        <Route path='/Scholarship' component={Scholarship}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;