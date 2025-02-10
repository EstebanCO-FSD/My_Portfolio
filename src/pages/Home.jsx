import { useRef } from 'react';
import Menu from '../components/Menu';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Profile from '../components/Profile';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import '../assets/css/Home.css';

function Home() {
    const profileRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);

    return (
        <div className="home-container">
            <Menu profileRef={profileRef} educationRef={educationRef} skillsRef={skillsRef} />

            <div ref={profileRef}><Profile /></div>
            <div ref={educationRef}><Education /></div>
            <div ref={skillsRef}><Skills /></div>

            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Home
