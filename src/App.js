import './App.css';
import SelectImages from './SelectImages.js';
import Upload from './Upload';
import SearchUploads from './SearchUploads.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Finder</h1>
      </header> 
      <section className="images">
        <p>Find and Upload Pictures!</p>
        <div className="controls">
          <div>
            <SelectImages></SelectImages>
            <Upload></Upload>
            <SearchUploads></SearchUploads>
          </div>
        </div>
      </section>   
    </div>
  );
}
export default App;
