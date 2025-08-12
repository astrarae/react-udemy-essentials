import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./data.js";


function App() {
    const [tabContent, setTabContent] = useState("components");

    function handleSelect(selectedButton) {
        setTabContent(selectedButton)
    }

  return (
    <>
      <Header></Header>
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  {CORE_CONCEPTS.map((concept) => (
                      <CoreConcepts key={concept.title} {...concept}/>
                  ))}
              </ul>
          </section>

          <section id="examples" >
              <h2>Examples</h2>
              <menu>
                  <TabButton isSelected={tabContent==='components'} onSelect={() => handleSelect("components")}>Components</TabButton>
                  <TabButton isSelected={tabContent==='jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                  <TabButton isSelected={tabContent==='props'} onSelect={() => handleSelect("props")}>Props</TabButton>
                  <TabButton isSelected={tabContent==='state'} onSelect={() => handleSelect("state")}>State</TabButton>
              </menu>

              <div id="tab-content">
                  <h3>{EXAMPLES[tabContent].title}</h3>
                  <p>{EXAMPLES[tabContent].description}</p>
                  <pre>
                      <code>
                          {EXAMPLES[tabContent].code}
                      </code>
                  </pre>
              </div>
          </section>
      </main>
    </>
  );
}

export default App;
