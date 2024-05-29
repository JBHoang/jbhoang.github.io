import '../css/skills.css';

function skills() {
    return (
        <nav className="skills">
            {
            <div className="sections">
                <div className="mySkills">
                    <h1 className="title">Skills</h1>

                    <div className="grid">   
                        <div className="cells">
                            <ul>
                                <li>Python</li>
                                <li>C/C++/C#</li>
                                <li>Linux/Windows</li>
                                <li>Agile/Scrum</li>
                            </ul>
                            </div>

                            <div className="cells">
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            </div>

                            <div className="cells">
                            <ul>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                                <li>Git</li>
                                <li>TortoiseSVN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
            }
 
        </nav>
    );
}

export default skills;