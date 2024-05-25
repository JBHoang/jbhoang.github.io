import logo from './logo.svg';
import './App.css';
import profileImage from './img/JasonPhoto.JPG'

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Jason Hoang</h2>
      <img src ={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
