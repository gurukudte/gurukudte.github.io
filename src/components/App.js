import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Main from './Main';
import GlobalStyles from './styled/Global';

const theme = {
  colors:{
    header:'',
    body:'#23283e',
    footer:'',
    primary:'#90a0d9'
  }
  
}


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles/>
        <Header/>
        <Main/>
      </>
    </ThemeProvider>
  );
}

export default App;
