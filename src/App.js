import './App.css';
import MainHeader from './components/main_header.component';
import Nav from './components/nav.component';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainHeader jobtitle={"Data Engineer"}/>
    </div>
  );
}

export default App;
