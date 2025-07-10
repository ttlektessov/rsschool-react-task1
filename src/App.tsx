import './App.css';
import TopControls from './components/TopControls';
import Results from './components/Results';

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-gray-800">
      <TopControls />
      <Results />
    </div>
  );
}

export default App;
