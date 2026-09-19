# Cadastro de Livro
 
Projeto de cadastro de livros, usando componentes React e estado local (`useState`).
Desenvolvido como atividade prática da disciplina Programação para Internet, com base
no projeto de cadastro de alunos visto em aula.
 
## Print da aplicação
 
<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/5e2bdd34-6cd6-460f-8a8e-dab80d2196ed" />
 
## Como rodar o projeto (Windows)
 
Pré-requisito: ter o [Node.js](https://nodejs.org) instalado (para verificar, abra o **Prompt de Comando** e digite `node -v`).
 
1. **Baixe o projeto**
   - Opção A (com Git instalado): abra o Prompt de Comando na pasta onde quer salvar o projeto e rode:
```
     git clone https://github.com/PPI-INFO3M/Formulario-livros
```
   - Opção B (sem Git): na página do repositório, clique em **Code > Download ZIP** e extraia a pasta.
2. **Abra a pasta do projeto no terminal**
   Entre na pasta baixada, por exemplo:
```
   cd NOME-DO-REPOSITORIO
```
 
3. **Instale as dependências**
```
   npm install
```
 
4. **Rode o projeto**
```
   npm run dev
```
 
5. **Abra no navegador**
   O terminal vai mostrar um endereço parecido com `http://localhost:5173`. Copie e cole esse endereço no navegador (ou clique nele segurando Ctrl).
Para parar o servidor, volte ao terminal e pressione `Ctrl + C`.
 
## Funcionalidades
 
- Cadastro de livro (título, autor, ano de publicação e gênero)
- Listagem dos livros cadastrados
- Mensagem indicando quando ainda não há livros cadastrados
