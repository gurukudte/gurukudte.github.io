import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styled/Global';
import Intro from './About/Intro';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const theme = {
  colors:{
    header:'',
    body:'#030217',
    footer:'',
    primary:'#90a0d9',
    secondary:'#bdbddd'
  },
  flex:{
    flexCenter:'display:flex; align-items:center; justify-content:center;'
  },
  marginCenter:{
    center:`max-width: 1100px; width: 95%; margin: 0 auto;`
  }

}


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles/>
        <div id="app">
          <Intro/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
