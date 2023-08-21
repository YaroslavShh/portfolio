import React from 'react';
import {Main} from "./components/Main/Main.styled";
import {Stack} from "./components/Stack/Stack.styled";
import {Projects} from "./components/Projects/Projects.styled";
import {Skills} from "./components/Skills/Skills.styled";

function App() {
  return (
      <div>
          <Main/>
          <Stack/>
          <Projects/>
          <Skills/>
      </div>

  );
}

export default App;
