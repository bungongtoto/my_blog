import { useState, useEffect } from "react"

function useFetch(url){
    const [data, setBlogs] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        setTimeout(() => {
            fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not fetch the data for that resource");
                }
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err)=>{
            setIsPending(false)
            setError(err.message)
            })
        },2000)
    },[url])

    return {data, isPending, error}
}

export default useFetch;