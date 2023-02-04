import React, { useState } from "react";
import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';

import Notes from './Components/Notes'
import api from './services/api'
import e from "express";

function App() {
  const [ title, setTitles ] = useState('')
  const [ notes, setNotes ] = useState('')

//SPA - n precisa q a pagina seja atualizada - preventDefault nao tem o comportamento padrao
//async - tempo necessario q precisa para fazer chamada mas nao interfira no resto do codigo 

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

  } 

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input 
              required
              value={title}
              onChange={e => setTitles(e.target.value)} 
            />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea 
              required
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </ul>
      </main>
    </div>
  );
}

export default App;

//component - estrutura de cod q retorna algo, app é um component - usar somente 1 component por aquivo. Estrutua de cod q retorna html, css e js.
//props - atributos passados dentro de um component <Header title=filipe /> Informacoes q um component pai passa para um component filho
//estado - uma informacao q o component vai armazenar e manipular essa info, armazena uma informacao dentro de uma var q eu mesmo defino o nome e uma function q seta a variavel, guardando a info anterior e cria uma nova .

