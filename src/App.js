import logo from './logo.svg';
import './App.css';
import profileImage from './img/JasonPhoto.JPG'

function App() {
  return (
    <div className="App">
      <h1>Jason Hoang</h1>
      
      <img src ={profileImage} alt="profile-image" />
      <h2> About Me</h2>
      <p>I'm a Simon Fraser University Computer Science graduate with an interest in full-stack engineering. 
        Besides building software, I love weight training, snowboarding and golfing.
        An interesting fact about myself is a I'm a paramedic with BC Emgergency Health Service.
        Check out my work experience and projects below.

      </p>
      
    </div>

    
  );
}

export default App;
