import { MirrorInput } from "./components/MirrorInput";
import { ToggleButton } from "./components/ToggleButton";
import { MirrorInputContextProvider, MirrorInputContextProvider2 } from "./context/providers/mirror-input-context-provider";

function App() {
  return <div className="App">
    <MirrorInputContextProvider >
      <MirrorInput />
    </MirrorInputContextProvider>
    <MirrorInputContextProvider2 >
      <ToggleButton />
    </MirrorInputContextProvider2>

  </div>;
}

export default App;
