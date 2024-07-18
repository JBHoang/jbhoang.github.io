import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/banner';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      
      <>
      <NavBar />
      <Banner/>
      <Projects/>
      <Skills/>
      </>      
      
    </div>
  );
}

export default App;
