import  React, {useState} from 'react'
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './style.css'
import "./styles-priority.css";
import api from '../../services/api';

function Notes({ data, handleDelete, handleChangePriority }) {
  const [changedNote, setChangedNote] = useState('')

  function handleEdit(e, priority) {
    e.style.cursor = 'text';
    e.style.borderRadius = '5px';

    if(priority) {
      e.style.boxShadow = '0 0 5px white';
    }else{
      e.style.boxShadow = '0 0 5px gray';
    }
  }

  async function handleSave(e, notes){
    e.style.cursor = 'default';
    e.style.boxShadow = 'none';
    if(changedNote && changedNote !== notes) {
      await api.post(`/contents/${data._id}`, {
      notes: changedNote,
    })                                      //AULA 06 - 47:42MIN.
  }
}

  console.log(data)
    return (
        <>
        <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
              <div>
                <strong>{data.title}</strong>
                <div>
                  <AiTwotoneDelete 
                  size="20" 
                  onClick={() => handleDelete(data._id)} //passa com arrow function pq só quer q executa qdo der o clique com evento onclick
                  />
                </div>
              </div>
              <textarea 
                defaultValue={data.notes} 
                onClick={e => handleEdit(e.target, data.priority)}
                onChange={e => setChangedNote(e.target.value)} //e.target.value = evento de mudança vai pegar o valor da textarea e armazene dentro de uma var 
                onBlur ={e => handleSave(e.target, data.notes)} //qdo desfoca, qdo clica fora ele deixa de estar ativo o elemento ativo, qdo deixa de estar ativo ele executa uma acao
                />
              <span>
                <AiOutlineExclamationCircle 
                size="20"
                onClick={() => handleChangePriority(data._id)}
                />
              </span>
            </li>
        </>
    )
}

export default Notes;

