import { Link } from 'react-router-dom'
import './Cabecalho.css'

function Cabecalho() {
    return(
        <header>
            <nav>
                <Link to="/" className="link-inicio">
                <span className="material-symbols-outlined">house</span>
                Inicio
                </Link>
            </nav>
        </header>
    )
};

export default Cabecalho;