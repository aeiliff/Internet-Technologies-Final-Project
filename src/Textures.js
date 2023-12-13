import {baseURL} from './config.js';

function ScrammbleImage(base64) {
    function handleClick() {
        fetch(`${baseURL}/textures`,{
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(base64)
    })
        .then(res => res.blob())
        .then(data => { 
         console.log(data);   
      }) 
    }
    return (
        <button onClick={handleClick}>
            Load Textures
        </button>
    );
}
export default ScrammbleImage;