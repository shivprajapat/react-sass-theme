import './App.css';
import ThemeProvider from './context/ThemeProvider';
import ThemeSelect from './components/ThemeSelect';

function App() {
  return (
      <div className="App">
    <ThemeProvider>
      <ThemeSelect/>
      <div className="myClass">
        <h1>Reactjs Light & Dark Mode Using SASS</h1>
      </div>
    </ThemeProvider>
      </div>
  );
}

export default App;
