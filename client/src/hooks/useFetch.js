import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [fetchUrl, setFetchUrl] = useState(url);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    console.log("useFetch started");
    const doFetch = useCallback((options = {}, params = ``) => {
        setFetchUrl(url + params)
        console.log("do fetch");
        setOptions(options);
        setLoading(true);
    }, [url]);

    useEffect(() => {
        if (!loading) {
            return;
        }

        const fetchData = async () => {
            try {
                const res = await axios(fetchUrl, options);
                setData(res.data);
            } catch (err) {
                const data = err.response ? err.response.data : "Server error";
                setError(data);
            }
            setLoading(false);
        };
        fetchData();
    }, [loading, options, fetchUrl]);

    return [{ data, error, loading }, doFetch];
};

export default useFetch;