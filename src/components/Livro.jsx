function Livro({ livro }) {
    return (
        <li>
            <strong>{livro.titulo}</strong>
            <p>{livro.autor}</p>
            <p>{livro.anoPublicado}</p>
            <p>{livro.genero}</p>
        </li>
    )
}

export default Livro