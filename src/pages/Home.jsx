import Menu from '../components/Menu';
import '../assets/css/Home.css';

function Home() {
    return (
        <div>
            <Menu />
            <main className="home-container">
                <h1 className="text-3xl">Bienvenido a mi portafolio</h1>
                <p>Esta es una sección de contenido.</p>
            </main>
        </div>
    )
}

export default Home
