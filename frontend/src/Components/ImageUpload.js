import React, {useState} from "react";
import {Col, Container, FormControl, FormGroup, FormLabel, Image, Row} from "react-bootstrap";
import useFileChange from "../Hooks/useFileChange";

const ImageUpload = (props) => {

    const {onFileChangeHandler: fileUploadChange} = useFileChange();



    return (
        <>
            <FormGroup className={'mb-3'}>
                <FormLabel>Upload your image</FormLabel>
                <FormControl type={'file'} name={'file'} onChange={(e) => {
                    props.setSelectedFile(e.target.files[0])
                }}/>
            </FormGroup>
            <Container>
                {props.selectedFile && (
                    <Image fluid src={URL.createObjectURL(props.selectedFile)} alt="Uploaded Image"/>
                )}
            </Container>
        </>

    )
}

export default ImageUpload;