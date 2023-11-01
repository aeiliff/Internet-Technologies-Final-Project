import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Generator</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Choose pictures and textures to create a new image</code>
        </p>
        <button id ="load-images">Images</button>
        <button>Textures</button>
       <a 
          className="Image-link"
          href= "image.html"
          target="_blank"
          rel="noopener noreferrer">Images
        </a>
        <a
          className="Texture-link"
          href="textures.html"
          target="_blank"
          rel="noopener noreferrer"
        >Textures
        </a>
      </header>
    </div>
    
  );
}

function loadData() {
  console.log("out");
}
export default App;
