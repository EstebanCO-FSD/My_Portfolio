import { useRef } from 'react';
import Menu from '../components/Menu';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Profile from '../components/Profile';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import '../assets/css/Home.css';

function Home() {
    let profileRef = useRef(null);
    let educationRef = useRef(null);
    let skillsRef = useRef(null);

    const sections = [
        { ref: profileRef, component: <Profile /> },
        { ref: educationRef, component: <Education /> },
        { ref: skillsRef, component: <Skills /> }
    ];

    return (
        <div className="home-container">
            <Menu profileRef={profileRef} educationRef={educationRef} skillsRef={skillsRef} />

            {sections.map((section, index) => (
                <div key={index} ref={section.ref}>
                    {section.component}
                </div>
            ))}

            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Home
