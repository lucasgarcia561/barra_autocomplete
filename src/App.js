import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js'
import Searchs from './db.json'

function App() {
  return (
      <>
        <SearchBar data={Searchs} />
      </>
  );
}

export default App;
