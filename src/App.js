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
        <Route path='/Scholarship' exact component={Scholarship}/>
        <Route path='/FindScholarships' exact component={FindScholarships}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;