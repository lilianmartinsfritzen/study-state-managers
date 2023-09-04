import { useSelector } from "react-redux"

export function TodoList() {
  const allTodo = useSelector(store => {
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