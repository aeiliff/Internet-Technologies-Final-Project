import './App.css';
import { baseURL } from './config.js';
import Images from './Images.js';
import ScrammbleImage from './Textures';
import Upload from './Upload';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Generator</h1>
      </header> 
      <section className="images">
        <p>Choose pictures and textures to create a new image</p>
        <div className="controls">
          <div>
            <Images></Images>
            <ScrammbleImage></ScrammbleImage>
            <Upload></Upload>
          </div>
        </div>
      </section>   
    </div>
  );
}
export default App;
