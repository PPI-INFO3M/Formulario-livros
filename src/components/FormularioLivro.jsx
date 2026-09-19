import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [anoPublicado, setAnoPublicado] = useState('')
    const [genero, setGenero] = useState('')

    const [livros, setLivros] = useState([])

    function handleSubmit(evento) {
        evento.preventDefault()

        const novoLivro = { titulo, autor, anoPublicado, genero, id:Date.now() }
        setLivros([...livros, novoLivro])

        setTitulo('')
        setAutor('')
        setAnoPublicado('')
        setGenero('')
    }

    return(
        <section className="sec-formulario">
            <h1>Cadastro de livro</h1>

            <form onSubmit={handleSubmit}>
                <CampoTexto
                    label="Titulo"
                    name="titulo"
                    value={titulo}
                    onChange={(evento) => setTitulo(evento.target.value)}
                    placeholder="Ex: Harry Potter"
                />

                <CampoTexto
                    label="Autor"
                    name="autor"
                    value={autor}
                    onChange={(evento) => setAutor(evento.target.value)}
                    placeholder="Ex: J.K Rowling"
                />

                <CampoTexto
                    label="Ano de Publicação"
                    name="anoPublicado"
                    value={anoPublicado}
                    onChange={(evento) => setAnoPublicado(evento.target.value)}
                    placeholder="Ex: 2004"
                />

                <CampoTexto
                    label="Gênero"
                    name="genero"
                    value={genero}
                    onChange={(evento) => setGenero(evento.target.value)}
                    placeholder="Ex: Aventura"
                />

                <button type="submit">Cadastrar</button>
            </form>

            <div>
                <h2>Livros Cadastrados</h2>
                {livros.length === 0 && <p>Nenhum livro cadastrado...</p>}
                <ul>
                    {livros.map((livro) => (
                        <Livro key={livro.id} livro={livro} />
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default FormularioLivro;