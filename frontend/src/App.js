import React from "react";
import './global.css';
import './sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea></textarea>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;

//component - estrutura de cod q retorna algo, app é um component - usar somente 1 component por aquivo. Estrutua de cod q retorna html, css e js.
//props - atributos passados dentro de um component <Header title=filipe /> Informacoes q um component pai passa para um component filho
//estado - uma informacao q o component vai armazenar e manipular essa info, armazena uma informacao dentro de uma var q eu mesmo defino o nome e uma function q seta a variavel, guardando a info anterior e cria uma nova .
