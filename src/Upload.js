import React, {useState} from "react";
import {baseURL} from './config.js'
import './Upload.css';



function Upload() {
  const [file, setFile] = useState();
    function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
      <div className="Upload">
          <input type="file" onChange={handleChange} />
          <img id="image" src={file} alt = ""/>
        </div>    
    );
}
export default Upload;