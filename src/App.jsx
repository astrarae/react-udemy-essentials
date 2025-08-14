import Header from "./components/Header";
import {Fragment} from "react";
import CoreConceptsShell from "./components/CoreConceptsShell";
import InteractiveShell from "./components/InteractiveShell";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
          <CoreConceptsShell />
          <InteractiveShell />
      </main>
    </Fragment>
  );
}

export default App;
