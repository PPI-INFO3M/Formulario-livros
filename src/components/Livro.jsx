import './Livro.css'

function Livro(props) {
    return (
        <li className="card-livro">
            <div className="livro-top">
                <strong>{props.livro.titulo}</strong>
                <p>{props.livro.autor}</p>
            </div>
            <div className="tags">
                <div className="tag">
                    <span className="material-symbols-outlined">calendar_month</span>
                    <p>{props.livro.anoPublicado}</p>
                </div>
                <div className="tag">
                    <span className="material-symbols-outlined">sell</span>
                    <p className="tag">{props.livro.genero}</p>
                </div>
            </div>
        </li>
    )
}

export default Livro