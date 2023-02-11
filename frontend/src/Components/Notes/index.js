import  React, {useState} from 'react'
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './style.css'
import "./styles-priority.css";
import api from '../../services/api';

function Notes({ data }) {
  const [changedNote, setChangedNote] = useState('')

  async function handleSave(e, notes){
    if(changedNote && changedNote !== notes) {
      await api.post(`/contents/${data._id}`, {
      notes: changedNote,
    })                                      //AULA 06 - 12MIN.
  }
}

  console.log(data)
    return (
        <>
        <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
              <div>
                <strong>{data.title}</strong>
                <div>
                  <AiTwotoneDelete size="20"/>
                </div>
              </div>
              <textarea 
                defaultValue={data.notes} 
                onChange={e => setChangedNote(e.target.value)} //e.target.value = evento de mudança vai pegar o valor da textarea e armazene dentro de uma var 
                onBlur ={e => handleSave(e.target, data.notes)} //qdo desfoca, qdo clica fora ele deixa de estar ativo o elemento ativo, qdo deixa de estar ativo ele executa uma acao
                />
              <span>
                <AiOutlineExclamationCircle size="20"/>
              </span>
            </li>
        </>
    )
}

export default Notes;

