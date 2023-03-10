import React, { useState, useEffect } from "react";
import "./app.css";
import "./global.css";
import "./sidebar.css";
import "./main.css";

import Notes from "./Components/Notes";
import api from "./services/api";
import RadioButton from "./Components/RadioButton";

function App() {
  const [ selectedValue, setSelectedValue] = useState("all "); //qdo começar a aplicaçao vai estar setado todos
  const [title, setTitles] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([""]); //como esta manipulando info precisa criar dentro de um estado

  //SPA - n precisa q a pagina seja atualizada - preventDefault nao tem o comportamento padrao
  //async - tempo necessario q precisa para fazer chamada mas nao interfira no resto do codigo

  useEffect(() => {
  getAllNotes();
}, [])

async function getAllNotes() {
  const response = await api.get("/annotations");
  setAllNotes(response.data);
}

async function loadNotes(option) { //pegar o option q vai ser true ou false, ou seja, prioridade ou normal
  const params = {priority: option};
  const response = await api.get('./priorities', { params });
  //loadNotes recebe option, true ou false, params ira pegar o objto só com priority true ou false, guardando dentro de params esse obj priority
  //e dentro do get, params, só qro q retorne priority true ou false. (insomnia query params true ou false)

  if (response){  //se tiver tds true ou false, ele vai atualizar o setAllNotes(array do allnotes) com as infos.
    setAllNotes(response.data);
  }
}

async function handleChange(e) { //e-componente, tag, button q será alterado.
  setSelectedValue(e.value); //selecionando prioridade mudando para true

  if (e.checked && e.value !== 'all'){
    loadNotes(e.value); 
  } else {
    getAllNotes();
  }
}

  async function handleDelete(id){
    const deleteNote = await api.delete(`/annotations/${id}`);

    if(deleteNote) {
      setAllNotes(allNotes.filter(note => note._id !== id))
    }
  }

  async function handleChangePriority(id){
    const note = await api.post(`/priorities/${id}`);
    if (note && selectedValue !== 'all') {
      loadNotes(selectedValue);
    } else if (note) {
      getAllNotes();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });
    setTitles("");
    setNotes("");

    if (selectedValue !== 'all'){
      getAllNotes();
    }else{
      setAllNotes([...allNotes, response.data]); //setar de forma automatica a listagem de notas
    }
    setSelectedValue('all');
}
  //botao salvar title, ou notes editado, usada somente em uma situacao especifica
  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("btn_submit")
        btn.style.background = "#FFD3CA"
      if(title && notes){
        btn.style.background = "#EB87A"
      }
    }
    enableSubmitButton()
  }, [title, notes]) //dependencia

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input
              required
              maxLength="30"
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
        <RadioButton 
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      </aside>
      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes 
            key={data._id}
            data={data}
            handleDelete={handleDelete}
            handleChangePriority={handleChangePriority} //passando para o componente notes q esta no index por props.
            />
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
