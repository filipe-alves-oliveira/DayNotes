import  React from 'react'

function Notes({ data }) {
  console.log(data.notes);
    return (
        <>
        <li className="notepad-infos">
              <div>
                <strong>{data.title}</strong>
                <div>
                  x
                </div>
              </div>
              <textarea>{data.notes}</textarea>
              <span>!</span>
            </li>
        </>
    )
}

export default Notes;