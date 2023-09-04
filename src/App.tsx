import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import { TodoList } from "./components/TodoList"
import { AddTodo } from "./components/AddTodo"

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}
