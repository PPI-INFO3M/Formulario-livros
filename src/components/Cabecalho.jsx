import { Link } from 'react-router-dom'

function Cabecalho() {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
};

export default Cabecalho;