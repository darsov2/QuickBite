import React from "react";

import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {get} from "axios";

const useDelete = () => {

    //const history = useNavigate();
    const deleteEntity = async (url, getData) => {
        console.log("OREEEEEEL");
        console.log("hotel od vnatre ")
        await axios
            .get(url)
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
        deleteEntity
    };

}

export default useDelete;