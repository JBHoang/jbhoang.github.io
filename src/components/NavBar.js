import '../components/NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">

            <div class="name">
                <p> Jason <em className='LastName'>Hoang</em></p>
            </div>
            
            <div class="navbar-links">
                <ul>
                    <li><a href="https://github.com/JBHoang">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/jbhoang/" >LinkedIn</a></li>
                    <li><a href="resume/Jason_Hoang_Resume.pdf">Resume</a></li>
                </ul> 
            </div>
                     
        
        </nav>
    );
}



export default Navbar;