import React, { useState, useEffect } from "react";
import "./app.css";
import "./global.css";
import "./sidebar.css";
import "./main.css";

import Notes from "./Components/Notes";
import api from "./services/api";

function App() {
  const [title, setTitles] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([""]); //como esta manipulando info precisa criar dentro de um estado

  //SPA - n precisa q a pagina seja atualizada - preventDefault nao tem o comportamento padrao
  //async - tempo necessario q precisa para fazer chamada mas nao interfira no resto do codigo

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get("/annotations");

      setAllNotes(response.data);
    }

    getAllNotes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });
    setTitles("");
    setNotes("");

    setAllNotes([...allNotes, response.data]) //setar de forma automatica a listagem de notas
  }

  //botao salvar title, ou notes editado, usada somente em uma situacao especifica
  useEffect(() => {
    function enableSubmitButton(){
      let btn = document.getElementById("btn_submit")
      btn.style.background = "#FFD3CA"
      if(title && notes){
        btn.style.background = "#EB87A"
      }
    }
    enableSubmitButton()
  }, [title, notes])//dependencia

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
              onChange={(e) => setTitles(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea
              required
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button id="btn_submit" type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

//component - estrutura de cod q retorna algo, app é um component - usar somente 1 component por aquivo. Estrutua de cod q retorna html, css e js.
//props - atributos passados dentro de um component <Header title=filipe /> Informacoes q um component pai passa para um component filho
//estado - uma informacao q o component vai armazenar e manipular essa info, armazena uma informacao dentro de uma var q eu mesmo defino o nome e uma function q seta a variavel, guardando a info anterior e cria uma nova .
