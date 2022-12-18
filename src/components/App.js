import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styled/Global';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

const theme = {
  colors:{
    header:'',
    body:'#23283e',
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
        <Intro/>
        <Projects/>
      </>
    </ThemeProvider>
  );
}

export default App;
