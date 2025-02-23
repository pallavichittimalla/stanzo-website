import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Innovation from './Components/Innovation';
import Sample from './Components/sample';
import Innovation2 from './Components/innovation2';
import Innovation3 from './Components/Innovation3';
import Innovation4 from './Components/innovation4';
import Innovation5 from './Components/innovation5';
import Innovation6 from './Components/innovation6';
import Innovation7 from './Components/innovation7'; 

function App() {
  return (
    <div >
      <Header /> 
      <Innovation /> 
      <Innovation2 />
      <Innovation3 />
      <Innovation4 />
      <Innovation5 />
      <Innovation6 />
      <Innovation7 />
      <Footer />
      {/* <Sample /> */}
    </div>
  );
}
export default App;
