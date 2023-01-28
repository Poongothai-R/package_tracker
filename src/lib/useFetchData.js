import {useEffect, useState} from "react";


export default function useFetchData({apiURL}) {
    const [apiData, setApiData] = useState(null);
    const [errorData, setErrorData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async function () {
                try {
                    setIsLoading(true);
                    const response = await fetch(apiURL);
                    const data = await response.json();
                    setApiData(data);
                } catch (err) {
                    setErrorData(err.toString())
                } finally {
                    setIsLoading(false)
                }
            })()
    }, [apiURL]);

    return {apiData, errorData, isLoading}

}