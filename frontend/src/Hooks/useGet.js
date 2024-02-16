import axios from "../axios";
import {useEffect, useState} from 'react';

const useGet = (url) => {

    console.log(url)
    const [refresh, setRefresh] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (uurl) => {
        await axios.get(uurl).then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.warn(err)
        }).finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getData(url);
    }, [refresh]);

    return {
        data,
        setData,
        isLoading,
        getData,
        setRefresh
    };
};


export default useGet;