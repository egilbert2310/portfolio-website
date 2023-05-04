import './App.css';
import Card from './components/card.component';

function App() {
  return (
    <div className="App">
      <Card title={"test"} description={"this is my first time using react"}/> 
      <Card title={"test1"} description={"this is my first time using react"}/> 
      <Card title={"test2"} description={"this is my first time using react"}/> 
      <Card title={"test3"} description={"this is my first time using react"}/> 
    </div>
  );
}

export default App;
