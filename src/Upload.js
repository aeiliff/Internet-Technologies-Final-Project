import React, {useState} from "react";
import {baseURL} from './config.js'
import './Upload.css';

function Upload() {
  const [file, setFile] = useState();
    function handleChange(e) {
      e.preventDefault();
      const imageData = new FormData();
      imageData.append('file', file);
      console.log(file);
      fetch(`${baseURL}/uploads`,{
        body: imageData,
        method: 'POST'
      })
      .then(res => res.json())
        .then(data => {
        console.log(data);
      })
    }
    return (
      <div className="Uploads">
          <input 
          type="file"
          onChange={e => setFile(e.target.files[0])}></input> 
          <button onClick={handleChange}>Upload</button>
        </div>    
    );
}
export default Upload;