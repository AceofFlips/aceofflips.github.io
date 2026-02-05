import {useEffect, useState} from "react";

export function useFetch(url: string) {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");

            if (!response.ok) {
                throw new Error(`Error Status: ${response.status}`);
            }

            const data = await response.json();
            setData(data?.users)

        } catch (error: any) {
            console.error("error", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return{data,loading,error,refetch: fetchData};
}