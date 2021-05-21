import './App.css';
import DoePage from './components/DoePage/DoePage';
import NavBar from './components/NavBar/NavBar';
import QuemSomosPage from './components/QuemSomosPage/QuemSomosPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DoePage />
      <QuemSomosPage />
    </div>
  );
}

export default App;
