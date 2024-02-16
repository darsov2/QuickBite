import axios from "../axios";
import {useState} from "react";

const useFileChange = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const onFileChangeHandler = (e) => {
        e.preventDefault();
        setSelectedFile(null);
        console.log('OOOOOO')
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])

        console.log(selectedFile)
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        axios.post('/upload', null, {
            params: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };

    return {onFileChangeHandler, selectedFile};

}
export default useFileChange;