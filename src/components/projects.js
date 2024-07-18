import '../css/projects.css';
import asteriodsImage from '../img/Asteroids_arcade_logo.png'
import gitImage from '../img/github-mark-white.png'
import externalLinkImage from '../img/external-link-icon-white.png'

function projects() {
    return (
        <div class="project">
            <div className="myProjects">

            <h1 className="title">Projects</h1>


                <div className="list_projects">  

                    <div className='asteriods'>

                        <div className="asteriods-photo">
                            <a href="https://jbhoang.github.io/AsteroidsGame/">
                                <img className="asteriods-logo" src ={asteriodsImage} alt="profile-image" />
                            </a>
                        </div>

                        <div>
                            <h1 className="asteriods-title">Asteriods - Unity, C#</h1>
                            <div className='asteriods-link'>
                                <ul>
                                    
                                    <li>
                                        <a href="https://github.com/JBHoang/Asteroids">
                                            <div className='aligned'>
                                                <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                                <span>SOURCE</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                    <a href="https://jbhoang.github.io/AsteroidsGame/">
                                        <div className='aligned'>
                                            <img className="icon-logo" src ={externalLinkImage} alt="profile-image" />
                                            <span>DEMO</span>
                                        </div>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div> 
        </div>
    );
}

export default projects;