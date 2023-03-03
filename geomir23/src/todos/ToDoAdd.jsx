import React from 'react'
import { useForm } from '../hooks/useForm';


export const ToDoAdd = ({handle}) => {

  const { formState, onInputChange, onResetForm } = useForm({
    id: new Date().getTime(),
    text: "",
    done: false,
  });
  const {id,text,done} = formState;

  return (

    <div>
      <div>
        <label>Todo</label>
        <input value={text} name="text" placeholder='Escriu un todo' onChange={onInputChange} type="text" />
        <div>
          <button
          type='submit' onClick={()=>{handle(formState); onResetForm(formState);}}> Añadir Todo

          </button>
        </div>

      </div>

    </div>
  )
}

