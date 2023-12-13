import {baseURL} from './config.js';
import React, {useState} from 'react';


const setBase64 = (data) =>
        data.replace('data:', '').replace(/^.+,/, '');

function SearchUploads() {
    const [directory, setDirectory] = useState("");
    const [image, setImage] = useState();

    function handleClick (e) {
        e.preventDefault();
        if (directory === 'exit' ) {
            setImage("");
        }
        fetch(`${baseURL}/search-uploads?directory=${directory}`)
          .then(res => res.blob())
            .then(data => {
                setImage(URL.createObjectURL(data)); 
                const readFile = new FileReader();
                readFile.onloadend = () => {
                const base64 = setBase64(readFile.result);
                console.log(base64);
            }
            readFile.readAsDataURL(data);
        })
        setDirectory("");
          
    };
    
    return (
        <div>
        <form onSubmit={handleClick}>
            <label>Encrypt Uploads: </label>
            <input type="text" id="directories" 
            value={directory} onChange={(e) =>
            setDirectory(e.target.value)}/>
            <button type="submit">Enter</button>
            <img id="img"src={image} alt=""/>
        </form>
        </div>
    )
}
export default SearchUploads;