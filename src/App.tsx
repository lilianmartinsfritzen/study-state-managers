import "./styles/global.css"

import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import { Player } from "./components/Page/Player"

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
