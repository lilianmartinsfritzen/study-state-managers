import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function addNewTodo(e: FormEvent) {
    e.preventDefault()

    dispatch(add({
      newTodo
    }))

    setNewTodo('')
  }
  return (
    <form onSubmit={addNewTodo}>
      <input
        type="text"
        placeholder="Adicione um novo Todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button type="submit" >Adicionar</button>
    </form>
  )
}