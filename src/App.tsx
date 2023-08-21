import React from 'react';
import {Main} from "./components/Main/Main.styled";
import {Stack} from "./components/Stack/Stack.styled";
import {Projects} from "./components/Projects/Projects.styled";
import {Skills} from "./components/Skills/Skills.styled";
import {Contact} from "./components/Contact/Contact.styled";
import {Footer} from "./components/Footer/Footer.styled";

function App() {
  return (
      <div>
          <Main/>
          <Stack/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
      </div>

  );
}

export default App;
