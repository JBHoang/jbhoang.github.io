import '../css/projects.css';
import tetrisImage from '../img/Tetris_logo.png'
import pacmanImage from '../img/Pacman_logo.png'
import donkeykongImage from '../img/Donkey_Kong_logo.png'
import minesweeperImage from '../img/Minesweeper_logo.png'
import asteriodsImage from '../img/Asteroids_arcade_logo.png'
import flappyBirdImage from '../img/Flappy_bird_logo.png'
import pongImage from '../img/Pong_arcade_logo.png'
import gitImage from '../img/github-mark-white.png'
import externalLinkImage from '../img/external-link-icon-white.png'

function projects() {
    return (
        <div class="project">
            <div className="myProjects">

            <h1 className="title">Projects</h1>


                <div className="list_projects">  


                <div className='tetris'>

                    <div className="tetris-photo">
                        <a href="https://www.jbhoang.com/TetrisGame/">
                            <img className="tetris-logo" src ={tetrisImage} alt="profile-image" />
                        </a>
                    </div>

                    <div>
                        <h1 className="tetris-title">Tetris - Unity, C#</h1>
                        <div className='project-link'>
                            <ul>
                                <li>
                                    <a href="https://github.com/JBHoang/Tetris">
                                        <div className='aligned'>
                                            <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                            <span>SOURCE</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                <a href="https://www.jbhoang.com/TetrisGame/">
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

                <div className='pacman'>

                    <div className="pacman-photo">
                        <a href="https://www.jbhoang.com/PacmanGame/">
                            <img className="pacman-logo" src ={pacmanImage} alt="profile-image" />
                        </a>
                    </div>

                    <div>
                        <h1 className="pacman-title">Pacman - Unity, C#</h1>
                        <div className='project-link'>
                            <ul>
                                <li>
                                    <a href="https://github.com/JBHoang/Pacman">
                                        <div className='aligned'>
                                            <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                            <span>SOURCE</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                <a href="https://www.jbhoang.com/PacmanGame/">
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

                <div className='donkeykong'>

                    <div className="donkeykong-photo">
                        <a href="https://www.jbhoang.com/DonkeyKongGame/">
                            <img className="donkeykong-logo" src ={donkeykongImage} alt="profile-image" />
                        </a>
                    </div>

                    <div>
                        <h1 className="donkeykong-title">Donkey Kong - Unity, C#</h1>
                        <div className='project-link'>
                            <ul>
                                <li>
                                    <a href="https://github.com/JBHoang/DonkeyKong">
                                        <div className='aligned'>
                                            <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                            <span>SOURCE</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                <a href="https://www.jbhoang.com/DonkeyKongGame/">
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

                <div className='minesweeper'>

                    <div className="minesweeper-photo">
                        <a href="https://www.jbhoang.com/MinesweeperGame/">
                            <img className="minesweeper-logo" src ={minesweeperImage} alt="profile-image" />
                        </a>
                    </div>

                    <div>
                        <h1 className="minesweeper-title">Minesweeper - Unity, C#</h1>
                        <div className='project-link'>
                            <ul>
                                <li>
                                    <a href="https://github.com/JBHoang/Minesweeper">
                                        <div className='aligned'>
                                            <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                            <span>SOURCE</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                <a href="https://www.jbhoang.com/MinesweeperGame/">
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

                    <div className='asteriods'>

                        <div className="asteriods-photo">
                            <a href="https://www.jbhoang.com/AsteroidsGame/">
                                <img className="asteriods-logo" src ={asteriodsImage} alt="profile-image" />
                            </a>
                        </div>

                        <div>
                            <h1 className="asteriods-title">Asteriods - Unity, C#</h1>
                            <div className='project-link'>
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
                                    <a href="https://www.jbhoang.com/AsteroidsGame/">
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

                    <div className='flappyBird'>

                        <div className="flappyBird-photo">
                            <a href="https://www.jbhoang.com/FlappyBirdGame/">
                                <img className="flappyBird-logo" src ={flappyBirdImage} alt="profile-image" />
                            </a>
                        </div>

                        <div>
                            <h1 className="flappyBird-title">Flappy Bird - Unity, C#</h1>
                            <div className='project-link'>
                                <ul>
                                    <li>
                                        <a href="https://github.com/JBHoang/FlappyBird">
                                            <div className='aligned'>
                                                <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                                <span>SOURCE</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                    <a href="https://www.jbhoang.com/FlappyBirdGame/">
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

                    <div className='pong'>

                        <div className="pong-photo">
                            <a href="https://www.jbhoang.com/PongGame/">
                                <img className="pong-logo" src ={pongImage} alt="profile-image" />
                            </a>
                        </div>

                        <div>
                            <h1 className="project-title">Pong - Unity, C#</h1>
                            <div className='project-link'>
                                <ul>
                                    
                                    <li>
                                        <a href="https://github.com/JBHoang/Pong">
                                            <div className='aligned'>
                                                <img className="icon-logo" src ={gitImage} alt="profile-image" />
                                                <span>SOURCE</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                    <a href="https://www.jbhoang.com/PongGame/">
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