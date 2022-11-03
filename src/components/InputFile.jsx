import CryptoJS from 'crypto-js';

function InputFile() {

    const handleFile = (file) => {
        if (file === undefined) {
            return;
        }
        console.log(file);

        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function() {
            let file_result = this.result;
            console.log(this.result);
            let file_wordArr = CryptoJS.lib.WordArray.create(file_result);
            let sha256_hash = CryptoJS.SHA256(file_wordArr); 
            let Hash = sha256_hash.toString();
            console.log(Hash);
        }
    };

    return (
        <input 
            type="file" 
            id="myfile" 
            name="myfile" 
            accept="application/pdf" 
            onChange={e => handleFile(e.target.files[0])}
        />
    );
  }
  
  export default InputFile;