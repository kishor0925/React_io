import React from 'react'
import  { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Couldn't retrieve data");
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    setError(error.message);
                });
        }, 1000);
    }, []);
    return (
       [data,error,setData]
    )
}

export default useFetch