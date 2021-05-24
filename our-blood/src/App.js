import './App.css';
import DoePage from './components/DoePage/DoePage';
import NavBar from './components/NavBar/NavBar';
import QuemSomosPage from './components/QuemSomosPage/QuemSomosPage';
import UltimosDoadores from './components/UltimosDoadores/UltimosDoadores';
import OQueFazemos from './components/OQueFazemos/OQueFazemos';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <DoePage />
      <QuemSomosPage />
      <UltimosDoadores />
      <OQueFazemos />
      <Footer />
    </div>
  );
}

export default App;
