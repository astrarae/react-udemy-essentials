import React, {useState} from 'react';
import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

function InteractiveShell() {
    const [tabContent, setTabContent] = useState("components"); // using useState re-renders the whole component

    function handleSelect(selectedButton) {
        setTabContent(selectedButton)
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={tabContent==='components'} onClick={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelected={tabContent==='jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={tabContent==='props'} onClick={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelected={tabContent==='state'} onClick={() => handleSelect("state")}>State</TabButton>
                </>
            }>
                <div id="tab-content">
                    <h3>{EXAMPLES[tabContent].title}</h3>
                    <p>{EXAMPLES[tabContent].description}</p>
                    <pre>
                      <code>
                          {EXAMPLES[tabContent].code}
                      </code>
                  </pre>
                </div>
            </Tabs>
        </Section>
    );
}

export default InteractiveShell;