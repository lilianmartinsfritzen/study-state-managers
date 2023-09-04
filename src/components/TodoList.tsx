import { useAppSelector } from "../store"

export function TodoList() {
  const allTodo = useAppSelector(store => {
    return store.todo
  })
  return (
    <div>
      <ul>
        {allTodo.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}