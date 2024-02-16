import React from "react";

import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {get} from "axios";

const useCreate = () => {

    //const history = useNavigate();
    const createEntity = async (url, entity, getData) => {
        console.log("OREEEEEEL");
        console.log("hotel od vnatre ")
        console.log(entity)
        await axios
            .post(url, entity, {
                // params: entity,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                //history.push('/hotel');
                console.log(res)
                getData(prev => ++prev)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
            });
    }

    return {
        createEntity
    };

}

export default useCreate;