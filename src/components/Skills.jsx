import '../assets/css/Skills.css'

function Skills() {
    return (
        <div className="skills-container">
            <h2>Habilidades</h2>
            <div className="frontend-skills">
                <h3>Front-End</h3>
                <ul>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="backend-skills">
                <h3>Back-End</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
