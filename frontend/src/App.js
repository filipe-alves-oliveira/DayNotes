import React from "react";
import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';

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
      <main>
        <ul>
        <li className="notepad-infos">
              <div>
                <strong>Fazer Compras</strong>
                <div>
                  x
                </div>
              </div>
              <textarea>texto backend</textarea>
              <span>!</span>
            </li>
            <li className="notepad-infos">
              <div>
                <strong>Fazer Compras</strong>
                <div>
                  x
                </div>
              </div>
              <textarea>texto backend</textarea>
              <span>!</span>
            </li>
            <li className="notepad-infos">
              <div>
                <strong>Fazer Compras</strong>
                <div>
                  x
                </div>
              </div>
              <textarea>texto backend</textarea>
              <span>!</span>
            </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

//component - estrutura de cod q retorna algo, app é um component - usar somente 1 component por aquivo. Estrutua de cod q retorna html, css e js.
//props - atributos passados dentro de um component <Header title=filipe /> Informacoes q um component pai passa para um component filho
//estado - uma informacao q o component vai armazenar e manipular essa info, armazena uma informacao dentro de uma var q eu mesmo defino o nome e uma function q seta a variavel, guardando a info anterior e cria uma nova .

//31:35 aula4