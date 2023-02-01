import {useEffect, useState,useRef} from "react";


export default function useFetchData({apiURL}) {
    const cache = useRef({});
    const [apiData, setApiData] = useState(null);
    const [errorData, setErrorData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async function () {
            if (cache.current[apiURL]) {
                const data = cache.current[apiURL];
                setApiData(data);
            }
            else {
                try {
                    setIsLoading(true);
                    const response = await fetch(apiURL);
                    const data = await response.json();
                    cache.current[apiURL] = data;
                    setApiData(data);
                } catch (err) {
                    setErrorData(err.toString())
                } finally {
                    setIsLoading(false)
                }
            } })()
    }, [apiURL]);
    return {apiData, errorData, isLoading}
}