import React, {useState} from 'react';
import {baseURL} from './config.js';

function SelectImages() {
    const [directory, setDirectory] = useState("");
    const [image, setImage] = useState();

    function handleClick (e) {
        e.preventDefault();
        fetch(`${baseURL}/images?directory=${directory}`)
          .then(res => res.blob())
            .then(data => {
            setImage(URL.createObjectURL(data)); 
          })
          setDirectory(""); 
    };

    return (
        <form onSubmit={handleClick}>
            <label>Search for Picture: </label>
            <input type="text" id="directories" 
                value={directory} onChange={(e) =>
                setDirectory(e.target.value)}/>
            <button type="submit">Enter</button>
            <img id="img"src={image} alt=""/>
        </form>
        
    )
}

export default SelectImages;