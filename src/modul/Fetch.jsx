import { useEffect, useState } from "react";
import "./Fetch.css";

const Fetch = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(function() {
        

        // CARA 1
        // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(
        //     function(response){
        //         return response.json();
        //     }
        //     ).then(function(response){
        //         console.log(response);
        //     });
        // console.log(getData);


        // CARA 2 ASYNC - AWAIT
        async function getData(){
            const request = await fetch(
                'https://api.spaceflightnewsapi.net/v3/blogs'
            );
            console.log(request);


            const response = await request.json();
            // console.log(response);
            setNews(response);
            setLoading(false);

        }
        getData();
    },[])
    return(
        <>
        <h1>Fetch API</h1>
        {loading ? (<i>Loading ...</i>) : (

        <ol>
            {news.map(function(item){
                return <li key={item.id} >{item.title}</li>
            })} 
        </ol>

        ) }
        
        </>
    )
}



export default Fetch;