import axios from 'axios';
import React from 'react';
import {useState , useEffect} from 'react';

function Api(){
    const [data, setData] = useState([{}]);
    
    const Service = () => {
        axios
        .get("https://swapi.dev/api/species")
        .then((response) => {
            setData(response.data.results)
        })
    }

    useEffect(() => {
        setData(Service());
    }, [])

   console.log(data);
    return(
        <div>            
        {data.map((x, i) => ( 
            <ul>
              <li key={i}>{x.name}</li>
           </ul>    
        ))}
        
        </div>
    )
}
export default Api;