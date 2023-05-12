import './App.css';
import Card from './components/card.component';
import MainHeader from './components/main_header.component';
import Nav from './components/nav.component';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainHeader jobtitle={"Data Engineer"}/>
      <Card/>
    </div>
  );
}

export default App;
