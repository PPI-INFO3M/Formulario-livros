import './Livro.css'

function Livro({ livro }) {
    return (
        <li className="card-livro">
            <div className="livro-top">
                <strong>{livro.titulo}</strong>
                <p>{livro.autor}</p>
            </div>
            <div className="tags">
                <div className="tag">
                    <span className="material-symbols-outlined">calendar_month</span>
                    <p>{livro.anoPublicado}</p>
                </div>
                <div className="tag">
                    <span className="material-symbols-outlined">sell</span>
                    <p className="tag">{livro.genero}</p>
                </div>
            </div>
        </li>
    )
}

export default Livro