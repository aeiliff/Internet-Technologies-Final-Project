import {baseURL} from './config.js';
import React, {useState} from "react";
import ScrammbleImage from './Textures.js';

const getBase64StringFromDataURL = (data) =>
    data.replace('data:', '').replace(/^.+,/, '');



function LoadImages() {
    const [image, setImage] = useState();
    function handleClick() {
        fetch(`${baseURL}/pictures`)
        .then(res => res.blob())
        .then(data => { 
            console.log(data);
            setImage(URL.createObjectURL(data)); 
            const readFile = new FileReader();
            readFile.onloadend = () => {
                //console.log(readFile.result);
                const base64 = getBase64StringFromDataURL(readFile.result);
                console.log(base64);
                ScrammbleImage(base64);
            }
            readFile.readAsDataURL(data);
      }) 
    }
    return (
        <>
        <button onClick={handleClick}>
            Load Images
        </button>
        <img id="img"
            onClick={handleClick}
            src={image} alt=""/>
        </>
    );
}

function Images() {
    return (
        <LoadImages></LoadImages>
    );
}
export default Images;