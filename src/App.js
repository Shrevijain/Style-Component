import './App.css';
import StyledButton , {FancyButton, SubmitButton} from './components/button/button';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
button {
  font-family:'Roboto';
}
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <button>Button</button> */}
      <StyledButton>Style Button</StyledButton>
      <div><br></br></div>
      <StyledButton varient="outline">Style Button</StyledButton>
      <div><br></br></div>
      <FancyButton>Fancy Button</FancyButton>
      <div><br></br></div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}



export default App;
