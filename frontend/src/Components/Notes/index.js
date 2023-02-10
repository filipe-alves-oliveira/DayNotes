import  React from 'react'
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './style.css'
import "./styles-priority.css";

function Notes({ data }) {
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
              <textarea>{data.notes}</textarea>
              <span>
                <AiOutlineExclamationCircle size="20"/>
              </span>
            </li>
        </>
    )
}

export default Notes;